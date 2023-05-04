import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
let formData = {};

const saveEmailMessage = throttle(function (event) {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}, 500);

formEl.addEventListener('input', saveEmailMessage);

const savedFormData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedFormData) {
  formData = JSON.parse(savedFormData);
  Object.entries(formData).forEach(([key, value]) => {
    formEl.elements[key].value = value;
  });
}

formEl.addEventListener('submit', event => {
  event.preventDefault();

  console.log(formData);
  formData = {};
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  event.target.reset();
});
