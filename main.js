const form = document.getElementById('form-valid');

function validarFormulario(valorA, valorB) {
  return valorB > valorA;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const valorA = document.getElementById('campoA').value;
  const valorB = document.getElementById('campoB').value;

  const mensagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;

  const formValid = validarFormulario(valorA, valorB);

  if (formValid) {
    alert(mensagemSucesso);
    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
  } else {
    alert('Erro: o valor de A deve ser menor que o valor de B.');
  }
});

console.log(form);
