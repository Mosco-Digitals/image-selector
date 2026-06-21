const image = document.querySelector('#img');
const input = document.querySelector('#file');
const text = document.querySelector('#txt');
const count = document.querySelector('#count');
const form = document.querySelector('#selector-form');
const submitMessage = document.querySelector('#submit-message');

input.addEventListener('change', () => {
  if (input.files && input.files[0]) {
    image.src = URL.createObjectURL(input.files[0]);
  }
});

let max = 40;

text.oninput = () => {
  let left = max - text.value.length;
  count.innerText = left + " characters left";
};

text.oninput();

if (new URLSearchParams(window.location.search).get('submitted') === 'true') {
  submitMessage.innerText = 'Submitted';
  submitMessage.classList.add('show');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = 'select.html?submitted=true';
});
