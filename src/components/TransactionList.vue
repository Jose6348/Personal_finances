<template>
    <div>
        <h2>Minhas Transações</h2>
        <TransactionNotification v-if="notification" :notificationType="notification.type"
            :message="notification.message" />
        <ul>
            <li v-for="transaction in transactions" :key="transaction.id">
                {{ transaction.description }} - {{ transaction.category }}:
                {{ transaction.type === 'income' ? '+' : '-' }}{{ formatCurrency(transaction.amount) }}
                <button @click="editTransaction(transaction)">Editar Transação</button>
                <button @click="deleteTransaction(transaction.id)">Excluir Transação</button>
            </li>
        </ul>
        <AddTransactionForm @transactionAdded="showNotification('success', 'Transação adicionada com sucesso!')" />
        <EditTransactionForm v-if="editingTransaction" :transaction="editingTransaction" @update="updateTransaction"
            @cancel="cancelEdit" />
    </div>
    <ExportTransactions />
</template>

<script>
import AddTransactionForm from './AddTransactionForm.vue';
import EditTransactionForm from './EditTransactionForm.vue';
import TransactionNotification from './TransactionNotification.vue';
import ExportTransactions from './ExportTransactions.vue';

export default {
  name: 'TransactionListView',
  components: { AddTransactionForm, EditTransactionForm, TransactionNotification, ExportTransactions },
  data() {
    return {
      editingTransaction: null,
      notification: null
    };
  },
  computed: {
    transactions() {
      return this.$store.state.transactions;
    }
  },
  methods: {
    deleteTransaction(id) {
      this.$store.commit('deleteTransaction', id);
      if (this.editingTransaction && this.editingTransaction.id === id) {
        this.editingTransaction = null;
      }
      this.showNotification('success', 'Transação excluída com sucesso!');
    },
    editTransaction(transaction) {
      this.editingTransaction = { ...transaction };
    },
    updateTransaction(updatedTransaction) {
      this.$store.commit('updateTransaction', updatedTransaction);
      this.editingTransaction = null;
      this.showNotification('success', 'Transação atualizada com sucesso!');
    },
    cancelEdit() {
      this.editingTransaction = null;
    },
    showNotification(type, message) {
      this.notification = { type, message };
      setTimeout(() => {
        this.notification = null;
      }, 3000);
    },
    formatCurrency(value) {
      return `R$ ${value.toFixed(2)}`;
    }
  }
};
</script>