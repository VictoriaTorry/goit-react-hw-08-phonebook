import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './Login.module.css';

export default function Login() {
  return (
    <div className={css.main}>
      <title className={css.title}>Login</title>
      <LoginForm />
    </div>
  );
}
