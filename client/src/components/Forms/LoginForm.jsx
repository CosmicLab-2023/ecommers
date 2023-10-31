"use client";
import axios from "axios";
import { ErrorMessage, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
function LoginForm() {
  const initialValues = {
    identifier: "",
    password: "",
  };
  let userSchema = Yup.object({
    identifier: Yup.string().required(),
    password: Yup.string().required(),
  });

  async function onSubmit(values, {}) {
    console.log({ values });
    try {
      const url = `/api/auth/login`;
      const res = await axios.post(url, {
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
            <label>Identifier</label>
            <input
              type="text"
              name="identifier"
              className={`input ${
                !!touched.identifier && !!errors.identifier
                  ? "bg-red-300/50 border border-red-500"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.identifier}
            />
            <ErrorMessage
              name="identifier"
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
          <div className="flex flex-row gap-1 justify-between w-full">
            <Link href="/auth/register" className="link-text">
              Verify Email
            </Link>
            <Link href="/auth/register" className="link-text">
              Forget Password
            </Link>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <button type="submit" className="btn py-2" disabled={isSubmitting}>
              Submit
            </button>
          </div>
          <div className="flex flex-row gap-1 w-full">
            <span>I don't have an account</span>
            <Link href="/auth/register" className="link-text">
              Register
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
