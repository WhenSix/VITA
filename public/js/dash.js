

function toggleMenu() {
    const sidebar = document.querySelector('.lateral');
    const body = document.body;
    sidebar.classList.toggle('active');
    body.classList.toggle('menu-open');
  }

  function carregarDashboard(){
    obterGraficoFatores()
    coletarMaiorIMC()
    coletarMaiorFator()
    coletarMediaIMC()
    coletarPercentualObesidade()
    coletarPercentualSobrepeso()
    coletarObesidadePorSexo()

  }

  function coletarObesidadePorSexo() {
    fetch('/dashboard/coletarObesidadePorSexo', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarObesidadePorSexo()!")
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
var chart2
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

chart2 = new Chart(ctxSexo, {
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



async function obterGraficoSexoEstado(){
    var capital = select_estado.value
    console.log(capital)
    var numeroCapital 
    switch (capital){
      case 'AC': numeroCapital = 20; break;
      case 'AL': numeroCapital = 13; break;
      case 'AP': numeroCapital = 12; break;
      case 'AM': numeroCapital = 14; break;
      case 'BA': numeroCapital = 22; break;
      case 'CE': numeroCapital = 9; break;
      case 'DF': numeroCapital = 27; break;
      case 'ES': numeroCapital = 26; break;
      case 'GO': numeroCapital = 10; break;
      case 'MA': numeroCapital = 23; break;
      case 'MT': numeroCapital = 6; break;
      case 'MS': numeroCapital = 5; break;
      case 'MG': numeroCapital = 3; break;
      case 'PA': numeroCapital = 2; break;
      case 'PB': numeroCapital = 11; break;
      case 'PR': numeroCapital = 7; break;
      case 'PE': numeroCapital = 19; break;
      case 'PI': numeroCapital = 25; break;
      case 'RJ': numeroCapital = 21; break;
      case 'RN': numeroCapital = 15; break;
      case 'RS': numeroCapital = 17; break;
      case 'RO': numeroCapital = 18; break;
      case 'RR': numeroCapital = 4; break;
      case 'SC': numeroCapital = 8; break;
      case 'SP': numeroCapital = 24; break;
      case 'SE': numeroCapital = 1; break;
      case 'TO': numeroCapital = 16; break;
    } console.log('numero', numeroCapital)
  await fetch(`/dashboard/obterGraficoSexoEstado/${numeroCapital}`, {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO obterGraficoSexoEstado()!")
        if (resposta.ok) {
            resposta.json().then(async json => {
                
                if (json.resultado) {
                    console.log(json.resultado)
                   await chart2.destroy()
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

  async function obterGraficoFatoresEstado(){
    var capital = select_estado.value
    console.log(capital)
    var numeroCapital 
    switch (capital){
      case 'AC': numeroCapital = 20; break;
      case 'AL': numeroCapital = 13; break;
      case 'AP': numeroCapital = 12; break;
      case 'AM': numeroCapital = 14; break;
      case 'BA': numeroCapital = 22; break;
      case 'CE': numeroCapital = 9; break;
      case 'DF': numeroCapital = 27; break;
      case 'ES': numeroCapital = 26; break;
      case 'GO': numeroCapital = 10; break;
      case 'MA': numeroCapital = 23; break;
      case 'MT': numeroCapital = 6; break;
      case 'MS': numeroCapital = 5; break;
      case 'MG': numeroCapital = 3; break;
      case 'PA': numeroCapital = 2; break;
      case 'PB': numeroCapital = 11; break;
      case 'PR': numeroCapital = 7; break;
      case 'PE': numeroCapital = 19; break;
      case 'PI': numeroCapital = 25; break;
      case 'RJ': numeroCapital = 21; break;
      case 'RN': numeroCapital = 15; break;
      case 'RS': numeroCapital = 17; break;
      case 'RO': numeroCapital = 18; break;
      case 'RR': numeroCapital = 4; break;
      case 'SC': numeroCapital = 8; break;
      case 'SP': numeroCapital = 24; break;
      case 'SE': numeroCapital = 1; break;
      case 'TO': numeroCapital = 16; break;
    } console.log('numero', numeroCapital)
  await fetch(`/dashboard/obterGraficoFatoresEstado/${numeroCapital}`, {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO obterGraficoFatores()!")
        if (resposta.ok) {
            resposta.json().then(async json => {
                
                if (json.resultado) {
                    console.log(json.resultado)
                   await chart.destroy()
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

  function obterGraficoFatores() {
    fetch('/dashboard/obterGraficoFatores', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO obterGraficoFatores()!")
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
var chart 
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

  chart = new Chart(ctxInfluenciadores, config);
}



function coletarPercentualObesidade() {
    fetch('/dashboard/coletarPercentualObesidade', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarPercentualObesidade()!")
        console.log('teste', resposta)
        if (resposta.ok) {
            resposta.json().then(json => {

                
                if (json.resultado) {
                    console.log(json.resultado)

                    document.getElementById('obesidade').innerHTML = json.resultado[0].percentual_obesidade;
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

function coletarPercentualSobrepeso() {
    fetch('/dashboard/coletarPercentualObesidade', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarPercentualObesidade()!")
        console.log('teste', resposta)
        if (resposta.ok) {
            resposta.json().then(json => {

                
                if (json.resultado) {
                    console.log(json.resultado)

                    document.getElementById('sobrepeso').innerHTML = json.resultado[0].percentual_sobrepeso;
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




  function coletarMaiorIMC() {
    fetch('/dashboard/coletarMaiorIMC', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarMaiorIMC()!")
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

function coletarMaiorFator() {
    fetch('/dashboard/coletarMaiorFator', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarMaiorFator()!")
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

function coletarMediaIMC() {
    fetch('/dashboard/coletarMediaIMC', {
        cache: 'no-store'
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO coletarMediaIMC()!")
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


   const ctxIdade = document.getElementById('grafico-faixa-etaria').getContext('2d');
    const graficoIdade = new Chart(ctxIdade, {
    type: 'bar',
    data: {
      labels: ['0-19', '20-39', '40-59', '60+'],
      datasets: [{
        label: 'Obesidade (%)',
        color: '#2e2e2e',
                font: {
                    size: 20
                },
        data: [10, 25, 40, 30],
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
                },
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












function filtrarPorEstado() {
  const estadoSelecionado = document.getElementById('select-estado').value;

  if (!estadoSelecionado) return;

  if (dadosSexo[estadoSelecionado]) {
    graficoSexo.data.datasets[0].data = dadosSexo[estadoSelecionado];
    graficoSexo.update();
  }
  if (dadosFaixaEtaria[estadoSelecionado]) {
    graficoIdade.data.datasets[0].data = dadosFaixaEtaria[estadoSelecionado];
    graficoIdade.update();
  }

  if (dadosEstados[estadoSelecionado]) {
    graficoInfluenciadores.data.datasets[0].data = dadosEstados[estadoSelecionado];
  }

  graficoInfluenciadores.update();
}

  function mostrarAgravantesCombinados() {
    const estadoSelecionado = document.getElementById('select-estado').value;
    if (estadoSelecionado) {
        const novosDados = dadosAlternativos[estadoSelecionado];

        graficoInfluenciadores.data.datasets[1].data = novosDados; 
        graficoInfluenciadores.data.datasets[2].data = novosDados; 
        graficoInfluenciadores.data.datasets[3].data = novosDados; 

        atualizarLimiteY(graficoInfluenciadores);
        graficoInfluenciadores.update();
    }
}


  function atualizarLimiteY(grafico) {
    const todosValores = grafico.data.datasets.flatMap(dataset => dataset.data);
    const maxValue = Math.max(...todosValores);
    const suggestedMax = Math.ceil(maxValue * 1.2); 
    grafico.options.scales.y.suggestedMax = suggestedMax;
}

let mostrarAgravantes = false;

function toggleAgravantesCombinados() {
  mostrarAgravantes = !mostrarAgravantes; 
  if (mostrarAgravantes) {
    graficoInfluenciadores.data.datasets.push({
        label: 'Depressão e Bebida Alcoólica',
        data: [20, 50, 25, 50, 45, 55],
        borderColor: 'green',
        backgroundColor: 'green',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Sedentarismo e Cigarro',
        data: [50, 18, 28, 45, 48, 58],
        borderColor: 'blue',
        backgroundColor: 'blue',
        tension: 0.4,
        fill: false
      },
      {
        label: 'Refrigerante e Diabetes',
        data: [12, 22, 50, 42, 52, 62],
        borderColor: 'pink',
        backgroundColor: 'pink',
        tension: 0.4,
        fill: false
      }
    );

  } else {
    graficoInfluenciadores.data.datasets = graficoInfluenciadores.data.datasets.filter(dataset => 
      !['Depressão e Bebida Alcoólica', 'Sedentarismo e Cigarro', 'Refrigerante e Diabetes'].includes(dataset.label)
    );
  }

  graficoInfluenciadores.update(); 
}

function atualizarDadosDoEstado(novoDadoPrincipal, novosDadosExtras) {
    dadosPrincipais.data = novoDadoPrincipal;
    linhasExtras[0].data = novosDadosExtras[0];
    linhasExtras[1].data = novosDadosExtras[1];
    linhasExtras[2].data = novosDadosExtras[2];

    meuGrafico.data.datasets = linhasAtivas
        ? [dadosPrincipais, ...linhasExtras]
        : [dadosPrincipais];

    meuGrafico.update();
}