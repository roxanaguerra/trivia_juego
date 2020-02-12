const contenedor1 = document.getElementById('contenedor1');
const contenedor2 = document.getElementById('contenedor2');
contenedor2.style.display = 'none';
const pregunta1_ep = document.getElementById('ep_pregunta1');
pregunta1_ep.style.display = 'none';
const pregunta2_ep = document.getElementById('ep_pregunta2');
pregunta2_ep.style.display = 'none';
const pregunta3_ep = document.getElementById('ep_pregunta3');
pregunta3_ep.style.display = 'none';
const resultados_ep = document.getElementById('resultados_ep');
resultados_ep.style.display = 'none';

const pregunta1_ee = document.getElementById('ee_pregunta1');
pregunta1_ee.style.display = 'none';
const pregunta2_ee = document.getElementById('ee_pregunta2');
pregunta2_ee.style.display = 'none';
const pregunta3_ee = document.getElementById('ee_pregunta3');
pregunta3_ee.style.display = 'none';
const resultados_ee = document.getElementById('resultados_ee');
resultados_ee.style.display = 'none';

let suma1 = 0;
let suma2 = 0;
let suma3 = 0;

function siguiente() {
  const name = document.getElementById('namejugador').value;
  const parrafo = document.getElementById('saludo');
  parrafo.innerHTML = 'Hola '+ name +'! Es hora de Jugar.';
  contenedor2.style.display = 'block';
  contenedor1.style.display = 'none';
}

function eperuanos() {
  document.getElementById('ep1');
  pregunta1_ep.style.display = 'block';
  contenedor2.style.display = 'none';
  resultados_ep.style.display = 'none'; 
}
function siguiente1_ep() {

  let correcto1 = document.getElementById('ep1');
  for(let i=0; i < correcto1.length;i++) {
    if (correcto1[i].type == "radio" && correcto1[i].checked)
      suma1 = correcto1[i].value;
           
  }
  console.log(suma1);
  document.getElementById('ep2'); 
  pregunta2_ep.style.display = 'block';
  pregunta1_ep.style.display = 'none';
}
function siguiente2_ep() {
  let correcto2 = document.getElementById('ep2');
  for(let i=0; i < correcto2.length;i++) {
    if (correcto2[i].type == "radio" && correcto2[i].checked)
      suma2 = correcto2[i].value;      
  }
  console.log(suma2);
  document.getElementById('ep3');
  pregunta3_ep.style.display = 'block';
  pregunta2_ep.style.display = 'none';
}
function siguiente3_ep() {
  let correcto3 = document.getElementById('ep3');
  for(let i=0; i < correcto3.length;i++) {
    if (correcto3[i].type == "radio" && correcto3[i].checked)
      suma3 = correcto3[i].value;      
  }
  console.log(suma3);
  let nota = parseInt(suma1) + parseInt(suma2) + parseInt(suma3);
  
  console.log(nota);
  document.getElementById('resultados_ep');
  resultados_ep.style.display = 'block';
  //const name = document.getElementById('namejugador').value;
  const parrafo_nota_ep = document.getElementById('notafinal_ep');
  parrafo_nota_ep.innerHTML = 'son '+ nota + ' de 3!';
  pregunta3_ep.style.display = 'none';
}

function eextranjeros() {
  document.getElementById('ee1');
  pregunta1_ee.style.display = 'block';
  contenedor2.style.display = 'none';
  resultados_ee.style.display = 'none';  
}
function siguiente1_ee() {

  let correcto1 = document.getElementById('ee1');
  for(let i=0; i < correcto1.length;i++) {
    if (correcto1[i].type == "radio" && correcto1[i].checked)
      suma1 = correcto1[i].value;
           
  }
  console.log(suma1);
  document.getElementById('ee2'); 
  pregunta2_ee.style.display = 'block';
  pregunta1_ee.style.display = 'none';
}
function siguiente2_ee() {
  let correcto2 = document.getElementById('ee2');
  for(let i=0; i < correcto2.length;i++) {
    if (correcto2[i].type == "radio" && correcto2[i].checked)
      suma2 = correcto2[i].value;      
  }
  console.log(suma2);
  document.getElementById('ee3');
  pregunta3_ee.style.display = 'block';
  pregunta2_ee.style.display = 'none';
}
function siguiente3_ee() {
  let correcto3 = document.getElementById('ee3');
  for(let i=0; i < correcto3.length;i++) {
    if (correcto3[i].type == "radio" && correcto3[i].checked)
      suma3 = correcto3[i].value;      
  }
  console.log(suma3);
  let nota = parseInt(suma1) + parseInt(suma2) + parseInt(suma3);
  
  console.log(nota);
  document.getElementById('resultados_ee');
  resultados_ee.style.display = 'block';
  const parrafo_nota_ee = document.getElementById('notafinal_ee');
  parrafo_nota_ee.innerHTML = 'son '+ nota + ' de 3!';
  pregunta3_ee.style.display = 'none';
}
