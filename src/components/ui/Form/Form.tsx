import { FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';

const Form: FC<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = ({ children, ...props }) => (
  <form {...props} noValidate className={props.className}>
    {children}
  </form>
);

export default Form;
