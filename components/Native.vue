<template>
  <div class="card flex justify-content-center">
    <FloatLabel>
      <InputText id="platforms" v-model="platform" />
      <label for="platforms">Pesquise sua plataforma</label>
    </FloatLabel>
  </div>

  <div class="flex justify-content-center gap-3 flex-wrap">
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
          <img :src="card.img" :alt="card.name" />
        </div>
      </template>
      <template #footer>
        <div class="flex justify-content-center gap-3 mt-1">
          <Button label="Integrar" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      platform: "",
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
      ],
    };
  },
  computed: {
    filterCards: function () {
      const regex = new RegExp(this.platform, "i");
      return this.cards.filter((card) => regex.test(card.name));
    },
  },
};
</script>
