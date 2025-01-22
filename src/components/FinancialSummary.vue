<template>
    <div class="financial-summary">
      <h2 class="summary-title">Resumo Financeiro</h2>
      <div class="summary-stats">
        <div class="stat-item">
          <p class="stat-label">Saldo Total:</p>
          <p class="stat-value">{{ formatCurrency(totalBalance) }}</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">Total de Receitas:</p>
          <p class="stat-value income">{{ formatCurrency(totalIncome) }}</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">Total de Despesas:</p>
          <p class="stat-value expense">{{ formatCurrency(totalExpenses) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FinancialSummary',
    computed: {
      totalBalance() {
        return this.$store.getters.totalBalance;
      },
      totalIncome() {
        return this.$store.getters.totalIncome;
      },
      totalExpenses() {
        return this.$store.getters.totalExpenses;
      }
    },
    methods: {
      formatCurrency(value) {
        return `R$ ${value.toFixed(2)}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .financial-summary {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .summary-title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .summary-stats {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ecf0f1;
    border-radius: 4px;
  }
  
  .stat-label {
    font-weight: bold;
    color: #34495e;
  }
  
  .stat-value {
    font-size: 18px;
    font-weight: bold;
  }
  
  .income {
    color: #2ecc71; /* Verde para receitas */
  }
  
  .expense {
    color: #e74c3c; /* Vermelho para despesas */
  }
  
  @media (min-width: 768px) {
    .summary-stats {
      flex-direction: row;
    }
  }
  </style>