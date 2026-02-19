'use strict'
// form.addEventListener(‘submit’, handleSubmit)
// Function handleSubmit(event){
// event.preventDefault();
// Const title = event.target.input.value
// Const info = event.target.content.value
// Const h2 = document.createElement(‘h2’)
// Const p = document.createElement(‘p’)
// h2.textContent = title;
// p.textContent = info;
// const form = document.getElementById('Form');
const form = document.getElementsByTagName('*')[0];
const fieldset = document.getElementById('S1');
const submit = document.createElement('input');
const BT = document.createElement('textarea');

BT.id = "info"
BT.name = "content"
BT.rows = "5";
BT.cols = "56";
submit.type = "submit";

fieldset.appendChild(email);
fieldset.appendChild(Name1);
fieldset.appendChild(submit);
fieldset.appendChild(BT);


form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  const title = event.target.title.value;
  const content = event.target.content.value;

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.textContent = title;
  p.textContent = content;

  const formContent = document.getElementById('render');

  formContent.appendChild(h1);
  formContent.appendChild(p);
}