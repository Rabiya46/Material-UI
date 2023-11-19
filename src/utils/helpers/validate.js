import * as Yup from "yup";

const validationSchemaForm = Yup.object().shape({
  username: Yup.string().required("Поле name обязательное!"),
  password: Yup.string().required("Поле password обязательное!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Поле @gmail.com обязательное!"),
});

export { validationSchemaForm };
