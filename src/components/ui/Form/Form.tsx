import { FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';

export const Form: FC<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = ({
  children,
  ...props
}) => (
  <form {...props} noValidate className={`flex flex-col ${props.className}`}>
    {children}
  </form>
);
