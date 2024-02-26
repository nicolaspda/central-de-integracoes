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
        style="
          background-image: url('https://primefaces.org/cdn/primevue/images/usercard.png');
          width: 400px;
        "
        class="h-7rem w-full bg-no-repeat bg-center border-round border-1 border-300"
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
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque qu
      </p>
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
