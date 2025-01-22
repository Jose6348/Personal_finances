<template>
    <input type="text" v-model="searchTerm" placeholder="Buscar transação..." @input="searchTransactions">
  </template>
  
  <script>
  export default {
    name: 'TransactionSearchBar',
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      searchTransactions() {
        this.$emit('search', this.searchTerm);
      }
    }
  };
  </script>