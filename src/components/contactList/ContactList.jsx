import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ onDelete }) {
  const contacts = useSelector((state) => state.contacts.items);

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
