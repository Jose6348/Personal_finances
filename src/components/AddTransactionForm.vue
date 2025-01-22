<template>
    <form @submit.prevent="addTransaction">
      <input v-model="amount" type="number" placeholder="Valor">
      <input v-model="description" placeholder="Descrição">
      <select v-model="category">
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
      <select v-model="type">
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        amount: 0,
        description: '',
        category: 'Alimentação', // Valor padrão
        type: 'expense'
      };
    },
    computed: {
      categories() {
        return this.$store.state.categories;
      }
    },
    methods: {
      addTransaction() {
        const transaction = {
          id: Date.now(), // ID temporário, idealmente use UUID ou backend para geração
          amount: parseFloat(this.amount),
          description: this.description,
          category: this.category,
          type: this.type,
          date: new Date()
        };
        this.$store.commit('addTransaction', transaction);
        this.amount = 0;
        this.description = '';
      }
    }
  };
  </script>