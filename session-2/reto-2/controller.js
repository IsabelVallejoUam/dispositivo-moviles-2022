const url = "https://www.datos.gov.co/resource/xdk5-pm3f.json";

let datosColombia
let departamentos
let municipios

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON(url,
function(err, data) {
  if (err !== null) {
    alert('Something went wrong: ' + err);
  } else {
    console.log(data)
    datosColombia = data;
    cargarPagina()
  }
});

function cargarPagina(){
  encontrarDep(datosColombia)
  mostarDep()
}

function encontrarDep(datosColombia){
    departamentos = [...new Set(datosColombia.map(item => item.departamento))];
}

function mostarDep(){

    var sel = document.querySelector('.departamentos');
    for (let index = 0; index < departamentos.length; index++) {
      let opt = document.createElement('option');
      opt.value = departamentos[index];
      opt.textContent += departamentos[index] // or opt.innerHTML += user.name
      sel.appendChild(opt);     
    }

};

function encontrarMunic(sel){
  let departamento =  sel.options[sel.selectedIndex].text;
  municipios = datosColombia.filter(word => word.departamento == departamento);
}

function mostrarMunic(){
  var elemento = document.getElementById("municipios")
  elemento.innerHTML = ""
  if(municipios){
  municipios.forEach(municipio => {
    let spanM = document.createElement('span');
    let text = document.createElement('b');
    text.innerText = municipio.municipio ;
    spanM.appendChild(text)
    elemento.appendChild(spanM)
    elemento.appendChild(document.createElement('br'))
    elemento.appendChild(document.createElement('br'))


  });
} else{
  alert("seleccione un departamento");
}

}

