"use client";
import { FC } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "@material-tailwind/react";
import { Message } from "@/constant/types";
import axios from "axios";
const ContactSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
});

const ContactForm: FC = () => {
  const handleSubmit = async (
    values: Message,
    formikHelpers: FormikHelpers<Message>
  ) => {
    const { status } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}messages`,
      values
    );
    if (status !== 201) {
      console.error("Failed to add product");
      return;
    }
    console.log(values);
    formikHelpers.resetForm();
    alert("Message added successfully");
  };
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          message: "",
          email: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-5 w-full">
            <label htmlFor="userName" className="">
              User Name
            </label>

            <Field
              name="userName"
              placeholder="User Name"
              className="w-full bg-light-cyan p-2 rounded-lg border-2 border-light-purple"
            />
            {errors.userName && touched.userName ? (
              <div className="text-red-500">{errors.userName}</div>
            ) : null}
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="w-full bg-light-cyan p-2 rounded-lg border-2 border-light-purple"
            />
            {errors.email && touched.email ? (
              <div className="text-red-500">{errors.email}</div>
            ) : null}
            <label htmlFor="message">Message</label>
            <Field
              placeholder="Message"
              as="textarea"
              name="message"
              className="w-full h-40 bg-light-cyan p-2 rounded-lg border-2 border-light-purple"
            />
            {errors.message && touched.message ? (
              <div className="text-red-500">{errors.message}</div>
            ) : null}
            <Button
              className="bg-gradient-to-r from-light-blue to-light-purple  rounded-lg px-8 py-3 max-w-[100px] text-light-cyan font-medium"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default ContactForm;
