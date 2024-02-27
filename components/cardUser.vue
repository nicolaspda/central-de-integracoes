<template>
  <Card
    style="width: 40rem; overflow: hidden"
    class="mt-2"
  >
    <!--Cabeçalho-->
    <template #header>
      <div class="card flex justify-content-center mb-0 pb-3">
        <SelectButton
          v-model="value"
          :options="options"
          :allowEmpty="false"
        >
        </SelectButton>
      </div>
      <div
        class="h-7rem w-full bg-no-repeat bg-center border-1 border-50 border-left-none border-right-none"
        style="
          background-image: url('https://primefaces.org/cdn/primevue/images/usercard.png');
          width: 400px;
        "
      >
        <div class="flex justify-content-center">
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png"
            class="mr-2 mt-7"
            size="xlarge"
            shape="circle"
          />
        </div>
      </div>
    </template>
    <!--Título-->
    <template
      #title
      v-if="value == 'Perfil'"
      >Fulano de Tal</template
    >
    <!--Subtítulo-->
    <template
      #subtitle
      v-if="value == 'Perfil'"
      >Quente 🔥</template
    >
    <!--Conteúdo-->
    <!--Conteúdo Perfil-->
    <template
      #content
      v-if="value == 'Perfil'"
    >
      <div
        class="card flex justify-content-around gap-3 surface-50 pt-1 shadow-1"
      >
        <div class="h-10rem w-full">
          <h5 class="mt-2 mb-2">Origem</h5>
          Registro manual
          <h5 class="mt-3 mb-2">Estágio</h5>
          Clientes
          <h5 class="mt-3 mb-2">Situação</h5>
          <span>Apto a receber e-mails</span>&nbsp;&nbsp;<span
            v-badge.success
            class="fadein animation-duration-1000 animation-iteration-1"
          ></span>
        </div>
        <Divider
          layout="vertical"
          class="mt-5"
        />
        <div class="h-5rem w-full">
          <h5 class="mt-2 mb-2">Score acumulado</h5>
          80 pontos
          <h5 class="mt-3 mb-2">Score atual</h5>
          50 pontos
        </div>
      </div>
      <h5 class="mt-4 mb-2">Tags</h5>
      <div class="flex flex-wrap gap-1">
        <Chip label="Action" />
        <Chip label="Comedy" />
        <Chip label="Mystery" />
        <Chip label="Thriller" />
      </div>
    </template>
    <!--Conteúdo Dados-->
    <template
      #content="{ slotProps }"
      v-if="value == 'Dados'"
    >
      <div
        class="flex align-items-center justify-content-center flex-wrap gap-3 mb-3 mt-4"
      >
        <label for="idemail">E-mail&nbsp;</label>
        <InputText
          id="idemail"
          v-model="email"
          class="w-30rem"
        >
        </InputText>
        <label for="idemail">E-mail&nbsp;</label>
        <InputText
          id="idemail"
          v-model="email"
          class="w-30rem"
        >
        </InputText>
        <label for="idemail">E-mail&nbsp;</label>
        <InputText
          id="idemail"
          v-model="email"
          class="w-30rem"
        >
        </InputText>
        <label for="idemail">E-mail&nbsp;</label>
        <InputText
          id="idemail"
          v-model="email"
          class="w-30rem"
        >
        </InputText>
      </div>
    </template>
    <!--Conteúdo Histórico-->
    <template
      #content="{ slotProps }"
      v-if="value == 'Histórico'"
    >
      <div
        class="flex align-items-center justify-content-center flex-wrap gap-3 mb-3 mt-4"
      >
        <History />
      </div>
    </template>
    <!--Rodapé-->
    <template #footer>
      <div class="flex gap-3 mt-1 justify-content-end">
        <Button
          label="Cancelar"
          severity="secondary"
          outlined
          class="w-3"
        />
        <Button
          label="Salvar"
          class="w-3"
        />
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      value: "Perfil",
      options: ["Perfil", "Dados", "Histórico"],
    };
  },
};
</script>

<style scoped></style>
