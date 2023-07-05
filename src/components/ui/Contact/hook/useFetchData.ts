import { useFormik } from "formik";
import { object, string } from "yup";

const formData: ContactForm = {
  fullName: "",
  subject: "",
  email: "",
  project: ""
};

const validation = object({
  fullName: string().required("The fullName is require"),
  email: string()
    .email("This string must be a valid email")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .required("The email is require"),
  project: string().required("This field is require")
});

export const useFecthData = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema: validation,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (data: ContactForm) => {
      console.log(data);
      const result = await fetch("/api/contact", { body: JSON.stringify(data), method: "POST" });
      console.log(result);
    }
  });

  return formik;
};
