/* eslint-disable no-restricted-globals */

import { message } from 'antd';

import { useState } from 'react';

import { auth } from '@/api/auth';

import { RequestStatus } from '@/constants';

import { setUser, setUserData, setUserLoadingStatus } from '@/store/slices/user';
import { AppDispatch } from '@/store/types';
import { deleteTokens, setTokens } from '@/utils/tokensFactory';

const useAuth = (dispatch: AppDispatch) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpRequested, setIsOtpRequested] = useState(false);

  const setLoadingStatus = (status: RequestStatus) => {
    dispatch(setUserLoadingStatus(status));
  };

  const getUser = async () => {
    const { data } = await auth.me();
    dispatch(setUser(data));
  };

  const loadUserData = async () => {
    const { data } = await auth.user_data();
    dispatch(setUserData(data));
  };

  const loadUserContent = async () => {
    await Promise.all([loadUserData()]);
  };

  const clearUserContent = async () => {
    dispatch(setUser(null));
    dispatch(setUserData(null));
  };

  const resetAuthState = () => {
    setEmail('');
    setPassword('');
    setOtp('');
    setIsOtpRequested(false);
  };

  const initUser = async () => {
    try {
      setLoadingStatus(RequestStatus.PENDING);
      await getUser();
      await loadUserContent();
      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);
      deleteTokens();
    }
  };

  const signUp = async () => {
    setLoadingStatus(RequestStatus.PENDING);

    try {
      const { data } = await auth.signUp.password(email, password);
      const { error, user, session } = data;
      if (error) {
        setLoadingStatus(RequestStatus.REJECTED);

        throw error;
      }
      session && setTokens(session);
      await loadUserContent();
      dispatch(setUser(user));

      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);

      throw e;
    }
  };

  const signIn = async () => {
    setLoadingStatus(RequestStatus.PENDING);

    try {
      const { data } = await auth.signin.password(email, password);

      const { error, user, session } = data;

      if (error) {
        setLoadingStatus(RequestStatus.REJECTED);

        throw error;
      }
      session && setTokens(session);
      await loadUserContent();
      dispatch(setUser(user));

      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);

      throw e;
    }
  };

  const getEmailOtp = async () => {
    setLoadingStatus(RequestStatus.PENDING);

    try {
      const { data } = await auth.signin.email.otp(email);
      if (data.error) {
        setLoadingStatus(RequestStatus.REJECTED);

        throw data.error;
      }
      setIsOtpRequested(true);
      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);

      throw e;
    }
  };

  const getPhoneOtp = async () => {
    setLoadingStatus(RequestStatus.PENDING);

    try {
      const { data } = await auth.signin.phone.otp(phone);
      if (data.error) {
        setLoadingStatus(RequestStatus.REJECTED);

        throw data.error;
      }
      setIsOtpRequested(true);
      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);

      throw e;
    }
  };

  const verifyEmailOtp = async () => {
    setLoadingStatus(RequestStatus.PENDING);

    try {
      const { data } = await auth.verify.email.otp(email, otp);

      if (data.error) {
        setLoadingStatus(RequestStatus.REJECTED);

        throw data.error;
      }

      if (data.access_token) {
        const tokens = {
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        };
        setTokens(tokens);
      }

      dispatch(setUser(data.user));
      await loadUserContent();

      message.success('You have successfully logged in');

      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);

      throw e;
    }
  };

  const verifyPhoneOtp = async () => {
    setLoadingStatus(RequestStatus.PENDING);

    try {
      const { data } = await auth.verify.phone.otp(phone, otp);

      if (data.error) {
        setLoadingStatus(RequestStatus.REJECTED);

        throw data.error;
      }

      if (data.access_token) {
        const tokens = {
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        };
        setTokens(tokens);
      }

      dispatch(setUser(data.user));
      // await loadUserContent();
      message.success('You have successfully logged in');
      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);

      throw e;
    }
  };

  const signOut = async () => {
    setLoadingStatus(RequestStatus.PENDING);

    try {
      clearUserContent();
      deleteTokens();
    } finally {
      setLoadingStatus(RequestStatus.NONE);
    }
  };

  return {
    signIn,
    verifyEmailOtp,
    verifyPhoneOtp,
    signUp,
    signOut,
    initUser,
    setEmail,
    setPhone,
    setPassword,
    resetAuthState,
    email,
    phone,
    password,
    otp,
    setOtp,
    getEmailOtp,
    getPhoneOtp,
    isOtpRequested,
    name,
    setName,
  };
};

export default useAuth;
