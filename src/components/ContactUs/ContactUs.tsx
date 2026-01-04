import { useFormik } from "formik";

import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { CONTACT_US_FORM_VALUES } from "./types";
import { ContactUsContainer, Title } from "./styles";
import { InputsContainer } from "components/LoginForm/styles";

const validationSchema = Yup.object().shape({
  [CONTACT_US_FORM_VALUES.FULLNAME]: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name is required")
    .max(50, "Maximum length is 50 characters"),
  [CONTACT_US_FORM_VALUES.PHONE]: Yup.string()
    .required("Phone is required")
    .min(4, "minimum length is 4 characters")
    .max(20, "Maximum length is 20 characters"),
  [CONTACT_US_FORM_VALUES.EMAIL]: Yup.string()
    .min(6, "minimum length is 6 characters")
    .max(60, "Maximum length is 60 characters")
    .email("Email should be in email format"),
});

function ContactUs() {
  const formik = useFormik({
    initialValues: {
      [CONTACT_US_FORM_VALUES.FULLNAME]: "",
      [CONTACT_US_FORM_VALUES.PHONE]: "",
      [CONTACT_US_FORM_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,

    onSubmit: (values, helpers) => {
      console.log(values);
      helpers.resetForm();
    },
  });

  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="fullname-id"
          label="Fullname"
          name={CONTACT_US_FORM_VALUES.FULLNAME}
          placeholder="Your full name"
          value={formik.values[CONTACT_US_FORM_VALUES.FULLNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.FULLNAME]}
        />
      </InputsContainer>

      <InputsContainer>
        <Input
          id="phone-id"
          label="Phone"
          name={CONTACT_US_FORM_VALUES.PHONE}
          placeholder="Your phone number"
          value={formik.values[CONTACT_US_FORM_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.PHONE]}
        />
      </InputsContainer>

      <InputsContainer>
        <Input
          id="email-id"
          label="Email"
          name={CONTACT_US_FORM_VALUES.EMAIL}
          placeholder="Your email"
          value={formik.values[CONTACT_US_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_US_FORM_VALUES.EMAIL]}
        />
      </InputsContainer>   

      <Button type="submit" name="SEND REQUEST" />
    </ContactUsContainer>
  );
}

export default ContactUs;
