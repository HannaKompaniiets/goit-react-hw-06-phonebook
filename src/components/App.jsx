import Form from './form/Form';
import ContactList from './new_contact/ContactList';
import Filter from './filter/Filter';
import {  useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter/>
      {contacts.length ? <ContactList /> : <p>Contact not found</p>}
    </>
  );
};

export default App;
