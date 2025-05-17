function toggleMenu() {
    const sidebar = document.querySelector('.lateral');
    const body = document.body;
    sidebar.classList.toggle('active');
    body.classList.toggle('menu-open');
  }

  function carregarDashboard(){
    coletarMaiorIMC()
    coletarMaiorFator()
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

   const ctxSexo = document.getElementById('grafico-sexo').getContext('2d');
   const graficoSexo = new Chart(ctxSexo, {
   type: 'doughnut',
    data: {
    labels: ['Mulheres', 'Homens', 'transsexuais', 'Outros gêneros'],
      datasets: [{
        data: [55, 42, 2, 1],
        backgroundColor: ['#DA70D6', '#0000FF', '#DC143C', '#00FA9A']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
         display: true,
          text: 'Obesidade por Sexo',
           color: '#2e2e2e',
                font: {
                    size: 20
         }
       }
     }
    }
  });

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

const ctxInfluenciadores = document.getElementById('grafico-influenciadores').getContext('2d');
const gradient = ctxInfluenciadores.createLinearGradient(0, 0, 0, 400);
// gradient.addColorStop(0, 'rgba(220, 20, 60, 0.5)'); 
// gradient.addColorStop(1, 'rgba(220, 20, 60, 0)');   

const graficoInfluenciadores = new Chart(ctxInfluenciadores, {
  type: 'line',
  data: {
    labels: ['Cigarro', 'Bebida alcoólica', 'Refrigerante', 'Depressão', 'Diabetes', 'Sedentarismo'],
    datasets: [
      {
        label: 'Agravantes',
        data: [30, 25, 30, 40, 50, 45],
        borderColor: '#DC143C',
        backgroundColor: gradient, 
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#DC143C',
        pointBorderColor: '#DC143C'
      },
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
});

const linhasExtras = [
    {
        label: 'Depressão e Bebida Alcoólica',
        data: [5, 15, 25, 35],
        borderColor: 'green',
        backgroundColor: 'green',
        tension: 0.4
    },
    {
        label: 'Sedentarismo e Cigarro',
        data: [8, 18, 28, 38],
        borderColor: 'blue',
        backgroundColor: 'blue',
        tension: 0.4
    },
    {
        label: 'Refrigerante e Diabetes',
        data: [12, 22, 32, 42],
        borderColor: 'pink',
        backgroundColor: 'pink',
        tension: 0.4
    }
];

const dadosSexo = {
  AC: [60, 35, 4, 1],
  AL: [58, 38, 3, 1],
  AP: [55, 40, 4, 1],
  AM: [59, 36, 3, 2],
  BA: [63, 33, 3, 1],
  CE: [62, 34, 3, 1],
  DF: [56, 39, 3, 2],
  ES: [58, 37, 3, 2],
  GO: [59, 36, 4, 1],
  MA: [61, 34, 3, 2],
  MT: [60, 35, 3, 2],
  MS: [58, 37, 3, 2],
  MG: [59, 36, 3, 2],
  PA: [62, 33, 3, 2],
  PB: [60, 35, 4, 1],
  PR: [57, 38, 3, 2],
  PE: [61, 34, 3, 2],
  PI: [59, 36, 3, 2],
  RJ: [56, 39, 3, 2],
  RN: [60, 35, 3, 2],
  RS: [57, 38, 3, 2],
  RO: [59, 36, 3, 2],
  RR: [55, 40, 3, 2],
  SC: [58, 37, 3, 2],
  SE: [60, 35, 3, 2],
  SP: [59, 36, 3, 2],
  TO: [58, 37, 3, 2]
};

const dadosFaixaEtaria = {
  AC: [15, 35, 30, 20],
  AL: [17, 34, 29, 20],
  AP: [14, 32, 30, 24],
  AM: [16, 34, 31, 19],
  BA: [20, 36, 28, 16],
  CE: [19, 35, 30, 16],
  DF: [15, 33, 31, 21],
  ES: [17, 34, 29, 20],
  GO: [18, 34, 30, 18],
  MA: [20, 36, 28, 16],
  MT: [18, 35, 30, 17],
  MS: [17, 34, 30, 19],
  MG: [16, 33, 30, 21],
  PA: [19, 35, 30, 16],
  PB: [17, 34, 29, 20],
  PR: [18, 34, 30, 18],
  PE: [19, 35, 29, 17],
  PI: [17, 34, 30, 19],
  RJ: [16, 33, 31, 20],
  RN: [17, 34, 30, 19],
  RS: [18, 35, 29, 18],
  RO: [17, 34, 30, 19],
  RR: [16, 33, 30, 21],
  SC: [18, 34, 30, 18],
  SE: [17, 34, 30, 19],
  SP: [18, 35, 30, 17],
  TO: [17, 34, 30, 19]
};

const dadosEstados = {
  AC: [12, 14, 22, 35, 28, 40],
  AL: [13, 16, 24, 37, 29, 42],
  AP: [10, 12, 20, 32, 25, 38],
  AM: [14, 15, 26, 38, 30, 44],
  BA: [18, 20, 30, 50, 35, 55],
  CE: [16, 18, 28, 45, 33, 50],
  DF: [11, 13, 23, 36, 27, 41],
  ES: [13, 15, 25, 39, 31, 43],
  GO: [14, 16, 27, 40, 32, 45],
  MA: [17, 19, 29, 46, 34, 51],
  MT: [15, 17, 28, 42, 33, 47],
  MS: [14, 16, 26, 41, 30, 46],
  MG: [12, 15, 25, 35, 28, 40],
  PA: [16, 18, 30, 44, 34, 49],
  PB: [13, 14, 24, 38, 29, 42],
  PR: [14, 17, 26, 40, 31, 44],
  PE: [15, 18, 29, 43, 32, 48],
  PI: [13, 15, 25, 37, 30, 43],
  RJ: [10, 12, 28, 40, 32, 45],
  RN: [12, 14, 26, 39, 30, 44],
  RO: [13, 15, 27, 41, 31, 45],
  RR: [11, 13, 24, 36, 28, 40],
  RS: [14, 16, 32, 46, 31, 48],
  SC: [15, 17, 29, 43, 33, 47],
  SE: [12, 14, 25, 38, 29, 42],
  SP: [15, 18, 35, 48, 30, 50],
  TO: [13, 15, 26, 39, 30, 44]
};

  const dadosAlternativos = {
  AC: [36, 31, 27, 26, 30, 22],
  AL: [38, 33, 29, 27, 31, 24],
  AP: [34, 30, 26, 24, 29, 21],
  AM: [37, 32, 28, 26, 30, 23],
  BA: [45, 39, 35, 33, 36, 30],
  CE: [42, 36, 32, 31, 34, 27],
  DF: [35, 31, 27, 25, 29, 22],
  ES: [37, 33, 28, 27, 31, 24],
  GO: [38, 34, 30, 29, 32, 25],
  MA: [43, 38, 33, 31, 35, 28],
  MT: [39, 35, 31, 30, 33, 26],
  MS: [38, 34, 30, 28, 32, 25],
  MG: [38, 34, 29, 27, 29, 24],
  PA: [41, 36, 32, 30, 34, 27],
  PB: [36, 32, 28, 26, 30, 23],
  PR: [37, 33, 29, 28, 31, 25],
  PE: [39, 35, 30, 29, 33, 26],
  PI: [36, 32, 27, 26, 30, 24],
  RJ: [35, 30, 28, 25, 30, 22],
  RN: [36, 31, 28, 27, 29, 23],
  RO: [37, 32, 29, 28, 30, 24],
  RR: [34, 30, 26, 25, 28, 21],
  RS: [42, 36, 32, 30, 34, 28],
  SC: [39, 35, 31, 29, 33, 26],
  SE: [36, 32, 28, 27, 30, 23],
  SP: [40, 35, 30, 28, 32, 25],
  TO: [36, 32, 29, 27, 31, 24]
};

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