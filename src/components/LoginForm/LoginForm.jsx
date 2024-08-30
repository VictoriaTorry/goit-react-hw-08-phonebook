import { useForm } from 'react-hook-form';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    dispatch(
      logIn({
        email: event.email,
        password: event.password,
      })
    );
    reset();
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className={css.container}>
        <label className={css.label}>Email</label>
        <input
          className={css.inputField}
          {...register('email')}
          type="email"
          name="email"
        />
        <label className={css.label}>Password</label>
        <input
          className={css.inputField}
          {...register('password')}
          type="password"
          name="password"
        />
      </div>
      <button className={css.btn} type="submit">
        Log In
      </button>
    </form>
  );
};
