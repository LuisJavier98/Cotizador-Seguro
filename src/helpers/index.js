export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year
}

export function obtenerDiferenciaMarca() {
  return {
    Americano: 0.15,
    Europeo: 0.30,
    Asiatico: 0.05
  }
}
export function calcularPlan() {
  return {
    Básico: 0.2,
    Completo: 0.5
  }
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}