<template>
  <div class="register">
    <h2>Registro de Usuario</h2>
    <form @submit.prevent="registrar">
      <label>
        Nombre:
        <input v-model.trim="usuario.nombre" type="text" required minlength="3" />
      </label>

      <label>
        Email:
        <input v-model.trim="usuario.email" type="email" required />
      </label>

      <label>
        Contraseña:
        <input v-model="usuario.password" type="password" required minlength="6" />
      </label>

      <button type="submit">Registrarse</button>
    </form>

    <!-- Aquí mostramos lo registrado -->
    <div v-if="registrado" class="resultado">
      <h3>✅ Registro exitoso</h3>
      <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
      <p><strong>Email:</strong> {{ usuario.email }}</p>
      <p><strong>Contraseña:</strong> {{ usuario.password }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// Datos del usuario
const usuario = reactive({
  nombre: '',
  email: '',
  password: ''
})

// Estado: si ya se registró o no
const registrado = ref(false)

// Función para el submit
const registrar = () => {
  if (usuario.nombre && usuario.email && usuario.password) {
    registrado.value = true
  }
}
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #aaa;
}

button {
  padding: 0.7rem;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #36996d;
}

.resultado {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: #eafbea;
  border: 1px solid #42b983;
  text-align: left;
}
</style>
