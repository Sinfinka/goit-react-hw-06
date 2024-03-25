import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
// import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm() {
  //{ onSubmit } в аргумент
  // const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };
  return (
    <div>
      {/* <p>
        {contacts.map((contact, index) => (
          <span key={index}>
            {contact.name}, {contact.number}
            <br />
          </span>
        ))}
      </p> */}

      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        // onSubmit={(values, actions) => {
        //   onSubmit({ ...values, id: nanoid() });
        //   actions.resetForm();
        // }}
        validationSchema={SignupSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="User Name"
          />
          <span className={css.error}>
            <ErrorMessage name="name" component="span" />{" "}
          </span>

          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
            placeholder="xxx-xx-xx"
          />
          <span className={css.error}>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </span>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
