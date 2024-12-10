/* eslint-disable no-restricted-globals */

import { useState } from 'react';

import useCart from './useCart';

import { auth } from '@/api/auth';

import { RequestStatus } from '@/constants';

import { loadUserAddresses } from '@/store/slices/address';
import { clearCart } from '@/store/slices/cart';
import { loadActiveOrders, loadInactiveOrders } from '@/store/slices/orders';
import { logout, setUser, setUserLoadingStatus } from '@/store/slices/user';
import { AppDispatch } from '@/store/types';
import { deleteTokens, getTokens, setTokens } from '@/utils/tokensFactory';

const useAuth = (dispatch: AppDispatch) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpRequested, setIsOtpRequested] = useState(false);

  const { initCart, activeCart, mergeCartItems } = useCart();

  const setLoadingStatus = (status: RequestStatus) => {
    dispatch(setUserLoadingStatus(status));
  };

  const loadUser = async () => {
    const { data } = await auth.me();
    dispatch(setUser(data));
  };

  const loadUserContent = async () => {
    const oldCart = activeCart.data;
    await Promise.all([
      initCart(),
      dispatch(loadUserAddresses()),
      dispatch(loadActiveOrders()),
      dispatch(loadInactiveOrders()),
    ]);
    await initCart();
    if (oldCart) {
      await mergeCartItems(oldCart);
    }
  };

  const clearUserContent = async () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  const resetAuthState = () => {
    setEmail('');
    setPassword('');
    setOtp('');
    setIsOtpRequested(false);
  };

  const initExistingUser = async () => {
    try {
      setLoadingStatus(RequestStatus.PENDING);
      await loadUser();
      await loadUserContent();
      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);
      throw e;
    }
  };

  const initAnonymousUser = async () => {
    try {
      const { data } = await auth.signin.anonymous();

      const { error, user, session } = data;

      if (error) {
        setLoadingStatus(RequestStatus.REJECTED);

        throw error;
      }
      session && setTokens(session);
      dispatch(setUser(user));
      await loadUserContent();
      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);

      throw e;
    }
  };

  const initUser = async () => {
    const { access_token } = await getTokens();
    if (!access_token) {
      await initAnonymousUser();
    } else {
      try {
        await initExistingUser();
      } catch (e) {
        await initAnonymousUser();
        throw e;
      }
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
      dispatch(setUser(user));
      await loadUserContent();
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

      setLoadingStatus(RequestStatus.FULFILLED);
    } catch (e) {
      setLoadingStatus(RequestStatus.REJECTED);

      throw e;
    }
  };

  const verifyPhoneOtp = async () => {
    setLoadingStatus(RequestStatus.PENDING);

    try {
      const {
        data: { error, access_token, refresh_token },
      } = await auth.verify.phone.otp(phone, otp);

      if (error) {
        setLoadingStatus(RequestStatus.REJECTED);

        throw error;
      }

      if (access_token) {
        const tokens = {
          access_token,
          refresh_token,
        };
        setTokens(tokens);
      }

      await initExistingUser();
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
    initUser,
    signIn,
    verifyEmailOtp,
    verifyPhoneOtp,
    signOut,
    initExistingUser,
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
    initAnonymousUser,
    name,
    setName,
    loadUser,
  };
};

export default useAuth;
