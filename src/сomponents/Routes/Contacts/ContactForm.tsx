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
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <input
                        type="tel"
                        name="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tel}
                    />
                    <input
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
