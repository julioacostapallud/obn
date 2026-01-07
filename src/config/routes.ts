/**
 * Configuración de rutas tokenizadas para OPERACIÓN NUEVA BASE
 * 
 * Para cambiar los tokens, simplemente modifica los valores aquí.
 * Los tokens deben ser difíciles de adivinar (18-32 caracteres alfanuméricos).
 */

export const ROUTES = {
  access1: "/kT7mP2xQ9vA3nL8sR1",
  access2: "/B6zN4qW8hT2yK9pX7c",
  access3: "/mQ9sL2vT7xA4nP1kR8",
  access5: "/Z3pH8tN1qW6yK2xV9b",
  access6: "/rX7kM2pQ9nT4vL8sA1",
} as const;

// Mapa inverso para validar rutas
export const VALID_ROUTES = new Set(Object.values(ROUTES));

