import css from './RegisterForm.module.css';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = event => {
    if (!event.name.trim() || !event.email.trim() || !event.password.trim()) {
      return toast.error('All fields must be filled!');
    } else if (event.password.length < 8) {
      return toast.info(
        'The password should be least at 8 characters long, it must contain uppercase and lowercase letters and numbers!'
      );
    }
    dispatch(
      registerUser({
        name: event.name,
        email: event.email,
        password: event.password,
      })
    );
    reset();
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className={css.container}>
        <label className={css.label}>Username</label>
        <input
          className={css.inputField}
          {...register('name')}
          type="text"
          name="name"
        />
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
        Register
      </button>
    </form>
  );
};
