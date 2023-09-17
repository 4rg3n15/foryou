const preguntas = [
  "Fecha en que todo empezó \n (Dia de la fiesta)",
  "Fecha en que me hiciste una propuesta que cambiaria todo",
  "Lugar donde te viniste en mierda cuando me acerque demasiado (31-10)",
  "Eso que a ambos nos gusta mucho (juego)",
  "Un lugar donde pasamos unos dias increibles cerca al mar",
];

const respuestas = [
  "05-11-2021",
  "20-11-2021",
  "mountain park",
  "minecraft",
  "santa marta",
];
let respuestasLaura = [];

for (let i = 0; i < preguntas.length; i++) {
  const respuesta = prompt(preguntas[i]);
  respuestasLaura.push(respuesta);

  if (respuestas.includes(respuesta)) {
    alert("Bien, siguiente pregunta");
  } else {
    alert("Te pelaste, vuelve a intentarlo");
    window.location.href = "https://www.google.com/te%20pelastebb";
    break;
  }
}
if (
  respuestasLaura.every((respuesta, index) => respuesta === respuestas[index])
) {
  alert("Todo bien, todas las respuestas son correctas. Puedes ver la página.");
}
