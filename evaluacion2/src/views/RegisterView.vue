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

    <div v-if="mensaje" class="mensaje">
      {{ mensaje }}
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const usuario = reactive({
  nombre: '',
  email: '',
  password: ''
})

const mensaje = ref('')

const registrar = () => {
  if (usuario.nombre && usuario.email && usuario.password) {
    mensaje.value = `Usuario ${usuario.nombre} registrado correctamente 🎉`
    // Aquí podrías hacer un POST a una API
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

.mensaje {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}
</style>
