
let amigos = [];

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}
function agregarAmigo() {
  const input = document.getElementById("amigo"); 
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  input.value = "";

  mostrarLista();
}

function sortearAmigo() {

  if (amigos.length === 0) {
    alert("No hay amigos en la lista.");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);

  const ganador = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎉 El amigo secreto es: <strong>${ganador}</strong>`;
}
