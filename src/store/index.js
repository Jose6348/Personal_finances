import { createStore } from 'vuex'

export default createStore({
  state: {
    transactions: [],
    categories: ['Alimentação', 'Transporte', 'Saúde', 'Lazer'],
    goals: []
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    totalBalance: state => {
      return state.transactions.reduce((acc, transaction) => {
        return acc + (transaction.type === 'income' ? transaction.amount : -transaction.amount);
      }, 0);
    },
    totalIncome: state => {
      return state.transactions.reduce((acc, transaction) => {
        return transaction.type === 'income' ? acc + transaction.amount : acc;
      }, 0);
    },
    totalExpenses: state => {
      return state.transactions.reduce((acc, transaction) => {
        return transaction.type === 'expense' ? acc + transaction.amount : acc;
      }, 0);
    }
  }
})