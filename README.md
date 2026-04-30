# 📊 covidDataFlow_Frontend

Frontend do projeto **covidDataFlow**, criado para manipular e explorar dados de forma divertida e interativa.  
Este frontend **irá se conectar** ao [covidDataFlow (Backend)](https://github.com/mozartCuman/covidDataFlow) para:

- 💾 **Persistência de dados** → salvar informações coletadas em banco de dados  
- 🔎 **Recuperação de dados** → buscar e exibir dados já armazenados  
- 🌐 **Scraping** → coletar novas informações de fontes externas sobre COVID  

---

## ✅ O que já foi implementado
- ⚙️ Estrutura inicial criada com **Create React App**  
- 🎨 Configuração de cores e paleta visual (`colors.css`)  
- 🧩 Componentes principais (`Article`, `Summary`, `Header`, `Button`)  
- 📊 Página **SouthAmerica** com gráfico de barras usando **Chart.js**  
- 💻 Estilização dos cards com **cinza claro**, bordas arredondadas e sombra suave  
- 🔗 Integração com GitHub (`git remote origin` configurado corretamente)  
- 📡 Criação do arquivo **api.ts** centralizando funções de consumo da API  
- 🧱 Componente **Dashboard modular** que recebe título e função de API como props, permitindo reutilização em diferentes páginas  
- 🌍 Integração do Dashboard com a página **SouthAmericaPage**, consumindo dados do back-end via `getPaisesPorContinente`  
- 📈 Preparação das views (`PaisesPContinenteView`, `SouthAmericaChartView`) para exibir países e casos em cards e gráficos  

---

## ⚠️ Dificuldades enfrentadas
- 📂 Ajuste da estrutura de pastas para organizar `components`, `pages` e `Styles`  
- 🔄 Erros de importação ao tentar usar funções de API antes de implementá-las  
- 🚫 Problemas com **CORS** ao tentar conectar o front ao back → resolvido com middleware no FastAPI  
- 🧮 Indexação incorreta em dados retornados do back (ex.: acessar `row[1]` quando só havia uma coluna)  
- 📝 Duplicação de funções (`getContinentes`) exigindo padronização no `api.ts`  
- 🛠️ Ajustes de tipagem em TypeScript para evitar erros de compilação  
- 📊 Configuração inicial do Chart.js para renderizar corretamente os gráficos  
- 🔗 Endpoint retornava apenas nomes de países sem números de casos → necessidade de ajuste no back-end para enriquecer os dados  
- 🎛️ Integração entre componentes genéricos (Dashboard) e views específicas (gráficos, cards) exigiu ajustes de props e tipagem  

---

## 🔜 O que ainda será feito
- 🔗 Conexão completa com o **backend** para persistência, recuperação e scraping  
- 🌍 Páginas para outras regiões (América do Norte, Europa, Ásia etc.)  
- 📱 Gráficos responsivos para telas menores (mobile/tablet)  
- 🎛️ Filtros interativos (por país, período, tipo de dado)  
- 🧭 Rotas com React Router para navegação entre páginas  
- 🎨 Design aprimorado usando a paleta de cores (bordeaux, esmeralda, cobalto, chumbo)  
- ✅ Testes automatizados para garantir qualidade do frontend  
- 📖 Documentação da API usada para alimentar os gráficos  
- 🚀 Deploy do frontend (Vercel ou Netlify)  

---

## 🚀 Scripts Disponíveis
- `npm start` → roda o app em modo desenvolvimento  
- `npm test` → inicia o runner de testes  
- `npm run build` → cria a versão de produção  
- `npm run eject` → expõe toda a configuração (irreversível)  

---

## 📚 Saiba Mais
- [Create React App](https://create-react-app.dev/docs/getting-started/)  
- [React](https://react.dev/)  
- [Chart.js](https://www.chartjs.org/)  
- [covidDataFlow Backend](https://github.com/mozartCuman/covidDataFlow)  
