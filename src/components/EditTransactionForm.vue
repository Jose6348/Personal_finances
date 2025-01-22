<template>
    <form @submit.prevent="updateTransaction">
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
      <button type="submit">Atualizar</button>
      <button @click="cancel">Cancelar</button>
    </form>
  </template>
  
  <script>
  export default {
    props: ['transaction'],
    data() {
      return {
        amount: this.transaction.amount,
        description: this.transaction.description,
        category: this.transaction.category,
        type: this.transaction.type
      };
    },
    computed: {
      categories() {
        return this.$store.state.categories;
      }
    },
    methods: {
      updateTransaction() {
        const updatedTransaction = {
          ...this.transaction,
          amount: parseFloat(this.amount),
          description: this.description,
          category: this.category,
          type: this.type
        };
        this.$store.commit('updateTransaction', updatedTransaction);
        this.$emit('update');
      },
      cancel() {
        this.$emit('cancel');
      }
    }
  };
  </script>