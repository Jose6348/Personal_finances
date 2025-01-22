<template>
    <div class="home-container">
      <h1 class="home-title">Bem-vindo ao Gerenciador de Finanças Pessoais</h1>
      <p class="home-description">Aqui você pode gerenciar suas finanças de forma simples e eficiente.</p>
      <div class="home-actions">
        <router-link to="/transactions" class="action-button">Ver Transações</router-link>
        <router-link to="/goals" class="action-button">Definir Metas</router-link>
      </div>
      <div class="home-stats">
        <div class="stat-box">
          <h3>{{ totalTransactions }}</h3>
          <p>Transações</p>
        </div>
        <div class="stat-box">
          <h3>{{ formatCurrency(totalBalance) }}</h3>
          <p>Saldo Total</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppHome',
    computed: {
      totalTransactions() {
        return this.$store.state.transactions.length;
      },
      totalBalance() {
        return this.$store.getters.totalBalance;
      }
    },
    methods: {
      formatCurrency(value) {
        return `R$ ${value.toFixed(2)}`;
      }
    }
  }
  </script>
  
  <style scoped>
  .home-container {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 2100px;
    margin: 0 auto;
  }
  
  .home-title {
    color: #34495e;
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .home-description {
    color: #7f8c8d;
    font-size: 1.1em;
    margin-bottom: 30px;
  }
  
  .home-actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .action-button {
    text-decoration: none;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .action-button:hover {
    background-color: #2980b9;
  }
  
  .home-stats {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .stat-box {
    background-color: #ecf0f1;
    padding: 20px;
    border-radius: 5px;
    width: 45%; 
    text-align: center;
  }
  
  .stat-box h3 {
    margin: 0;
    font-size: 2em;
    color: #2c3e50;
  }
  
  .stat-box p {
    margin: 0;
    color: #7f8c8d;
    font-size: 1.1em;
  }
  
  /* Estilo para telas menores */
  @media (max-width: 600px) {
    .home-container {
      padding: 20px;
    }
  
    .home-title {
      font-size: 1.5em;
    }
  
    .home-description {
      font-size: 1em;
    }
  
    .stat-box {
      width: 100%;
    }
  }
  </style>