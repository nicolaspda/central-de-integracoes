<template>
  <Menu />
  <div class="card">
    <!-- Título -->
    <h2>
      <i class="pi pi-send">&nbsp;</i><span class="text-primary">Criar</span>
      E-mail
    </h2>
    <p>
      Faça um envio pontual relacionado a um determinado assunto, um teste A/B
      para analisar o comportamento do seu público ou inicie um fluxo de
      automação.
    </p>
    <!-- Componente da lista de envios -->
    <SendTable v-if="show" />
    <div v-else><EmailCompose /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
