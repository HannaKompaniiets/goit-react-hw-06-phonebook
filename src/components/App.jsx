import Form from './form/Form';
import ContactList from './new_contact/ContactList';
import Filter from './filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <>
      <h2>Phonebook</h2>
      <Form />

      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />

      {contacts.length ? <ContactList /> : <p>Contact not found</p>}
    </>
  );
};

export default App;
