"use client";
import { ErrorMessage, Formik, getIn } from "formik";
import React, { useState } from "react";
import Alert from "../ui/Alert";
import * as yup from "yup";
function CheckoutForm({ user }) {
  const [message, setMessage] = useState();
  const getValue = (value) => {
    return value ? value : "";
  };

  const initialValues = {
    billingAddress: {
      first_name: getValue(user?.first_name),
      last_name: getValue(user?.last_name),
      phone_number: getValue(user?.phone_number),
      email: getValue(user?.email),
      country: getValue(user?.address?.country),
      street: getValue(user?.address?.street),
      city: getValue(user?.address?.city),
      state: getValue(user?.address?.state),
    },
    shippingAddress: {
      isSameAddress: true,
      first_name: getValue(user?.first_name),
      last_name: getValue(user?.last_name),
      phone_number: getValue(user?.phone_number),
      email: getValue(user?.email),
      country: getValue(user?.address?.country),
      street: getValue(user?.address?.street),
      city: getValue(user?.address?.city),
      state: getValue(user?.address?.state),
    },
  };

  async function onSubmit(values, {}) {
    console.log(values);
  }

  return (
    <div className="w-full">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {message && (
              <div className="col-span-2">
                <Alert
                  message={message}
                  handleRemove={() => setMessage(undefined)}
                />
              </div>
            )}
            <AddressInput
              values={values.billingAddress}
              errors={errors?.billingAddress}
              handleBlur={handleBlur}
              handleChange={handleChange}
              touched={touched?.billingAddress}
              type={"billingAddress"}
            />
            <div className="col-span-1 flex items-center gap-1 w-full">
              <input
                checked={values.shippingAddress.isSameAddress}
                id="shippingAddress.isSameAddress"
                values={values.shippingAddress.isSameAddress}
                type="checkbox"
                name={"shippingAddress.isSameAddress"}
                onChange={handleChange}
                className="checkbox"
              />
              <label htmlFor="shippingAddress.isSameAddress">
                Is Same Address
              </label>
            </div>
            {!values.shippingAddress.isSameAddress && (
              <AddressInput
                values={values.shippingAddress}
                errors={errors?.shippingAddress}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched?.shippingAddress}
                type={"shippingAddress"}
              />
            )}
            <div className="col-span-2 flex flex-col gap-1 w-full">
              <button
                type="submit"
                className="btn-primary py-2"
                disabled={isSubmitting}
              >
                Place Order
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

function AddressInput({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  type,
}) {
  const formattedName = (field) => `${type}.${field}`;
  console.log(values.first_name);
  return (
    <div className=" w-full grid grid-cols-2 gap-4">
      <div className="col-span-1 flex flex-col gap-1 w-full">
        <label>First Name</label>
        <input
          type="text"
          name={formattedName("first_name")}
          className={`input ${
            !!touched?.first_name && !!errors?.first_name
              ? "bg-red-300/50 border border-red-500"
              : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.first_name}
        />
        <ErrorMessage
          name={formattedName("first_name")}
          component="div"
          className="text-red-500 dark:text-red-300"
        />
      </div>
      <div className="col-span-1 flex flex-col gap-1 w-full">
        <label>Las Name</label>
        <input
          type="text"
          name={formattedName("last_name")}
          className={`input ${
            !!touched?.last_name && !!errors?.last_name
              ? "bg-red-300/50 border border-red-500"
              : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.last_name}
        />
        <ErrorMessage
          name={formattedName("last_name")}
          component="div"
          className="text-red-500 dark:text-red-300"
        />
      </div>
      <div className="col-span-1 flex flex-col gap-1 w-full">
        <label>Email</label>
        <input
          type="email"
          name={formattedName("email")}
          className={`input ${
            !!touched?.email && !!errors?.email
              ? "bg-red-300/50 border border-red-500"
              : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <ErrorMessage
          name={formattedName("email")}
          component="div"
          className="text-red-500 dark:text-red-300"
        />
      </div>

      <div className="col-span-1 flex flex-col gap-1 w-full">
        <label>Phone Number</label>
        <input
          type="tel"
          name={formattedName("phone_number")}
          className={`input ${
            !!touched?.phone_number && !!errors?.phone_number
              ? "bg-red-300/50 border border-red-500"
              : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone_number}
        />
        <ErrorMessage
          name={formattedName("phone_number")}
          component="div"
          className="text-red-500 dark:text-red-300"
        />
      </div>

      <div className="col-span-1 flex flex-col gap-1 w-full">
        <label>Country</label>
        <input
          type="text"
          name={formattedName("country")}
          className={`input ${
            !!touched?.country && !!errors?.country
              ? "bg-red-300/50 border border-red-500"
              : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.country}
        />
        <ErrorMessage
          name={formattedName("country")}
          component="div"
          className="text-red-500 dark:text-red-300"
        />
      </div>
      <div className="col-span-1 flex flex-col gap-1 w-full">
        <label>State</label>
        <input
          type="text"
          name={formattedName("state")}
          className={`input ${
            !!touched?.state && !!errors?.state
              ? "bg-red-300/50 border border-red-500"
              : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.state}
        />
        <ErrorMessage
          name={formattedName("state")}
          component="div"
          className="text-red-500 dark:text-red-300"
        />
      </div>

      <div className="col-span-1 flex flex-col gap-1 w-full">
        <label>City</label>
        <input
          type="text"
          name={formattedName("city")}
          className={`input ${
            !!touched?.city && !!errors?.city
              ? "bg-red-300/50 border border-red-500"
              : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.city}
        />
        <ErrorMessage
          name={formattedName("city")}
          component="div"
          className="text-red-500 dark:text-red-300"
        />
      </div>
      <div className="col-span-1 flex flex-col gap-1 w-full">
        <label>Street</label>
        <input
          type="text"
          name={formattedName("street")}
          className={`input ${
            !!touched?.street && !!errors?.street
              ? "bg-red-300/50 border border-red-500"
              : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.street}
        />
        <ErrorMessage
          name={formattedName("street")}
          component="div"
          className="text-red-500 dark:text-red-300"
        />
      </div>
    </div>
  );
}
const phoneRegExp = /^\+?1?\d{9,15}$/;

const checkoutSchema = yup.object().shape({
  billingAddress: yup.object().shape({
    first_name: yup.string().required("required"),
    last_name: yup.string().required("required"),
    email: yup.string().required("required"),
    phone_number: yup
      .string()
      .required("required")
      .matches(
        phoneRegExp,
        "Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
      ),
    country: yup.string().required("required"),
    street: yup.string().required("required"),
    city: yup.string().required("required"),
    state: yup.string().required("required"),
  }),
  shippingAddress: yup.object().shape({
    isSameAddress: yup.boolean(),
    first_name: yup.string().when("isSameAddress", {
      is: false,
      then: () => yup.string().required("required"),
    }),
    last_name: yup.string().when("isSameAddress", {
      is: false,
      then: () => yup.string().required("required"),
    }),
    email: yup.string().when("isSameAddress", {
      is: false,
      then: () => yup.string().required("required"),
    }),
    phone_number: yup.string().when("isSameAddress", {
      is: false,
      then: () =>
        yup
          .string()
          .required("required")
          .matches(
            phoneRegExp,
            "Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
          ),
    }),
    country: yup.string().when("isSameAddress", {
      is: false,
      then: () => yup.string().required("required"),
    }),
    street: yup.string().when("isSameAddress", {
      is: false,
      then: () => yup.string().required("required"),
    }),
    city: yup.string().when("isSameAddress", {
      is: false,
      then: () => yup.string().required("required"),
    }),
    state: yup.string().when("isSameAddress", {
      is: false,
      then: () => yup.string().required("required"),
    }),
  }),
});

export default CheckoutForm;
