const imcPorEstado = {
    'br-ac': 27.5,
    'br-al': 29.0,
    'br-ap': 25.5,
    'br-am': 24.0,
    'br-ba': 30.2,
    'br-ce': 26.8,
    'br-df': 28.9,
    'br-es': 29.5,
    'br-go': 30.5,
    'br-ma': 23.8,
    'br-mt': 27.2,
    'br-ms': 30.1,
    'br-mg': 24.5,
    'br-pa': 26.2,
    'br-pb': 28.0,
    'br-pr': 29.3,
    'br-pe': 25.7,
    'br-pi': 30.7,
    'br-rj': 42.3,
    'br-rn': 26.0,
    'br-rs': 30.4,
    'br-ro': 25.0,
    'br-rr': 24.2,
    'br-sc': 27.0,
    'br-sp': 41.8,
    'br-se': 28.7,
    'br-to': 26.5
  };

  const nomesEstados = {
  'br-ac': 'Acre',
  'br-al': 'Alagoas',
  'br-ap': 'Amapá',
  'br-am': 'Amazonas',
  'br-ba': 'Bahia',
  'br-ce': 'Ceará',
  'br-df': 'Distrito Federal',
  'br-es': 'Espírito Santo',
  'br-go': 'Goiás',
  'br-ma': 'Maranhão',
  'br-mt': 'Mato Grosso',
  'br-ms': 'Mato Grosso do Sul',
  'br-mg': 'Minas Gerais',
  'br-pa': 'Pará',
  'br-pb': 'Paraíba',
  'br-pr': 'Paraná',
  'br-pe': 'Pernambuco',
  'br-pi': 'Piauí',
  'br-rj': 'Rio de Janeiro',
  'br-rn': 'Rio Grande do Norte',
  'br-rs': 'Rio Grande do Sul',
  'br-ro': 'Rondônia',
  'br-rr': 'Roraima',
  'br-sc': 'Santa Catarina',
  'br-sp': 'São Paulo',
  'br-se': 'Sergipe',
  'br-to': 'Tocantins'
};

  function getCor(imc) {
  if (imc < 25) {
    return '#4CAF50'; 
  } else if (imc >= 25 && imc < 30) {
    return '#FBC02D'; 
  } else if (imc >= 30 && imc < 40) {
    return '#F44336'; 
  } else {
    return '#B71C1C'; 
  }
}
  
  const dadosMapa = Object.entries(imcPorEstado).map(([uf, imc]) => ({
    'hc-key': uf,
    value: imc,
    color: getCor(imc)
  }));

  Highcharts.mapChart('container', {
    chart: {
      map: 'countries/br/br-all'
    },
    title: {
      text: 'IMC Médio por Estado'
    },
    tooltip: {
      pointFormat: '{point.name}: <b>{point.value}</b>'
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'bottom',
      floating: true,
      backgroundColor: 'white',
      symbolRadius: 0,
      symbolHeight: 14,
      labelFormatter: function () {
        return this.name;
      }
    },
    colorAxis: {
      dataClasses: [
        {
          from: 0,
          to: 24.9,
          color: '#4CAF50',
          name: 'Normal ou Abaixo do Peso'
        },
        {
          from: 25,
          to: 29.9,
          color: '#FBC02D',
          name: 'Sobrepeso'
        },
        {
          from: 30,
          color: '#F44336',
          name: 'Obesidade'
        },
        {
      from: 40,
      color: '#B71C1C',
      name: 'Obesidade Mórbida'
    }
      ]
    },
    series: [{
      data: dadosMapa,
      name: 'IMC Médio',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name.toUpperCase()}'
      }
    }]
  });

  const legendaItems = document.querySelectorAll('.item-legenda');
  let chartRef = null;

  function classificarIMC(imc) {
    if (imc < 25) return 'normal';
    else if (imc >= 25 && imc < 30) return 'sobrepeso';
    else if (imc >= 30 && imc < 40) return 'obesidade';
    else return 'obesidade-morbida';
  }

  function atualizarMapaPorCategoria(categoriaSelecionada) {
    chartRef.series[0].data.forEach(point => {
      const categoria = classificarIMC(point.value);
      if (categoria === categoriaSelecionada) {
        point.update({ color: point.options.color, opacity: 1 }, false);
      } else {
        point.update({ color: point.options.color, opacity: 0.2 }, false);
      }
    });
    chartRef.redraw();
  }

  function resetarMapa() {
    chartRef.series[0].data.forEach(point => {
      point.update({ color: point.options.color, opacity: 1 }, false);
    });
    chartRef.redraw();
  }

  legendaItems.forEach(item => {
    item.addEventListener('click', () => {
      const ativo = item.classList.contains('ativo');
      legendaItems.forEach(i => i.classList.remove('ativo'));

      if (!ativo) {
    item.classList.add('ativo');
    atualizarMapaPorCategoria(item.dataset.imc);
    mostrarEstadosFiltrados(item.dataset.imc); 
   } else {
    resetarMapa();
    ocultarCardEstados(); 
   }

      legendaItems.forEach(i => {
        if (i === item && !ativo) {
          i.style.opacity = '1';
        } else {
          i.style.opacity = ativo ? '1' : '0.4';
        }
      });
    });
  });

  function classificarIMC(imc) {
  if (imc < 25) return 'normal';
  if (imc >= 25 && imc < 30) return 'sobrepeso';
  if (imc >= 30 && imc < 40) return 'obesidade';
  return 'obesidade-morbida';
}

function mostrarEstadosFiltrados(categoria) {
  const card = document.getElementById('card-estados');
  const lista = document.getElementById('lista-estados');
  lista.innerHTML = '';

  const estadosFiltrados = Object.entries(imcPorEstado).filter(([_, imc]) => {
    return classificarIMC(imc) === categoria;
  });

  estadosFiltrados.forEach(([uf, imc]) => {
    const li = document.createElement('li');
    const nomeCompleto = nomesEstados[uf] || uf.toUpperCase();
    li.textContent = `📍 ${nomeCompleto} - IMC Médio: ${imc}`;
    lista.appendChild(li);
  });

  card.style.display = estadosFiltrados.length ? 'block' : 'none';
}


function ocultarCardEstados() {
  document.getElementById('card-estados').style.display = 'none';
  document.getElementById('lista-estados').innerHTML = '';
}


  chartRef = Highcharts.mapChart('container', {
    chart: {
      map: 'countries/br/br-all'
    },
    title: {
      text: 'IMC Médio por Estado'
    },
    tooltip: {
      pointFormat: '{point.name}: <b>{point.value}</b>'
    },
    colorAxis: {
      dataClasses: [
        {
          from: 0,
          to: 24.9,
          color: '#4CAF50',
          name: 'Normal ou Abaixo do Peso'
        },
        {
          from: 25,
          to: 29.9,
          color: '#FBC02D',
          name: 'Sobrepeso'
        },
        {
          from: 30,
          to: 39.9,
          color: '#F44336',
          name: 'Obesidade'
        },
        {
          from: 40,
          color: '#B71C1C',
          name: 'Obesidade Mórbida'
        }
      ]
    },
    series: [{
      data: dadosMapa,
      name: 'IMC Médio',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name.toUpperCase()}'
      }
    }]
  });

  function toggleMenu() {
    const sidebar = document.querySelector('.lateral');
    const body = document.body;
    sidebar.classList.toggle('active');
    body.classList.toggle('menu-open');
  }