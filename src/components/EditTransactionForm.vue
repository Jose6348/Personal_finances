<template>
    <form @submit.prevent="updateTransaction" class="edit-transaction-form">
      <div class="form-group">
        <input v-model="amount" type="number" placeholder="Valor" class="form-input">
      </div>
      <div class="form-group">
        <input v-model="description" placeholder="Descrição" class="form-input">
      </div>
      <div class="form-group">
        <select v-model="category" class="form-select">
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <select v-model="type" class="form-select">
          <option value="income">Receita</option>
          <option value="expense">Despesa</option>
        </select>
      </div>
      <div class="form-buttons">
        <button type="submit" class="form-button update">Atualizar</button>
        <button @click="cancel" class="form-button cancel">Cancelar</button>
      </div>
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
  
  <style scoped>
  .edit-transaction-form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .form-group {
    width: 100%;
    margin-bottom: 15px;
  }
  
  .form-input, .form-select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .form-input[type="number"] {
    -moz-appearance: textfield;
  }
  
  .form-input[type="number"]::-webkit-outer-spin-button,
  .form-input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .form-select {
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px top 50%, 0 0;
    background-size: 20px 20px;
  }
  
  .form-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  .form-button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .update {
    background-color: #2ecc71;
    color: white;
  }
  
  .update:hover {
    background-color: #27ae60;
  }
  
  .cancel {
    background-color: #e74c3c;
    color: white;
  }
  
  .cancel:hover {
    background-color: #c0392b;
  }
  </style>