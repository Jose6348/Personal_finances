<template>
    <form @submit.prevent="addTransaction" class="add-transaction-form">
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
      <button type="submit" class="form-button">Adicionar</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        amount: 0,
        description: '',
        category: 'Alimentação', 
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
          id: Date.now(), 
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
  
  <style scoped>
  .add-transaction-form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  
  .form-button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-button:hover {
    background-color: #45a049;
  }
  </style>