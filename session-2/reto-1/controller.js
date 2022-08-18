//let ejemplo1 = (10, [2, 3, 8, 1, 4])


function RecomendarHorario() {
  //let clasesOrdenadas = clases.sort();
  let clases = [{nombreclase: "A1", horas: 2},{nombreclase: "A2", horas: 3},{nombreclase: "A3", horas: 8},{nombreclase: "A4", horas: 1},{nombreclase: "A5", horas: 4}];
  let horasEstudiante = (document.getElementById("horas").value)
  let suma = 0;
  let clase1 = "";
  let clase2 = "";
  clases.forEach((element) => {
    clases.forEach((element2) => {
      let adicionHoras = element.horas + element2.horas;
      if (adicionHoras <= horasEstudiante && adicionHoras > suma && element != element2) {
        clase1 = element.nombreclase;
        clase2 = element2.nombreclase;
        suma = adicionHoras;
      }
    });
  });
  console.log([clase1, clase2]);
  MostrarRecomendacion([clase1, clase2])
  return [clase1, clase2];
}

function MostrarRecomendacion(clases){
    element = document.getElementById("recomendaciones")
    element.textContent = clases[0] +" --- "+ clases[1]
}