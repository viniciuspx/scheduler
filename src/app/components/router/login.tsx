import axios from "axios";

export const login = async (event: any) => {
  var res = false;
  await axios
    .post("http://localhost:8080/auth/login", {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    })
    .then((response) => {
      if (response.statusText === "OK") {
        res = true;
      }
    });
  return res;
};
