import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? css.link + ' ' + css.active : css.link}`
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `${isActive ? css.link + ' ' + css.active : css.link}`
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
