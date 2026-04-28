// src/api.ts
const API_BASE = "http://127.0.0.1:8000";

// Status da API
export async function getStatus() {
  const res = await fetch(`${API_BASE}/status`);
  return res.json();
}

// Continentes
export async function getContinentes() {
  const res = await fetch(`${API_BASE}/api/continentes`);
  return res.json();
}

// Países por continente
export async function getPaisesPorContinente(nome: string) {
  const res = await fetch(`${API_BASE}/api/continentes/${nome}/paises`);
  return res.json();
}

// Dados de COVID por país
export async function getCovidPorPais(pais: string) {
  const res = await fetch(`${API_BASE}/api/covid/${pais}`);
  return res.json();
}

// Dados de COVID por continente
export async function getCovidPorContinente(nome: string) {
  const res = await fetch(`${API_BASE}/api/covid/continente/${nome}`);
  return res.json();
}

// Top N países com mais casos
export async function getTopPaises(n: number) {
  const res = await fetch(`${API_BASE}/api/covid/top/${n}`);
  return res.json();
}

// Resumo global
export async function getResumoGlobal() {
  const res = await fetch(`${API_BASE}/api/covid/resumo_global`);
  return res.json();
}

// Evolução temporal de um país
export async function getEvolucaoPais(pais: string) {
  const res = await fetch(`${API_BASE}/api/covid/evolucao/${pais}`);
  return res.json();
}

// Ranking de países dentro de um continente
export async function getRankingContinente(nome: string) {
  const res = await fetch(`${API_BASE}/api/covid/ranking/${nome}`);
  return res.json();
}
