import axios from "axios";

export const login = async (event: any) => {
  event.preventDefault();

  try {
    await axios
      .post("http://localhost:8080/auth/login", {
        email: event.target.elements.email.value,
        password: event.target.elements.password.value,
      })
      .then((response) => {
        console.log(response.statusText === "OK");
      });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
