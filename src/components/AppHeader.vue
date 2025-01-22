<template>
  <header class="app-header">
    <h1 class="header-title">Gerenciador de Finanças Pessoais</h1>
    <nav class="header-nav">
      <router-link to="/" class="nav-link">Início</router-link> | 
      <router-link to="/transactions" class="nav-link">Transações</router-link> | 
      <router-link to="/goals" class="nav-link">Metas</router-link> | 
      <router-link to="/summary" class="nav-link">Resumo</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  background-color: #2c3e50;
  color: white;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.header-title {
  margin: 0 0 10px 0;
  font-size: 24px;
  text-align: center;
}

.header-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link:not(:last-child)::after {
  content: '|';
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.5);
}
</style>