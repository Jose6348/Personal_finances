<template>
    <li>
      {{ transaction.description }} - {{ transaction.type }}: {{ transaction.amount | currency }}
      <button @click="editTransaction">Editar</button>
      <button @click="deleteTransaction">Excluir</button>
    </li>
  </template>
  
  <script>
  export default {
    props: ['transaction'],
    methods: {
      editTransaction() {
        // Lógica para editar a transação
      },
      deleteTransaction() {
        this.$store.commit('deleteTransaction', this.transaction.id);
      }
    },
    filters: {
      currency(value) {
        return `R$ ${value.toFixed(2)}`;
      }
    }
  };
  </script>