// IMPORTS:
import { useState } from "react";
import { omit } from "lodash";

// CUSTOME FORM HOOK:
function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  // const [buttonState, setButtonState] = useState(true);

  const validate = (event, name, value) => {
    // A function to validate each input values
    switch (name) {
      case "name":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            name: "The field at least have 5 letters",
          });
        } else {
          // set the error state empty or remove the error for username input
          // omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "name");

          setErrors(newObj);
        }

        break;

      case "about":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            about: "The field at least have 5 letters",
          });
        } else {
          let newObj = omit(errors, "about");

          setErrors(newObj);
        }

        break;

      case "link":
        if (!new RegExp(/^(ftp|http|https):\/\/[^ "]+$/).test(value)) {
          setErrors({
            ...errors,
            link: "Enter a valid URL address",
          });
        } else {
          let newObj = omit(errors, "link");

          setErrors(newObj);
        }

        break;

      case "avatar":
        if (!new RegExp(/^(ftp|http|https):\/\/[^ "]+$/).test(value)) {
          setErrors({
            ...errors,
            avatar: "Enter a valid URL address",
          });
        } else {
          let newObj = omit(errors, "avatar");

          setErrors(newObj);
        }

        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({ ...errors, email: "Enter a valid email address" });
        } else {
          let newObj = omit(errors, "email");

          setErrors(newObj);
        }

        break;

      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase, lowercase and numbers",
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

  return { values, errors, handleChange, setValues };
}

export default useForm;
