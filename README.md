# 🌙 Resumo Math 3 EM

Plataforma web interativa, responsiva e otimizada para o **modo noturno (Dark Mode)**, desenvolvida para consulta rápida e estudo avançado de **Aritmética e Álgebra** (Capítulos 10 e 11). 

O projeto conta com fórmulas formatadas em MathJax, gráficos dinâmicos interativos com Chart.js, diagramas de Venn em SVG, legendas completas de variáveis e integração com ferramentas externas de investimento.

---

## 🚀 Funcionalidades

- **🎨 Interface Nocturnal / Dark-Mode:** Design escuro moderno com alto contraste e tons de cyan neon (`#38bdf8`), focado no conforto visual durante estudos noturnos.
- **📱 Navegação Responsiva & Compacta:**
  - Menu lateral (*sidebar*) fixo para telas de Desktop.
  - Menu suspenso otimizado para dispositivos móveis com fechamento automático ao clicar nas opções e ajuste dinâmico de altura.
- **📐 Fórmulas & Expressões Matemáticas:** Renderização completa e nítida utilizando **MathJax** ($M = C \cdot (1 + i)^t$, equações quadráticas, logaritmos, etc.).
- **🔑 Legenda Detalhada de Variáveis:** Caixas explicativas em todas as seções para rápida identificação de termos ($C$, $J$, $i$, $t$, $a$, $b$, $c$, $n$, $k$, $x$, $y$).
- **📊 Gráficos Interativos (Chart.js):** Simulador dinâmico comparativo entre **Juros Simples vs. Juros Compostos**.
- **🖼️ Diagrama SVG de Conjuntos:** Ilustração vetorial limpa para visualização de Teoria dos Conjuntos ($\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{I}, \mathbb{R}$).
- **🚀 Integração Externa:** Card em destaque com redirecionamento direto para a ferramenta [DarkInvest 2026](https://rjyun10.github.io/DarkInvest-2026/).

---

## 📚 Conteúdo Coberto

### 🔹 Capítulo 10: Aritmética
1. **Conjuntos Numéricos:** Definições, propriedades e diagrama de conjuntos ($\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{I}, \mathbb{R}$).
2. **Matemática Financeira & Juros:** Juros simples, juros compostos, porcentagens, acréscimos/descontos e simulador gráfico.
3. **Análise Combinatória:** Princípio Fundamental da Contagem (PFC), Arranjos ($A_{n,k}$), Permutações ($P_n$) e Combinações ($C_{n,k}$).

### 🔹 Capítulo 11: Álgebra
1. **Fatoração & Equações:** Produtos notáveis, equações e inequações do 1º e 2º grau.
2. **Tipos de Funções:** Domínio, contradomínio, imagem, classificação (injetora, sobrejetora, bijetora), função composta e inversão.
3. **Estudo Prático das Funções:**
   - Função Afim (1º grau)
   - Função Quadrática (2º grau)
   - Função Modular
   - Função Exponencial & Logarítmica

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estruturação semântica.
- **CSS3 & Bootstrap 5** — Estilização, grid responsivo e componentes Dark Theme.
- **JavaScript (ES6+)** — Lógica interativa do menu mobile e calculadoras.
- **Chart.js** — Renderização de gráficos dinâmicos no canvas.
- **MathJax 3** — Formatação e renderização de expressões em LaTeX.
- **Bootstrap Icons** — Iconografia moderna.

---

## 📂 Estrutura do Projeto

```text
.
├── index.html     # Estrutura principal da página e conteúdos matemáticos
├── style.css      # Estilização do tema noturno, media queries e layout
├── script.js     # Lógica do menu mobile, calculadoras e inicialização dos gráficos
├── imagens     # Imagens usadas
|     └── favicon.svg    # Ícone vetorial da aba do navegador (Lua + Somatório)
└── README.md      # Documentação do repositório