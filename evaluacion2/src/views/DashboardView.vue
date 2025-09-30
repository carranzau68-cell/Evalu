<template>
  <div class="dashboard">
    <h2>Panel de Control</h2>
    <p>Aquí puedes ver un resumen de lo registrado:</p>

    <div class="cards">
      <div class="card">
        <h3>Usuarios</h3>
        <p>Total registrados: {{ usuarios.length }}</p>
      </div>

      <div class="card">
        <h3>Productos</h3>
        <p>Total registrados: {{ productos.length }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const usuarios = ref([
  { nombre: "Ana", email: "ana@mail.com" },
  { nombre: "Luis", email: "luis@mail.com" }
])

const productos = ref([
  { nombre: "Laptop", precio: 550.99, cantidad: 10 },
  { nombre: "Teclado", precio: 89.5, cantidad: 25 }
])
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.card {
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  background: #2c3e50;
  color: white;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
}
</style>
