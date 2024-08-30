import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { selectError } from '../../redux/contacts/selectors';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './Contacts.module.css';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <h1 className={css.title} title="Phonebook">
        Phonebook
      </h1>
      <ContactForm />
      <h2 className={css.title} title="Contact">
        Contact
      </h2>
      <Filter />
      {isLoading && !isError && <Loader />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={css.warning}>
          Currently your phonebook has no contacts. <br />
          Please add them.
        </p>
      )}
    </div>
  );
}
