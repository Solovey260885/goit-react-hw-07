// import { useEffect, useState } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
// import initialContact from "../../contactData.json";

import css from "./App.module.css";

// const getInitialValues = () => {
//   const savedValues = window.localStorage.getItem("my-contacts");
//   return savedValues !== null ? JSON.parse(savedValues) : initialContact;
// };

export default function App() {
  // const [contacts, setContacts] = useState(getInitialValues);
  // const [filter, setFilter] = useState("");

  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };

  // useEffect(() => {
  //   window.localStorage.setItem("my-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.App}>
      <h1 className={css.AppTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
