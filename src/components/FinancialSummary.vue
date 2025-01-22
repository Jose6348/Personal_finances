<template>
    <div>
      <h2>Resumo Financeiro</h2>
      <div>
        <p>Saldo Total: {{ formatCurrency(totalBalance) }}</p>
        <p>Total de Receitas: {{ formatCurrency(totalIncome) }}</p>
        <p>Total de Despesas: {{ formatCurrency(totalExpenses) }}</p>
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