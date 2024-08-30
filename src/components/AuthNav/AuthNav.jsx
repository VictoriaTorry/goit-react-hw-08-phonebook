import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `${isActive ? css.link + ' ' + css.active : css.link}`
          }
        >
          Register
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${isActive ? css.link + ' ' + css.active : css.link}`
          }
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
};
