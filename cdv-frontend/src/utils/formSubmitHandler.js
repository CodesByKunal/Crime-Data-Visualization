import userLogin from "./userLogin";

const formSubmitHandler = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await userLogin(email, password);

  if (response?.error) {
    console.error("Error in user login :", response);
    return null;
  }

  window.alert(response);
};

export default formSubmitHandler;
