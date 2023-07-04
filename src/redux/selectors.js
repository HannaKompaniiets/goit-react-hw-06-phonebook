export const selectContacts = state => state.contacts.items;
export const selectFilter = ({ filter }) => filter;
export const selectFilteredContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }

  return items.filter(item =>
    item.text.toLowerCase().includes(filter.toLowerCase())
  );
};