<template>
  <Card
    style="width: 40rem; overflow: hidden"
    class="mt-2"
  >
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
        class="h-7rem w-full bg-no-repeat bg-center border-round border-1 border-300"
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
    <template #title>Fulano de Tal</template>
    <template #subtitle>Quente 🔥</template>
    <template #content>
      <div class="flex justify-content-around gap-3">
        <div class="h-5rem w-full bg-cyan-100">TESTE</div>
        <div class="h-5rem w-full bg-cyan-100">TESTE</div>
      </div>
      <h5 class="mt-1 mb-2">Tags</h5>
      <div class="flex flex-wrap gap-1">
        <Chip label="Action" />
        <Chip label="Comedy" />
        <Chip label="Mystery" />
        <Chip label="Thriller" />
      </div>
    </template>
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
      value: "Perfil",
      options: ["Perfil", "Dados", "Histórico"],
    };
  },
};
</script>

<style scoped></style>
