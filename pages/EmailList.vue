<template>
  <Menu />
  <div class="card">
    <!-- Título -->
    <h2>
      <i class="pi pi-send">&nbsp;</i><span class="text-primary">Criar</span>
      E-mail
    </h2>
    <!-- Componente da lista de envios -->
    <SendTable
      @sendEmail="show = false"
      v-if="show"
    />
    <div v-else>
      <EmailCompose />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
