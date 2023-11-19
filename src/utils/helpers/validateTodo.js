import * as Yup from "yup";

const validationTodoSchema = Yup.object().shape({
  newTask: Yup.string().required("Поле не должно быть пустым!"),
});

export default validationTodoSchema;
