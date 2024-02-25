<template>
  <p class="m-1">
    É possível criar um formulário para incluir diretamente
    <strong> no seu site </strong> ou na
    <strong>ferramenta de criação </strong> correspondente. Todo cadastro
    efetuado será adicionado na plataforma da Dinamize.
  </p>
  <div class="card">
    <Carousel
      :value="forms"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div
          class="border-1 surface-border border-round m-2 p-3 shadow-1 hover:shadow-4 transition-all transition-duration-400"
        >
          <div class="mb-3">
            <div class="relative mx-auto flex justify-content-center">
              <img
                :src="slotProps.data.image"
                :alt="slotProps.data.name"
                class="border-round h-5rem"
              />
            </div>
            <Divider />
          </div>
          <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-content-between align-items-center">
            <div class="mt-0 text-sm">
              {{ slotProps.data.description }}
            </div>
          </div>
          <span class="flex justify-content-center mt-4">
            <Button class="w-full ml-2 justify-content-center">Criar </Button>
          </span>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: [
        {
          name: "Formulário para site",
          description: "Código HTML contendo o formulário.",
          image: "https://dl.dnzdns.com/v/ycVJ5bABF0487",
        },
        {
          name: "WordPress",
          description: "Código único para incluir no WordPress.",
          image:
            "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
        },
        {
          name: "Facebook Leads",
          description: "Conexão com o Facebook Leads.",
          image:
            "https://www.cleverreach.com/wp-content/uploads/2022/06/cleverreach-integration-facebook-lead-ads-logo.png",
        },
        {
          name: "Facebook",
          description: "Formulário para adicionar no Facebook.",
          image:
            "https://www.dinamize.com.br/wp-content/uploads/elementor/thumbs/Facebook-pfv0510l0ztq1a142kdm82s8fzo0n12sjbqakb9vxk.png",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "767px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
};
</script>
