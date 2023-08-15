const throttle = require('lodash.throttle');

const elements = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {};
elements.form.addEventListener('input', throttle(handlerInput, 500));

function handlerInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function formOutput() {
  const savedForm = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedForm) {
    formData = JSON.parse(savedForm);
    elements.input.value = formData.email || '';
    elements.message.value = formData.message || '';
  }
}

formOutput();

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  if (elements.input.value === '' || elements.message.value === '') {
    alert('Please, fill in all fields');
    return;
  }
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log({
    email: elements.input.value,
    message: elements.message.value,
  });
  elements.form.reset();
  formData = {};
}
