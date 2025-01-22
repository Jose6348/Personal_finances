<template>
    <button @click="exportData">Exportar Transações</button>
  </template>
  
  <script>
  import { saveAs } from 'file-saver';
  
  export default {
    name: 'ExportTransactions',
    methods: {
      exportData() {
        const transactions = this.$store.state.transactions;
        if (transactions && transactions.length > 0) {
          const csvContent = this.convertToCSV(transactions);
          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
          saveAs(blob, 'transações.csv');
        } else {
          alert('Nenhuma transação para exportar.');
        }
      },
      convertToCSV(arr) {
        // Verifica se arr é válido antes de continuar
        if (!arr || arr.length === 0) return '';
  
        const array = [Object.keys(arr[0])].concat(arr);
        return array.map(it => {
          return Object.values(it).map(value => {
            // Escapa aspas dentro de strings para evitar problemas no CSV
            return `"${String(value).replace(/"/g, '""')}"`;
          }).join(',');
        }).join('\n');
      }
    }
  };
  </script>