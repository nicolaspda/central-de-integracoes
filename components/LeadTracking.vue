<template>
  <div class="card ml-6 mr-6">
    <div class="fadein animation-duration-200">
      <p class="m-1">
        Ative este recurso para
        <strong> rastrear a navegação de leads </strong> identificados em seu
        site e criar ações com estes dados estratégicos.
      </p>
    </div>
    <div class="field-radiobutton mt-4">
      <RadioButton
        v-model="leadTracking"
        inputId="Não"
        name="checked"
        value="Não"
        @change="showMessage"
      />
      <label
        for="ingredient1"
        class="ml-2"
        >Não habilitar
      </label>
    </div>
    <div class="field-radiobutton">
      <RadioButton
        v-model="leadTracking"
        inputId="Sim"
        name="checked"
        value="Sim"
        @change="showMessage"
      />
      <label
        for="Sim"
        class="ml-2"
        >Habilitar
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leadTracking: "Não",
    };
  },
  methods: {
    showMessage() {
      if (this.leadTracking == "Sim") {
        this.$toast.add({
          severity: "success",
          summary: "Lead tracking ativado",
          detail: "O rastreio de dados de navegação está ativo.",
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "warn",
          summary: "Lead tracking desativado",
          detail: "O rastreio de dados de navegação não está ativo.",
          life: 3000,
        });
      }
    },
  },
};
</script>
