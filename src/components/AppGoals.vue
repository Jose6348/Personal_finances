<template>
    <div class="app-goals-container">
      <h2 class="goals-title">Minhas Metas Financeiras</h2>
      <ul class="goals-list">
        <li v-for="goal in goals" :key="goal.id" class="goal-item">
          {{ goal.description }} - Alvo: R${{ goal.targetAmount }}
          <span v-if="currentProgress(goal) !== null" class="progress-info">
            (Progresso: R${{ currentProgress(goal) }})
          </span>
        </li>
      </ul>
      <form @submit.prevent="addGoal" class="add-goal-form">
        <div class="form-group">
          <input v-model="description" placeholder="Descrição da Meta" required class="form-input">
        </div>
        <div class="form-group">
          <input v-model.number="targetAmount" type="number" placeholder="Valor Alvo" required min="0" class="form-input">
        </div>
        <button type="submit" class="form-button">Adicionar Meta</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppGoals', 
    data() {
      return {
        description: '',
        targetAmount: 0
      };
    },
    computed: {
      goals() {
        return this.$store.state.goals;
      }
    },
    methods: {
      addGoal() {
        const goal = {
          id: Date.now(), 
          description: this.description,
          targetAmount: this.targetAmount,
          currentAmount: 0
        };
        this.$store.commit('addGoal', goal);
        this.description = '';
        this.targetAmount = 0;
      },
      currentProgress(goal) {
   
        const transactions = this.$store.state.transactions.filter(t => t.category === goal.description);
        const progress = transactions.reduce((acc, trans) => acc + (trans.type === 'income' ? trans.amount : -trans.amount), 0);
        return progress > 0 ? progress : null;
      }
    }
  };
  </script>
  
  <style scoped>
  .app-goals-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .goals-title {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .goals-list {
    list-style-type: none;
    padding: 0;
  }
  
  .goal-item {
    background-color: #ecf0f1;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .progress-info {
    color: #3498db;
    font-weight: bold;
  }
  
  .add-goal-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    width: 100%;
    margin-bottom: 15px;
  }
  
  .form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .form-button {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-button:hover {
    background-color: #2980b9;
  }
  </style>