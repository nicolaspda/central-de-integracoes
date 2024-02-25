<template>
  <div class="card ml-6 mr-6">
    <TabView>
      <TabPanel header="Dados de compra">
        <div class="fadein animation-duration-200">
          <p class="m-1">
            Se o seu site contém um e-commerce você pode
            <strong> monitorar as atividades de interesse</strong> e
            <strong>compras de produtos</strong>. Após habilitar essa opção você
            estará apto a configurar automações de envio de e-mail específicas
            para e-commerce ou definir o que fazer em cada uma das situações.
          </p>
        </div>
        <div class="field-radiobutton mt-4">
          <RadioButton
            v-model="buyMonitor"
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
            v-model="buyMonitor"
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
      </TabPanel>
      <TabPanel header="Envios de e-mail">
        <div class="fadein animation-duration-200">teste2</div>
      </TabPanel>
      <Toast />
    </TabView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyMonitor: "Não",
    };
  },
  methods: {
    showMessage() {
      if (this.buyMonitor == "Sim") {
        this.$toast.add({
          severity: "success",
          summary: "Monitoramento habilitado",
          detail: "O rastreio de dados de e-commerce está ativo.",
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "warn",
          summary: "Monitoramento desabilitado",
          detail: "O rastreio de dados de e-commerce não está ativo.",
          life: 3000,
        });
      }
    },
  },
};
</script>
