import * as Yup from "yup";
export const validShema = Yup.object().shape({
 email: Yup.string()
  .required("Обязательное поле ввода")
  .email("Обязательное поле ввода")
  .min(7, "Введите числовое значение от 7 до 20 символов")
  .max(20, "Введите числовое значение от 7 до 20 символов"),
 password: Yup.string()
  .required("Обязательное поле ввода")
  .min(7, "Введите числовое значение от 7 до 20 символов")
  .max(20, "Введите числовое значение от 7 до 20 символов"),
});