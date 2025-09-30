<template>
  <form @submit.prevent="registrar">
    <label>Nombre
      <input v-model.trim="form.nombre" pattern="[A-Za-z ]+" required />
    </label>

    <label>Precio
      <input v-model.number="form.precio" type="number" step="0.01" min="0.01" required />
    </label>

    <label>Cantidad
      <input v-model.number="form.cantidad" type="number" step="1" min="1" required />
    </label>

    <button type="submit">Registrar</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ nombre: '', precio: null, cantidad: null })

const registrar = () => {
  alert(`Producto registrado: ${form.nombre}, Precio: $${form.precio}, Cantidad: ${form.cantidad}`)
}
</script>
