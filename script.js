function contar() {
  var inicio = document.querySelector('input#inicio').value
  var fim = document.querySelector('input#fim').value
  var intervalo = document.querySelector('input#intervalo').value
  var resultado = document.querySelector('div#resultado')
  var msgErroInicio = document.querySelector('div#msgErroInicio')
  var msgErroFim = document.querySelector('div#msgErroFim')
  var msgErroIntervalo = document.querySelector('div#msgErroIntervalo')
  if (inicio.length == 0) {
    msgErroInicio.innerHTML = "<p style='color:red;'>*Por favor, insira o número que inicia a contagem.*"
    msgErroInicio.style.display = "block"
  } if (fim.length == 0) {
    msgErroFim.innerHTML = "<p style='color:red;'>*Por favor, insira o número final da contagem.*"
    msgErroFim.style.display = "block"
  } if (intervalo.length == 0) {
    msgErroIntervalo.innerHTML = "<p style='color:red;'>*Por favor, insira de quanto em quanto deve ser realizada a contagem.*"
    msgErroIntervalo.style.display = "block"
  } else {
    conte()
  }
  function conte() {
    resultado.style.display = "block"
    if (Number(intervalo) === 0) {
      alert('O intervalo "0" não é válido. O intervalo foi automaticamente contado como "1".')
      intervalo = 1
    }
    resultado.innerHTML = `Contando: `
    if (Number(fim) > Number(inicio)) {
      for (var contagem = Number(inicio); contagem <= Number(fim); contagem += Number(intervalo)) {
        resultado.innerHTML += `${contagem}\u{1F449}`
      }
  } else if (Number(inicio) > Number(fim)) {
    for (var contagem = Number(inicio); contagem >= Number(fim); contagem -= Number(intervalo)) {
      resultado.innerHTML += `${contagem}\u{1F449}`
    }
  }
    resultado.innerHTML += ` \u{1F3c1}`
}
function puff1() {
  msgErroInicio.style.display = "none"
}
function puff2() {
  msgErroFim.style.display = "none"
}
function puff3() {
  msgErroIntervalo.style.display = "none"
}
}