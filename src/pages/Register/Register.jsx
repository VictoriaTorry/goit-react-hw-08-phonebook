import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.css';

export default function Register() {
  return (
    <div className={css.main}>
      <title className={css.title}>Registration</title>
      <RegisterForm />
    </div>
  );
}
