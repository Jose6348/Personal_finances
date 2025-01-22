<template>
    <div class="notification" :class="notificationType === 'success' ? 'success' : 'error'">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    name: 'TransactionNotification',
    props: {
      notificationType: {
        type: String,
        default: 'success'
      },
      message: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .notification {
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    color: white;
  }
  
  .success {
    background-color: #4CAF50;
  }
  
  .error {
    background-color: #F44336;
  }
  </style>