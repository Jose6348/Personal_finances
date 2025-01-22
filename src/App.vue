<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>
/* Estilo geral do aplicativo */
#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  background: linear-gradient(to bottom, #ecf0f1, #bdc3c7); /* Degrade suave de cinza claro para um cinza mais escuro */
  max-width: 2100px;
}

/* Estilização do conteúdo principal */
.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinha o conteúdo ao topo do main */
  padding: 20px 0;
}

.content-wrapper {
  width: 100%;
  max-width: 1200px; /* Limita a largura do conteúdo para telas grandes */
  min-height: calc(100vh - 120px); /* Ajusta a altura do conteúdo para evitar sobreposição com o footer */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Sombra mais pronunciada para destaque */
  padding: 20px;
  margin: 0 20px; /* Margem lateral para espaço visual */
}

/* Estilo para botões globais */
button {
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

button:hover {
  background-color: #45a049;
  transform: translateY(-2px); /* Efeito de elevação ao passar o mouse */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Media query para ajustes em telas menores */
@media (max-width: 768px) {
  .content-wrapper {
    margin: 0 10px; /* Menos espaço lateral em telas menores */
  }
}
</style>