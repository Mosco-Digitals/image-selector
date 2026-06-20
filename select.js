const image = document.querySelector('#img');
const input = document.querySelector('#file');
const text = document.querySelector('#txt');
const count = document.querySelector('#count');

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
