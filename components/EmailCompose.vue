<template>
  <div
    class="choice flex flex-wrap gap-3 justify-content-center mt-5 fadein animation-duration-200"
    v-if="!pontualStep"
  >
    <Card
      v-for="(card, key) in cards"
      :key="key"
      style="width: 25rem; overflow: hidden; transition: all 0.5s ease"
      class="shadow-1 hover:shadow-4"
    >
      <template #header>
        <!--<img alt="user header" style="width: 360px" :src="card.image" />-->
        <i :class="card.classe"></i>
      </template>
      <template #title>{{ card.title }}</template>
      <template #subtitle>{{ card.subtitle }}</template>
      <template #content>
        <p class="m-0">
          {{ card.description }}
        </p>
      </template>
      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button
            :label="card.label"
            class="w-full"
            @click="pontualStep = true"
          />
        </div>
      </template>
    </Card>
  </div>
  <div
    v-if="pontualStep"
    class="card border-1 border-200 fadein animation-duration-200"
  >
    <div class="card">
      <div class="title mb-3 w-max">
        <Inplace :closable="true" class="text-2xl">
          <template #display>
            {{ text || "Nome do envio" }}
          </template>
          <template #content>
            <InputText v-model="text" />
          </template>
          <template #closeicon>
            <i class="pi pi-check"></i>
          </template>
        </Inplace>
      </div>
      <Accordion
        :activeIndex="0"
        expandIcon="pi pi-plus"
        collapseIcon="pi pi-minus"
      >
        <!--Público-->
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar icon="pi pi-users" shape="circle" class="bg-blue-100" />
              <span class="font-bold white-space-nowrap">Público</span>
              <Avatar
                icon="pi pi-check"
                shape="circle"
                class="ml-auto mr-2 bg-green-600 text-white"
              ></Avatar>
            </span>
          </template>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <!--Remetente-->
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar icon="pi pi-users" shape="circle" class="bg-blue-100" />
              <span class="font-bold white-space-nowrap">Público</span>
              <Avatar
                icon="pi pi-check"
                shape="circle"
                class="ml-auto mr-2 bg-green-600 text-white"
              ></Avatar>
            </span>
          </template>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <!--Público-->
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar icon="pi pi-users" shape="circle" class="bg-blue-100" />
              <span class="font-bold white-space-nowrap">Público</span>
              <Avatar
                icon="pi pi-check"
                shape="circle"
                class="ml-auto mr-2 bg-green-600 text-white"
              ></Avatar>
            </span>
          </template>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar icon="pi pi-users" shape="circle" class="bg-blue-100" />
              <span class="font-bold white-space-nowrap">Público</span>
              <Avatar
                icon="pi pi-check"
                shape="circle"
                class="ml-auto mr-2 bg-green-600 text-white"
              ></Avatar>
            </span>
          </template>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar icon="pi pi-users" shape="circle" class="bg-blue-100" />
              <span class="font-bold white-space-nowrap">Público</span>
              <Avatar
                icon="pi pi-check"
                shape="circle"
                class="ml-auto mr-2 bg-green-600 text-white"
              ></Avatar>
            </span>
          </template>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      pontualStep: false,
      cards: [
        {
          title: "Envio Pontual",
          subtitle: "Início",
          description:
            "Envio comum direcionado a um público específico. Você pode agendá-lo ou realizar o disparo no mesmo instante.",
          label: "Criar Envio pontual",
          image:
            "https://cdn.pixabay.com/photo/2016/06/04/14/56/icon-1435687_960_720.png",
          classe:
            "flex align items-center justify-content-center pi pi-send pb-8 pt-8 bg-blue-100 text-6xl",
        },
        {
          title: "Teste A/B",
          subtitle: "Início",
          description:
            "Realize testes em diferentes circunstâncias para descobrir qual email se adapta melhor a sua base.",
          label: "Criar Teste A/B",
          classe:
            "flex align items-center justify-content-center pi pi-copy pb-8 pt-8 bg-indigo-100 text-6xl",
        },
        {
          title: "Fluxo de Automação",
          subtitle: "Início",
          description:
            "Planeje disparos pontuais aos contatos que realizarem determinadas ações ou possuírem determinados comportamentos.",
          label: "Criar Fluxo de automação",
          classe:
            "flex align items-center justify-content-center pi pi-forward pb-8 pt-8 bg-cyan-100 text-6xl",
        },
      ],
    };
  },
};
</script>
