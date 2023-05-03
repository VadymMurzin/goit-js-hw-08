import throttle from 'lodash.throttle';

const inputData = document.querySelector('.feedback-form');

const saveEmailMessage = throttle(function (event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  const formData = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  //   console.log(email.value, message.value);
}, 500);

inputData.addEventListener('input', saveEmailMessage);

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
  const parsedFormData = JSON.parse(savedFormData);
  email.value = parsedFormData.email;
  message.value = parsedFormData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = { email: email.value, message: message.value };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
});
