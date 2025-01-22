<template>
  <footer class="app-footer">
    <p class="footer-text">© 2025 Gerenciador de Finanças Pessoais</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  background-color: #34495e;
  color: white;
  padding: 15px 0;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

.footer-text {
  margin: 0;
  font-size: 14px;
}
</style>