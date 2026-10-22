const saludos = [
  'Estoy aprendiendo a programar.',
  '¡Hoy escribí mi primera página!',
  'Cada día se me da mejor.',
];

let indice = 0;

const saludo = document.getElementById('saludo');
const btnSaludo = document.getElementById('btn-saludo');
const btnTema = document.getElementById('btn-tema');

btnSaludo.addEventListener('click', () => {
  indice = (indice + 1) % saludos.length;
  saludo.textContent = saludos[indice];
});

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
});