const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailField = form.elements.email;
const messageField = form.elements.message;

let formData = {
  email: "",
  message: "",
};

document.addEventListener("DOMContentLoaded", () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);

    emailField.value = formData.email.trim() || "";
    messageField.value = formData.message.trim() || "";
  }
});

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailField.value.trim() || !messageField.value.trim()) {
    alert("Fill please all fields");
    return;
    }
    
  console.log("Form data submitted:", {
    email: emailField.value.trim(),
    message: messageField.value.trim(),
  });

  form.reset(); 
  localStorage.removeItem(STORAGE_KEY); 
  formData = { email: "", message: "" }; 
});