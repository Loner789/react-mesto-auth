// IMPORTS:
import { useState } from "react";
import { omit } from "lodash";

// CUSTOME FORM HOOK:
function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    // A function to validate each input values
    switch (name) {
      case "name":
        if (value !== "" && value.length <= 4) {
          setErrors({
            ...errors,
            name: "Минимальное количество символов: 5",
          });
        } else {
          // set the error state empty or remove the error for name input
          // omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "name");

          setErrors(newObj);
        }

        break;

      case "about":
        if (value !== "" && value.length <= 4) {
          setErrors({
            ...errors,
            about: "Минимальное количество символов: 5",
          });
        } else {
          let newObj = omit(errors, "about");

          setErrors(newObj);
        }

        break;

      case "link":
        if (
          value !== "" &&
          !new RegExp(/^(ftp|http|https):\/\/[^ "]+$/).test(value)
        ) {
          setErrors({
            ...errors,
            link: "Введите корректный URL-адрес",
          });
        } else {
          let newObj = omit(errors, "link");

          setErrors(newObj);
        }

        break;

      case "avatar":
        if (
          value !== "" &&
          !new RegExp(/^(ftp|http|https):\/\/[^ "]+$/).test(value)
        ) {
          setErrors({
            ...errors,
            avatar: "Введите корректный URL-адрес",
          });
        } else if (value === "") {
          let newObj = omit(errors, "avatar");

          setErrors(newObj);
        } else {
          let newObj = omit(errors, "avatar");

          setErrors(newObj);
        }

        break;

      case "email":
        if (
          value !== "" &&
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Введите корректный адрес электронной почты",
          });
        } else {
          let newObj = omit(errors, "email");

          setErrors(newObj);
        }

        break;

      case "password":
        if (
          value !== "" &&
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Пароль должен содержать не менее 8 символов и содержать прописные, строчные буквы и цифры",
          });
        } else {
          let newObj = omit(errors, "password");

          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.persist();

    const { name, value } = event.target;

    validate(event, name, value);
    setValues({ ...values, [name]: value });
  };

  return { values, errors, handleChange, setValues, setErrors };
}

export default useForm;
