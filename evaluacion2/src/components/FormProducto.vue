<template>
  <div class="producto">
    <form @submit.prevent="registrar">
      <label>Nombre
        <input v-model.trim="form.nombre" type="text" required minlength="2" />
      </label>

      <label>Precio
        <input v-model.number="form.precio" type="number" step="0.01" min="0.01" required />
      </label>

      <label>Cantidad
        <input v-model.number="form.cantidad" type="number" step="1" min="1" required />
      </label>

      <button type="submit">Registrar producto</button>
    </form>

    <!-- Resultado inmediato del registro actual -->
    <div v-if="ultimo" class="resultado">
      <h3>✅ Producto registrado</h3>
      <p><strong>Nombre:</strong> {{ ultimo.nombre }}</p>
      <p><strong>Precio:</strong> ${{ Number(ultimo.precio).toFixed(2) }}</p>
      <p><strong>Cantidad:</strong> {{ ultimo.cantidad }}</p>
      <p><strong>Total:</strong> ${{ (Number(ultimo.precio) * Number(ultimo.cantidad)).toFixed(2) }}</p>
    </div>

    <!-- Historial (tabla) -->
    <div v-if="productos.length" class="tabla-wrap">
      <h3>📦 Historial de productos</h3>
      <table class="tabla">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in productos" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ p.nombre }}</td>
            <td>${{ Number(p.precio).toFixed(2) }}</td>
            <td>{{ p.cantidad }}</td>
            <td>${{ (Number(p.precio) * Number(p.cantidad)).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ nombre: '', precio: null, cantidad: null })
const productos = ref([])
const ultimo = ref(null)

const registrar = () => {
  // Validaciones básicas extra
  if (!form.nombre?.trim()) return
  if (!(form.precio > 0)) return
  if (!(Number.isInteger(form.cantidad) && form.cantidad > 0)) return

  const producto = {
    nombre: form.nombre.trim(),
    precio: Number(form.precio),
    cantidad: Number(form.cantidad)
  }

  productos.value.unshift(producto) // agrega al inicio para ver lo más nuevo arriba
  ultimo.value = producto

  // Limpia el form (opcional)
  form.nombre = ''
  form.precio = null
  form.cantidad = null
}
</script>

<style scoped>
.producto { display: grid; gap: 16px; }
form{
  display: grid; gap: 12px; text-align: left;
}
label{ display: grid; gap: 6px; font-weight: 600; }
input{
  padding: 10px 12px; border-radius: 8px; border: 1px solid #d0d6de;
}
button{
  margin-top: 6px; padding: 10px 14px; border-radius: 10px; border: 0;
  background: #42b983; color: #0b1411; font-weight: 800; cursor: pointer;
}
button:hover{ filter: brightness(0.95); }

.resultado{
  border: 1px solid #cfe9d9; background: #eefaf4; padding: 12px; border-radius: 10px;
}

.tabla-wrap { overflow-x: auto; }
.tabla{
  width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0;
}
.tabla th, .tabla td{
  padding: 10px 8px; border-bottom: 1px solid #e2e8f0; text-align: left;
}
.tabla thead th{ background: #f7fafc; }
</style>
