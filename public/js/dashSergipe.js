function toggleMenu() {
    const sidebar = document.querySelector('.lateral');
    const body = document.body;
    sidebar.classList.toggle('active');
    body.classList.toggle('menu-open');
  }

 function carregarDashboard(){
coletarObesidadeIdadeSergipe()
coletarObesidadePorSexoSergipe()
obterGraficoFatoresSergipe()
coletarMaiorIMCSergipe()
coletarMaiorFatorSergipe()
coletarMediaIMCSergipe() 
  }



function coletarMediaIMCSergipe() {
    fetch('/dashboard/coletarMediaIMCSergipe', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarMediaIMCSergipe()!")
        console.log('teste', resposta)
        if (resposta.ok) {
            resposta.json().then(json => {

                
                if (json.resultado) {
                    console.log(json.resultado)

                    document.getElementById('imc_nacional').innerHTML = json.resultado[0].media_imc;
                } else {
                    console.warn("Nenhum resultado encontrado no array 'resultado'.");
                }

            })

        } else {

            console.log("Houve um erro ao tentar realizar a coleta!");

        }

    }).catch(function (erro) {
        console.log(erro);
    })
}
  
function coletarMaiorFatorSergipe() {
    fetch('/dashboard/coletarMaiorFatorSergipe', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarMaiorFatorSergipe()!")
        console.log('teste', resposta)
        if (resposta.ok) {
            resposta.json().then(json => {

                
                if (json.resultado) {
                    console.log(json.resultado)

                    document.getElementById('fator').innerHTML = json.resultado[0].fator;
                } else {
                    console.warn("Nenhum resultado encontrado no array 'resultado'.");
                }

            })

        } else {

            console.log("Houve um erro ao tentar realizar a coleta!");

        }

    }).catch(function (erro) {
        console.log(erro);
    })

}

  function coletarMaiorIMCSergipe() {
    fetch('/dashboard/coletarMaiorIMCSergipe', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarMaiorIMCSergipe()!")
        console.log('teste', resposta)
        if (resposta.ok) {
            resposta.json().then(json => {

                
                if (json.resultado) {
                    console.log(json.resultado)

                    document.getElementById('maior_imc').innerHTML = json.resultado[0].maior_imc;
                } else {
                    console.warn("Nenhum resultado encontrado no array 'resultado'.");
                }

            })

        } else {

            console.log("Houve um erro ao tentar realizar a coleta!");

        }

    }).catch(function (erro) {
        console.log(erro);
    })

}
  
  function obterGraficoFatoresSergipe() {
    fetch('/dashboard/obterGraficoFatoresSergipe', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO obterGraficoFatoresSergipe()!")
        if (resposta.ok) {
            resposta.json().then(json => {
                
                if (json.resultado) {
                    console.log(json.resultado)

                    plotarGraficoFatores(json.resultado)
                } else {
                    console.warn("Nenhum resultado encontrado no array 'resultado'.");
                }

            })

        } else {

            console.log("Houve um erro ao tentar realizar a coleta!");

        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

  function coletarObesidadeIdadeSergipe() {
    fetch('/dashboard/coletarObesidadeIdadeSergipe', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarObesidadeIdadeSergipe()!")
        if (resposta.ok) {
            resposta.json().then(json => {
                
                if (json.resultado) {
                    console.log(json.resultado)

                    plotarGraficoIdade(json.resultado)
                } else {
                    console.warn("Nenhum resultado encontrado no array 'resultado'.");
                }

            })

        } else {

            console.log("Houve um erro ao tentar realizar a coleta!");

        }

    }).catch(function (erro) {
        console.log(erro);
    })
}

function plotarGraficoFatores(resultado) {

  const ctxInfluenciadores = document.getElementById('grafico-influenciadores').getContext('2d');


  const gradient = ctxInfluenciadores.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(220, 20, 60, 0.5)');
  gradient.addColorStop(1, 'rgba(220, 20, 60, 0)');

  const labels = ['Sedentarismo', 'Alcoolismo', 'Fumo', 'Refrigerante'];

  console.log('Iniciando plotagem do gráfico de fatores...');
  console.log('Resultado recebido estou na funcao de :', resultado);
console.log('Resultado completo:', resultado);

  const dadosPrincipais = labels.map(label => {
    const item = resultado.find(dado => dado.fator === label);
console.log('Fatores recebidos:', resultado.map(dado => dado.fator));
    return item ? parseFloat(item.percentual_obesos) : 0;
  });

  console.log('Dados principais processados:', dadosPrincipais);

  const config = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Agravantes',
          data: dadosPrincipais,
          borderColor: '#DC143C',
          backgroundColor: gradient,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#DC143C',
          pointBorderColor: '#DC143C'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Influenciadores Externos na Obesidade',
          color: '#2e2e2e',
          font: {
            size: 20
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Porcentagem (%)'
          }
        },
        x: {
          title: {
            display: false
          }
        }
      },
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      }
    }
  };

  const chartFatores = new Chart(ctxInfluenciadores, config);
}


  function plotarGraficoIdade(resultado) {
  const ctxIdade = document.getElementById('grafico-faixa-etaria').getContext('2d');

  const labels = ['0-19 anos', '20-39 anos', '40-59 anos', '60+ anos'];

  const dadosObesidadePorIdade = labels.map(faixa => {
    const item = resultado.find(dado => dado.faixa_etaria === faixa);
    console.log('Faixas recebidas:', resultado.map(dado => dado.faixa_etaria));
    return item ? parseFloat(item.percentual_obesos) : 0;
  });

  const chartIdade = new Chart(ctxIdade, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Obesidade (%)',
        data: dadosObesidadePorIdade,
        backgroundColor: ['#0000FF', '#00FF00', '#DA70D6', '#DC143C']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Obesidade por Faixa Etária',
          color: '#2e2e2e',
          font: {
            size: 20
          }
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Porcentagem (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Faixa Etária'
          }
        }
      }
    }
  });
}

function coletarObesidadePorSexoSergipe() {
    fetch('/dashboard/coletarObesidadePorSexoSergipe', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarObesidadePorSexoSergipe()!")
        if (resposta.ok) {
            resposta.json().then(json => {
                
                if (json.resultado) {
                    console.log(json.resultado)

                    plotarGraficoObesidadePorSexo(json.resultado)
                } else {
                    console.warn("Nenhum resultado encontrado no array 'resultado'.");
                }

            })

        } else {

            console.log("Houve um erro ao tentar realizar a coleta!");

        }

    }).catch(function (erro) {
        console.log(erro);
    })
}





function plotarGraficoObesidadePorSexo(resultado){
const ctxSexo = document.getElementById('grafico-sexo').getContext('2d');

const labels = ['Feminino', 'Masculino'];

const dadosPrincipaisTotal = labels.map(label => {
    const item = resultado.find(dado => dado.genero === label);
console.log('total recebidos:', resultado.map(dado => dado.genero));
    return item ? parseFloat(item.total) : 0;
  });

  const dadosPrincipaisObesos = labels.map(label => {
    const item = resultado.find(dado => dado.genero === label);
console.log('total recebidos:', resultado.map(dado => dado.genero));
    return item ? parseFloat(item.obesos) : 0;
  });

const graficoObesidPorSexo = new Chart(ctxSexo, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Total',
        data: dadosPrincipaisTotal, 
        backgroundColor: 'rgba(30, 144, 255, 0.6)' 
      },
      {
        label: 'Obesos',
        data: dadosPrincipaisObesos, 
        backgroundColor: 'rgba(255, 99, 132, 0.6)' 
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Obesidade por Sexo',
        font: {
          size: 20
        },
        color: '#333'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

}

