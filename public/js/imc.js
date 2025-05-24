function toggleMenu() {
    const sidebar = document.querySelector('.lateral');
    const body = document.body;
    sidebar.classList.toggle('active');
    body.classList.toggle('menu-open');
  }

const codigoParaUF = {
  1: 'br-se',
  2: 'br-pa',
  3: 'br-mg',
  4: 'br-rr',
  5: 'br-ms',
  6: 'br-mt',
  7: 'br-pr',
  8: 'br-sc',
  9: 'br-ce',
  10: 'br-go',
  11: 'br-pb',
  12: 'br-ap',
  13: 'br-al',
  14: 'br-am',
  15: 'br-rn',
  16: 'br-to',
  17: 'br-rs',
  18: 'br-ro',
  19: 'br-pe',
  20: 'br-ac',
  21: 'br-rj',
  22: 'br-ba',
  23: 'br-ma',
  24: 'br-sp',
  25: 'br-pi',
  26: 'br-es',
  27: 'br-df',
};


function getCor(imc) {
  if (imc < 25) return '#4CAF50';        
  if (imc >= 25 && imc < 30) return '#FBC02D'; 
  if (imc >= 30 && imc < 40) return '#F44336'; 
  return '#B71C1C';                     
}

let chartRef = null; 

function coletarGraficoImc() {
  fetch('/dashboard/coletarGraficoImc', { cache: 'no-store' })
    .then(resposta => {
      if (resposta.ok) {
        return resposta.json();
      }
      throw new Error('Erro na resposta do backend');
    })
    .then(json => {
      if (json.resultado) {
        const imcPorEstado = {};

        json.resultado.forEach(item => {
          const uf = codigoParaUF[item.cdg_cidade];
          if (uf) {
            imcPorEstado[uf] = Number(item.media_imc.toFixed(2));
          }
        });

        atualizarGrafico(imcPorEstado);
      } else {
        console.warn("Nenhum resultado encontrado no array 'resultado'.");
      }
    })
    .catch(erro => {
      console.error('Erro ao coletar gráfico IMC:', erro);
    });
}

function atualizarGrafico(imcPorEstado) {
  const dadosMapa = Object.entries(imcPorEstado).map(([uf, imc]) => ({
    'hc-key': uf,
    value: imc,
    color: getCor(imc),
  }));

  if (chartRef) {
    chartRef.series[0].setData(dadosMapa);
  } else {
    chartRef = Highcharts.mapChart('container', {
      chart: { map: 'countries/br/br-all' },
      title: { text: 'IMC Médio por Estado' },
      tooltip: { pointFormat: '{point.name}: <b>{point.value}</b>' },
      colorAxis: {
        dataClasses: [
          { from: 0, to: 24.9, color: '#4CAF50', name: 'Normal ou Abaixo do Peso' },
          { from: 25, to: 29.9, color: '#FBC02D', name: 'Sobrepeso' },
          { from: 30, to: 39.9, color: '#F44336', name: 'Obesidade' },
          { from: 40, color: '#B71C1C', name: 'Obesidade Mórbida' },
        ],
      },
      series: [{
        data: dadosMapa,
        name: 'IMC Médio',
        states: { hover: { color: '#BADA55' } },
        dataLabels: { enabled: true, format: '{point.name.toUpperCase()}' },
      }],
    });
  }
}

window.onload = coletarGraficoImc;
