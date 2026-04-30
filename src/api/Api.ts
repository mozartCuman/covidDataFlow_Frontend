// src/api.ts
const API_BASE = "http://127.0.0.1:8000";

// Função auxiliar para tratar erros
async function fetchJson(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Erro ao buscar ${url}: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

// Status da API
export async function getStatus() {
  return fetchJson(`${API_BASE}/status`);
}

// Continentes
export async function getContinentes() {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/continentes`);
    if (!res.ok) {
      throw new Error(`Erro HTTP ${res.status}: ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error("Erro ao buscar continentes:", err);
    throw err; // repassa o erro para o Dashboard capturar
  }
}

// Países por continente
export async function getPaisesPorContinente(nome: string) {
  return fetchJson(`${API_BASE}/api/continentes/${nome}/paises`);
}

// Dados de COVID por país (se implementado no backend)
export async function getCovidPorPais(pais: string) {
  return fetchJson(`${API_BASE}/api/covid/${pais}`);
}

// Dados de COVID por continente (se implementado no backend)
export async function getCovidPorContinente(nome: string) {
  return fetchJson(`${API_BASE}/api/covid/continente/${nome}`);
}

// Top N países com mais casos (se implementado no backend)
export async function getTopPaises(n: number) {
  return fetchJson(`${API_BASE}/api/covid/top/${n}`);
}

// Resumo global (se implementado no backend)
export async function getResumoGlobal() {
  return fetchJson(`${API_BASE}/api/covid/resumo_global`);
}

// Evolução temporal de um país (se implementado no backend)
export async function getEvolucaoPais(pais: string) {
  return fetchJson(`${API_BASE}/api/covid/evolucao/${pais}`);
}

// Ranking de países dentro de um continente (se implementado no backend)
export async function getRankingContinente(nome: string) {
  return fetchJson(`${API_BASE}/api/covid/ranking/${nome}`);
}
