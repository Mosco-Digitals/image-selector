const image= document.querySelector('#img');
input= document.querySelector('input');

input .addEventListener('change', ()=>{
  image.src = URL.createObjectURL(input.files[0]);

});

let max= 40;
txt.oninput= ()=>{
  let left = max - txt.value.length;
  count.innerText= left + " character left";
}
txt.oninput();