"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import { useEffect, useRef, useState } from "react";
import Calendar from "../Calendar/Calendar";

export default function BookingForm() {

const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    bookingDate: Yup.date().nullable().required("Date is required"),
    comment: Yup.string(),
  });

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={{ name: "", email: "", bookingDate: null, comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert("Success! Your booking has been sent.");
          resetForm(); 
        }}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className={css.form} noValidate>
            <div>
              <Field
                name="name"
                placeholder="Name*"
                className={`${css.input} ${errors.name && touched.name ? css.errorBorder : ""}`}
              />
              <ErrorMessage name="name" component="span" className={css.errorText} />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={`${css.input} ${errors.email && touched.email ? css.errorBorder : ""}`}
              />
              <ErrorMessage name="email" component="span" className={css.errorText} />
            </div>

            <div ref={calendarRef}>
              <div className={css.datePickerWrapper}>
                <input
                  type="text"
                  readOnly
                  placeholder="Booking date*"
                  value={values.bookingDate ? (values.bookingDate as Date).toLocaleDateString("uk-UA") : ""}
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className={`${css.input} ${errors.bookingDate && touched.bookingDate ? css.errorBorder : ""}`}
                />
                
                {isCalendarOpen && (
                  <div className={css.calendarDropdown}>
                    <Calendar
                      selectedDate={values.bookingDate}
                      onSelect={(date) => {
                        setFieldValue("bookingDate", date);
                        setIsCalendarOpen(false); 
                      }}
                    />
                  </div>
                )}
              </div>
              <ErrorMessage name="bookingDate" component="span" className={css.errorText} />
            </div>

            <div>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
                rows={4}
              />
            </div>

           <button type="submit" className={`${css.submitButton} button`}>
              Send
            </button>
          </Form>
        )}
      </Formik>
       
    </div>
  );
}