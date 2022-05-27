import React from 'react';
import s from './contact.module.scss'
import {Formik} from "formik";

const ContactForm = () => {
    return (
        <Formik
            initialValues={{email: '', tel: '', message: ''}}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form className={s.form} onSubmit={handleSubmit}>
                    <label htmlFor={"email"} className={s.innerText}>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <label htmlFor={"tel"} className={s.innerText}>Phone number</label>
                    <input
                        type="tel"
                        name="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tel}
                    />
                    <label htmlFor={"message"} className={s.innerText}>Message</label>
                    <textarea
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
};

export default ContactForm;
