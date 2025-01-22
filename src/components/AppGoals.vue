<template>
    <div>
      <h2>Minhas Metas Financeiras</h2>
      <ul>
        <li v-for="goal in goals" :key="goal.id">
          {{ goal.description }} - Alvo: R${{ goal.targetAmount }}
          <span v-if="currentProgress(goal) !== null">
            (Progresso: R${{ currentProgress(goal) }})
          </span>
        </li>
      </ul>
      <form @submit.prevent="addGoal">
        <input v-model="description" placeholder="Descrição da Meta" required>
        <input v-model.number="targetAmount" type="number" placeholder="Valor Alvo" required min="0">
        <button type="submit">Adicionar Meta</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppGoals', // Nome do componente conforme a convenção de múltiplas palavras
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
          id: Date.now(), // ID temporário, idealmente use UUID ou backend para geração de ID
          description: this.description,
          targetAmount: this.targetAmount,
          currentAmount: 0
        };
        this.$store.commit('addGoal', goal);
        this.description = '';
        this.targetAmount = 0;
      },
      currentProgress(goal) {
        // Implementação de exemplo para calcular o progresso
        // Aqui você deve acessar as transações do Vuex Store para calcular o progresso real
        // Por simplicidade, vamos supor que temos uma lógica de progresso básica:
        const transactions = this.$store.state.transactions.filter(t => t.category === goal.description);
        const progress = transactions.reduce((acc, trans) => acc + (trans.type === 'income' ? trans.amount : -trans.amount), 0);
        return progress > 0 ? progress : null;
      }
    }
  };
  </script>