Chart.defaults.color = '#94a3b8';
Chart.defaults.scale.grid.color = '#334155';

function renderMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}

// --- 1. GRÁFICO DE JUROS ---
let chartJurosInstance = null;

function calcularJuros() {
  const C = parseFloat(document.getElementById('capital').value);
  const i = parseFloat(document.getElementById('taxa').value) / 100;
  const t = parseInt(document.getElementById('tempo').value);

  let labels = [], simples = [], compostos = [];
  for (let m = 0; m <= t; m++) {
    labels.push(`Mês ${m}`);
    simples.push((C + (C * i * m)).toFixed(2));
    compostos.push((C * Math.pow(1 + i, m)).toFixed(2));
  }

  const ctx = document.getElementById('chartJuros').getContext('2d');
  if (chartJurosInstance) chartJurosInstance.destroy();

  chartJurosInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        { label: 'Juros Simples', data: simples, borderColor: '#f43f5e', backgroundColor: '#f43f5e', fill: false },
        { label: 'Juros Compostos', data: compostos, borderColor: '#22c55e', backgroundColor: '#22c55e', fill: false }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

// --- 2. ANÁLISE COMBINATÓRIA ---
function fatorial(num) {
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = num; i > 1; i--) result *= i;
  return result;
}

function calcPermutacao() {
  const n = parseInt(document.getElementById('permN').value);
  document.getElementById('resPerm').innerText = `P = ${fatorial(n)}`;
}

function calcArranjo() {
  const n = parseInt(document.getElementById('arrN').value);
  const k = parseInt(document.getElementById('arrK').value);
  if (k > n) return document.getElementById('resArr').innerText = 'k deve ser ≤ n';
  document.getElementById('resArr').innerText = `A = ${fatorial(n) / fatorial(n - k)}`;
}

function calcCombinacao() {
  const n = parseInt(document.getElementById('combN').value);
  const k = parseInt(document.getElementById('combK').value);
  if (k > n) return document.getElementById('resComb').innerText = 'k deve ser ≤ n';
  document.getElementById('resComb').innerText = `C = ${fatorial(n) / (fatorial(k) * fatorial(n - k))}`;
}

// --- 3. FUNÇÃO AFIM ---
let chartAfimInstance = null;

function updateAfim() {
  const a = parseFloat(document.getElementById('sliderA').value);
  const b = parseFloat(document.getElementById('sliderB').value);
  document.getElementById('valA').innerText = a;
  document.getElementById('valB').innerText = b;
  document.getElementById('eqAfim').innerText = `f(x) = ${a}x + (${b})`;

  let xVals = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  let yVals = xVals.map(x => a * x + b);

  const ctx = document.getElementById('chartAfim').getContext('2d');
  if (chartAfimInstance) chartAfimInstance.destroy();

  chartAfimInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xVals,
      datasets: [{ label: 'f(x) = ax + b', data: yVals, borderColor: '#38bdf8', backgroundColor: '#38bdf8', tension: 0.1 }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

// --- 4. FUNÇÃO QUADRÁTICA ---
let chartQuadInstance = null;

function updateQuad() {
  const a = parseFloat(document.getElementById('sliderQuadA').value);
  const b = parseFloat(document.getElementById('sliderQuadB').value);
  const c = parseFloat(document.getElementById('sliderQuadC').value);

  document.getElementById('valQuadA').innerText = a;
  document.getElementById('valQuadB').innerText = b;
  document.getElementById('valQuadC').innerText = c;

  const delta = b * b - 4 * a * c;
  const xv = -b / (2 * a);
  const yv = -delta / (4 * a);

  document.getElementById('infoQuad').innerHTML = `
    <strong>Δ:</strong> ${delta.toFixed(2)} | 
    <strong>Vértice:</strong> (${xv.toFixed(2)}, ${yv.toFixed(2)})
  `;

  let xVals = [], yVals = [];
  for (let x = -6; x <= 6; x += 0.5) {
    xVals.push(x);
    yVals.push(a * x * x + b * x + c);
  }

  const ctx = document.getElementById('chartQuad').getContext('2d');
  if (chartQuadInstance) chartQuadInstance.destroy();

  chartQuadInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xVals,
      datasets: [{ label: 'f(x) = ax² + bx + c', data: yVals, borderColor: '#a855f7', backgroundColor: '#a855f7', tension: 0.3 }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

window.onload = function() {
  calcularJuros();
  calcPermutacao();
  calcArranjo();
  calcCombinacao();
  updateAfim();
  updateQuad();
  renderMath();
};
// Função para alternar o container para Tela Cheia (Fullscreen API)
function toggleFullscreen() {
  const container = document.getElementById('darkInvestContainer');
  if (!document.fullscreenElement) {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) { /* Safari */
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) { /* IE11 */
      container.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const sidebarMenu = document.getElementById('sidebarMenu');
  if (!sidebarMenu) return;

  const navLinks = sidebarMenu.querySelectorAll('a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 768 && sidebarMenu.classList.contains('show')) {
        // Aguarda um pequeno instante para a navegação suave iniciar antes de fechar
        setTimeout(() => {
          const bsCollapse = bootstrap.Collapse.getInstance(sidebarMenu) || new bootstrap.Collapse(sidebarMenu);
          bsCollapse.hide();
        }, 150);
      }
    });
  });
});