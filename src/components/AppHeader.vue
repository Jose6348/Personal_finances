<template>
  <header>
    <h1>Gerenciador de Finanças Pessoais</h1>
    <nav>
      <router-link to="/">Início</router-link> | 
      <router-link to="/transactions">Transações</router-link> | 
      <router-link to="/goals">Metas</router-link> | 
      <router-link to="/summary">Resumo</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>