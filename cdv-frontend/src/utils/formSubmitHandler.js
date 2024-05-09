"use client";
import userLogin from "./userLogin";

const formSubmitHandler = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await userLogin(email, password);

  if (response?.error) {
    console.error("Error in user login :", response);
    window.alert(response.error);
    return 0;
  }

  window.alert(`Username : ${response}`);
};

export default formSubmitHandler;
