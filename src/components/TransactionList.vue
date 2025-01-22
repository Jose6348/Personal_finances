<template>
    <div class="transaction-list">
        <h2 class="transaction-title">Minhas Transações</h2>
        <TransactionNotification v-if="notification" :notificationType="notification.type" :message="notification.message" />
        <ul class="transaction-items">
            <li v-for="transaction in transactions" :key="transaction.id" class="transaction-item">
                <div class="transaction-details">
                    <span class="transaction-description">{{ transaction.description }}</span> - 
                    <span class="transaction-category">{{ transaction.category }}:</span>
                    <span :class="transaction.type === 'income' ? 'income' : 'expense'">
                        {{ transaction.type === 'income' ? '+' : '-' }}{{ formatCurrency(transaction.amount) }}
                    </span>
                </div>
                <div class="transaction-actions">
                    <button @click="editTransaction(transaction)" class="action-button edit">Editar Transação</button>
                    <button @click="deleteTransaction(transaction.id)" class="action-button delete">Excluir Transação</button>
                </div>
            </li>
        </ul>
        <AddTransactionForm @transactionAdded="showNotification('success', 'Transação adicionada com sucesso!')" class="add-form" />
        <EditTransactionForm v-if="editingTransaction" :transaction="editingTransaction" @update="updateTransaction" @cancel="cancelEdit" class="edit-form"/>
    </div>
    <ExportTransactions class="export-button" />
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

<style scoped>
.transaction-list {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.transaction-title {
  color: #34495e;
  text-align: center;
  margin-bottom: 20px;
}

.transaction-items {
  list-style-type: none;
  padding: 0;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ecf0f1;
  padding: 10px 0;
}

.transaction-details {
  flex-grow: 1;
}

.transaction-description {
  font-weight: bold;
}

.transaction-category {
  color: #7f8c8d;
}

.income {
  color: #2ecc71;
}

.expense {
  color: #e74c3c;
}

.transaction-actions {
  display: flex;
  gap: 10px;
}

.action-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.edit {
  background-color: #3498db;
  color: white;
}

.edit:hover {
  background-color: #2980b9;
}

.delete {
  background-color: #e74c3c;
  color: white;
}

.delete:hover {
  background-color: #c0392b;
}

.add-form, .edit-form {
  margin-top: 20px;
}

.export-button {
  margin-top: 20px;
}
</style>