import { TOrderPaymentStatusModalProps } from '@/components/modals/OrderPaymentStatusModal';

export const isOrderPaymentStatusModalProps = (value: unknown): value is TOrderPaymentStatusModalProps =>
  typeof value === 'object' && value !== null && 'isPaymentSuccessful' in value && 'isUserLoggedIn' in value;
