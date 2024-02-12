<template>
  <!-- Passo 1 -->
  <div v-if="step1">
    <!-- Seleção de plataforma -->
    <div class="card flex justify-content-center">
      <FloatLabel>
        <InputText id="platforms" v-model="searchPlatform" />
        <label for="platforms">Pesquise sua plataforma</label>
      </FloatLabel>
    </div>
    <!-- Cards -->
    <div class="flex justify-content-center gap-3 flex-wrap">
      <transition-group name="fade">
        <Card
          v-for="(card, key) in filterCards"
          :key="key"
          style="width: 18rem; overflow: hidden; transition: all 0.5s ease"
          class="shadow-1 hover:shadow-4"
        >
          <template #title> {{ card.name }}</template>
          <template #subtitle>{{ card.subtitle }}</template>
          <template #content="conteudo">
            <div class="flex justify-content-center">
              <img
                :src="card.img"
                :alt="card.name"
                class="border-round h-5rem"
              />
            </div>
          </template>
          <template #footer>
            <div class="flex justify-content-center gap-3 mt-1">
              <Button label="Integrar" class="w-full" @click="Step2(card)" />
            </div>
          </template>
        </Card>
      </transition-group>
    </div>
  </div>
  <!-- Passo 2 -->
  <div v-if="step2">
    <div class="card fadein animation-duration-200">
      <Fieldset>
        <template #legend>
          <div class="flex align-items-center">
            <Avatar :image="selectedPlatform.img" shape="circle"></Avatar>
            <span class="font-bold pl-2">{{ selectedPlatform.name }}</span>
          </div>
        </template>
        <BreadNative :valor="selectedStep" />
        <Fieldset class="mt-4">
          <template #legend>
            <div class="flex align-items-center">
              <Avatar shape="circle">1º</Avatar>
              <span class="font-bold pl-2">Passo</span>
            </div>
          </template>
          <!-- Aqui será necessário futuramente ter o texto variável da config. da plataforma correspondente -->
          Acesse sua plataforma <strong> {{ selectedPlatform.name }} </strong> e
          resgate as informações necessárias: <br /><br />
          <strong> Nome da Loja, Appkey e AppToken.</strong>
        </Fieldset>
        <Fieldset class="mt-4">
          <template #legend>
            <div class="flex align-items-center">
              <Avatar shape="circle">2º</Avatar>
              <span class="font-bold pl-2">Passo</span>
            </div>
          </template>
          Adicione as informações:
          <!-- Primeiro componente -->
          <div class="flex flex-column gap-2 mt-4 w-full">
            <label for="accountname" class="font-bold">Nome da loja: </label>
            <InputText
              id="accountname"
              v-model="accountname"
              aria-describedby="username-help"
            />
            <label for="appkey" class="font-bold">AppKey</label>
            <InputText
              id="appkey"
              v-model="appkey"
              aria-describedby="username-help"
            />
            <label for="apptoken" class="font-bold">AppToken</label>
            <InputText
              id="apptoken"
              v-model="apptoken"
              aria-describedby="username-help"
            />
          </div>
        </Fieldset>
        <Button label="IR para 3" @click="Step3" class="mt-4" />
      </Fieldset>
    </div>
  </div>
  <!-- Passo 3 -->
  <div v-if="step3"><BreadNative /> PASSO 3</div>
</template>

<script>
export default {
  data() {
    return {
      searchPlatform: "",
      selectedPlatform: null,
      selectedStep: "Step1",
      step1: true,
      step2: false,
      step3: false,
      cards: [
        {
          name: "VTEX",
          subtitle: "E-commerce",
          img: "https://albato.com/strapi/uploads/logo_app_vtex_bd66d73eee.png",
        },
        {
          name: "NuvemShop",
          subtitle: "E-commerce",
          img: "https://conectenvios.com.br/wp-content/uploads/2023/03/cropped-nuvemshop_logo.png",
        },
        {
          name: "Shopify",
          subtitle: "E-commerce",
          img: "https://freelogopng.com/images/all_img/1655836788shopify-icon-png.png",
        },
        {
          name: "Moskit",
          subtitle: "CRM",
          img: "https://segurosnapratica.com/wp-content/uploads/moskit-crm-logo.png",
        },
        {
          name: "Pipedrive",
          subtitle: "CRM",
          img: "https://www.dinamize.com.br/wp-content/uploads/elementor/thumbs/pipedrive-2-pfv059h4qi5axrotp619cindsgibkb0dkhlnvsxcdk.png",
        },
        {
          name: "Piperun",
          subtitle: "CRM",
          img: "https://www.dinamize.com.br/wp-content/uploads/elementor/thumbs/Design-sem-nome-22-pfjtwi8n712zxrso5a4446pq6cbby2esbecja9os14.png",
        },
        {
          name: "WooCommerce",
          subtitle: "E-commerce",
          img: "https://www.dinamize.com.br/wp-content/uploads/2021/12/woocommerce-webhook-150x150.png",
        },
        {
          name: "Facebook",
          subtitle: "Redes Sociais",
          img: "https://www.dinamize.com.br/wp-content/uploads/elementor/thumbs/Facebook-pfv0510l0ztq1a142kdm82s8fzo0n12sjbqakb9vxk.png",
        },
        {
          name: "Loja Integrada",
          subtitle: "E-commerce",
          img: "https://www.dinamize.com.br/wp-content/uploads/elementor/thumbs/loja-integrada-thumb-min-q7mdql7aya62ep4bd3wgyhrvy3gq35qfs94iq6vdns.png",
        },
      ],
    };
  },
  computed: {
    filterCards: function () {
      const regex = new RegExp(this.searchPlatform, "i");
      return this.cards.filter((card) => regex.test(card.name));
    },
  },
  methods: {
    //Manda para o passo 1 quando clica no botão "Home"
    Step1() {
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.selectedStep = "Step1";
    },
    //Manda para o passo 2 quando clica no botão "X"
    Step2(card) {
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.selectedStep = "Step2";
      this.selectedPlatform = card;
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
