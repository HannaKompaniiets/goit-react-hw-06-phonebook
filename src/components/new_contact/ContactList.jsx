import css from './new_contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = ({ id, name, number }) => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          <p className={css.contact_title}>
            {name} : {number}
          </p>
          <button
            className={css.button_delete}
            onClick={() => dispatch(deleteContact(id))}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
