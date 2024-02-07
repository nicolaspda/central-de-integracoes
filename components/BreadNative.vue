<template>
  <Breadcrumb :home="home" :model="bread">
    <template #item="{ item }">
      <a
        v-if="selectedStep == item.action"
        @click="Navigate(item)"
        class="hover:underline cursor-pointer"
      >
        <span :class="[item.icon, 'text-color']" />
        <span class="text-primary font-semibold">{{ item.label }} </span>
      </a>
      <a v-else @click="Navigate(item)" class="hover:underline cursor-pointer">
        <span :class="[item.icon, 'text-color']" />
        <span class="text-color font-semibold">{{ item.label }} </span>
      </a>
    </template>
  </Breadcrumb>
</template>

<script>
export default {
  props: { selectedStep: String },
  data() {
    return {
      home: {
        icon: "pi pi-home",
        action: "Step1",
      },
      bread: [
        { label: "Campos", action: "Step2" },
        { label: "Gerar URL", action: "Step3" },
      ],
    };
  },
  methods: {
    //Navegação do Breadcrumb
    Navigate(item) {
      if (item.action == "Step1") {
        this.Step1();
      } else if (item.action == "Step2") {
        this.Step2();
      } else if (item.action == "Step3") {
        this.Step3();
      }
    },
    //Manda para o passo 1 quando clica no botão "Home"
    Step1() {
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.selectedStep = "Step1";
    },
    //Manda para o passo 2 quando clica no botão "X"
    Step2() {
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.selectedStep = "Step2";
    },
    //Manda para o passo 3 quando clica no botão "Y"
    Step3() {
      this.step1 = false;
      this.step2 = false;
      this.step3 = true;
      this.selectedStep = "Step3";
    },
  },
};
</script>

<style scoped></style>
