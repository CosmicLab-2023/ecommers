"use client";
import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { host } from "../../../host.config";
import Link from "next/link";
function RegisterForm() {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
  };
  let userSchema = Yup.object({
    name: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  async function onSubmit(values, {}) {
    console.log({ values });
    try {
      const url = `/api/auth/login`;
      const res = await axios.post(url, {
        name: values.name,
        username: values.username,
        email: values.email,
        identifier: values.identifier,
        password: values.password,
      });
      console.log(res.data);
    } catch (e) {}
  }
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={userSchema}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className=" w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1 w-full">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className={`input ${
                !!touched.name && !!errors.name
                  ? "bg-red-300/50 border border-red-500"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 dark:text-red-300"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className={`input ${
                !!touched.username && !!errors.username
                  ? "bg-red-300/50 border border-red-500"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 dark:text-red-300"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className={`input ${
                !!touched.email && !!errors.email
                  ? "bg-red-300/50 border border-red-500"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 dark:text-red-300"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className={`input ${
                !!touched.password && !!errors.password
                  ? "bg-red-300/50 border border-red-500"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 dark:text-red-300"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <button type="submit" className="btn py-2" disabled={isSubmitting}>
              Submit
            </button>
          </div>
          <div className="flex flex-row gap-1 w-full">
            <span>I have an account</span>
            <Link href="/auth/login" className="link-text">
              Login
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
