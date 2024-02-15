<template>
  <!--Se disparo pontual não for verdade, mostra escolhas-->
  <div
    class="choice flex flex-wrap gap-3 justify-content-center mt-5 fadein animation-duration-200"
    v-if="!pontualStep"
  >
    <Card
      v-for="(card, key) in cards"
      :key="card"
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
  <!--Se disparo pontual for verdade, mostra os passos-->
  <div
    v-if="pontualStep"
    class="card border-1 border-200 fadein animation-duration-200"
  >
    <div class="card">
      <div class="title mb-3 w-max">
        <Inplace :closable="true" class="text-2xl">
          <template #display>
            {{ text || "Nome do envio" }} <i class="ml-1 pi pi-pencil" />
          </template>
          <template #content>
            <InputText v-model="text" />
          </template>
          <template #closeicon>
            <i class="pi pi-check"></i>
          </template>
        </Inplace>
      </div>
      <Accordion expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
        <!--Público-->
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar icon="pi pi-users" shape="circle" class="bg-blue-100" />
              <span class="font-bold white-space-nowrap">Público</span>
              <Avatar
                icon="pi pi-exclamation-triangle"
                shape="circle"
                class="ml-auto mr-2 bg-orange-400 text-white"
              ></Avatar>
            </span>
          </template>
          <!-- Refatorar componentizando-->
          <div class="mt-1 flex flex-wrap">
            <label for="audience">Quem receberá este envio?</label>
            <InputGroup class="gap-2 flex align-items-center pt-2">
              <Dropdown
                :options="[
                  'Todos os contatos',
                  'Tags específicas',
                  'Contatos em um Filtro',
                  'Contatos na temperatura',
                ]"
                placeholder="Selecione"
                v-model="selectedAudience"
                class="w-full mt-2"
                id="audience"
              ></Dropdown>
              <Button rounded icon="pi pi-plus"></Button>
            </InputGroup>
          </div>
          <div class="mt-3 flex flex-wrap">
            <Tags
              class="toSend"
              v-if="selectedAudience === 'Tags específicas'"
            ></Tags>
            <!-- Adicionar um componente de seleção de filtro/temperatura/etc-->
            <div class="mt-3">
              <Checkbox v-model="checked" :binary="true" />
              &nbsp; <Strong>Não enviar </Strong> para um grupo específico de
              contatos
              <Tags class="notToSend mt-3" v-if="checked"></Tags>
            </div>
          </div>
        </AccordionTab>
        <!--Remetente-->
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar icon="pi pi-at" shape="circle" class="bg-blue-100" />
              <span class="font-bold white-space-nowrap">Remetente</span>
              <Avatar
                icon="pi pi-check"
                shape="circle"
                class="ml-auto mr-2 bg-green-600 text-white"
              ></Avatar>
            </span>
          </template>
          <div class="flex justify-content-between">
            <div class="flex flex-column gap-2">
              <label for="senderEmail">E-mail do remetente</label>
              <InputText
                id="senderEmail"
                v-model="senderEmail"
                aria-describedby="sender"
              />
              <small id="sender">Ex: contato@seudominio.com.br </small>
              <label for="senderName" class="mt-4">Nome do remetente</label>
              <InputText
                id="senderName"
                v-model="senderName"
                aria-describedby="sender"
              />
              <small id="sender"
                >Como você se identifica quando para quando o e-mail chegar na
                inbox do usuário.</small
              >
            </div>
            <Divider layout="vertical" class="w-min" />
            <div
              style="
                background-image: url('https://dl.dnzdns.com/v/MihH57ABF0410');
                width: 400px;
              "
              class="h-20rem bg-cover bg-no-repeat bg-center"
            >
              <div class="mt-8 ml-5">
                <p class="text-2xl pl-1 pt-2 mt-2 mb-0">
                  <strong>{{ senderName }}</strong>
                </p>
                <p class="pl-1 mb-1 mt-0">
                  <strong>{{ subject }}</strong>
                </p>
                <p class="pl-1 mt-1 text-sm">{{ preHeader }}</p>
                <div class="flex justify-content-end pr-6 ml-2">
                  <i class="pi pi-star" />
                </div>
                <Divider></Divider>
              </div>
            </div>
          </div>
        </AccordionTab>
        <!--Assunto-->
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar icon="pi pi-comment" shape="circle" class="bg-blue-100" />
              <span class="font-bold white-space-nowrap">Assunto</span>
              <Avatar
                icon="pi pi-exclamation-triangle"
                shape="circle"
                class="ml-auto mr-2 bg-orange-400 text-white"
              ></Avatar>
            </span>
          </template>
          <div class="flex justify-content-between">
            <div class="flex flex-column gap-2">
              <label for="subject">Assunto</label>
              <InputGroup>
                <InputText
                  id="subject"
                  v-model="subject"
                  aria-describedby="subject"
                />
                <Button icon="pi pi-discord" v-tooltip.top="'Emoji'" />
              </InputGroup>
              <label for="preheader">Pré-Header</label>
              <InputText
                id="preheader"
                v-model="preHeader"
                aria-describedby="preheader"
              />
              <small id="pre"
                >O pré-header é um texto que aparecerá durante a visualização da
                mensagem na inbox.</small
              >
              <div>
                <p>
                  Não sabe como iniciar o assunto? <br />
                  Experimente sugestões mágicas com IA!
                </p>
                <SubjectGenerator></SubjectGenerator>
              </div>
            </div>
            <Divider layout="vertical" class="w-min" />
            <div
              style="
                background-image: url('https://dl.dnzdns.com/v/MihH57ABF0410');
                width: 400px;
              "
              class="h-20rem bg-cover bg-no-repeat bg-center"
            >
              <div class="mt-8 ml-5">
                <p class="text-2xl pl-1 pt-2 mt-2 mb-0">
                  <strong>{{ senderName }}</strong>
                </p>
                <p class="pl-1 mb-1 mt-0">
                  <strong>{{ subject }}</strong>
                </p>
                <p class="pl-1 mt-1 text-sm">{{ preHeader }}</p>
                <div class="flex justify-content-end pr-6 ml-2">
                  <i class="pi pi-star" />
                </div>
                <Divider></Divider>
              </div>
            </div>
          </div>
        </AccordionTab>
        <!--Conteúdo-->
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar
                icon="pi pi-th-large"
                shape="circle"
                class="bg-blue-100"
              />
              <span class="font-bold white-space-nowrap">Conteúdo</span>
              <Avatar
                icon="pi pi-check"
                shape="circle"
                class="ml-auto mr-2 bg-green-600 text-white"
              ></Avatar>
            </span>
          </template>
          <div class="card">
            <!-- Tab Editores cardsEditor -->
            <TabView>
              <TabPanel header="Criar com">
                <div class="flex flex-wrap gap-3 justify-content-center mt-2">
                  <Card
                    v-for="(card, key) in cardsEditor"
                    :key="card"
                    style="
                      width: 18rem;
                      height: 22rem;
                      overflow: hidden;
                      transition: all 0.5s ease;
                    "
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
                        <Button :label="card.label" class="w-full" />
                      </div>
                    </template>
                  </Card>
                </div>
              </TabPanel>
              <!-- Tab Outras opções cardOptions -->
              <TabPanel header="Outras opções">
                <div class="flex flex-wrap gap-3 justify-content-center mt-2">
                  <Card
                    v-for="(card, key) in cardOptions"
                    :key="card"
                    style="
                      width: 18rem;
                      height: 23rem;
                      overflow: hidden;
                      transition: all 0.5s ease;
                    "
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
                        <Button :label="card.label" class="w-full" />
                      </div>
                    </template>
                  </Card>
                </div>
              </TabPanel>
            </TabView>
          </div>
        </AccordionTab>
        <!--Agendamento-->
        <AccordionTab>
          <template #header>
            <span class="flex align-items-center gap-2 w-full">
              <Avatar
                icon="pi pi-calendar-plus"
                shape="circle"
                class="bg-blue-100"
              />
              <span class="font-bold white-space-nowrap">Agendamento</span>
              <Avatar
                icon="pi pi-check"
                shape="circle"
                class="ml-auto mr-2 bg-green-600 text-white"
              ></Avatar>
            </span>
          </template>
          <div class="card flex justify-content-center">
            <Checkbox v-model="checkedGA" :binary="true" />
            Enviar dados ao Google Analytics?
          </div>
          <div class="card flex justify-content-center mt-2">
            <div class="validations w-full">
              <p class="m-0">Validações e preparo do envio:</p>
              SPF, CNAME, DKIM, DMARC
            </div>
            <div class="schedule w-full">
              <p class="m-0">Agendamento</p>
              <Calendar v-model="date" showButtonBar />
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedGA: true,
      date: null,
      generator: false,
      subject: "Assunto",
      preHeader: "Texto Pré-Header inicial",
      senderEmail: "",
      senderName: "Minha empresa",
      checked: false,
      selectedAudience: "Todos os contatos",
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
            "flex align-items-center justify-content-center pi pi-send pb-8 pt-8 bg-blue-100 text-6xl",
        },
        {
          title: "Teste A/B",
          subtitle: "Início",
          description:
            "Realize testes em diferentes circunstâncias para descobrir qual email se adapta melhor a sua base.",
          label: "Criar Teste A/B",
          classe:
            "flex align-items-center justify-content-center pi pi-copy pb-8 pt-8 bg-indigo-100 text-6xl",
        },
        {
          title: "Fluxo de Automação",
          subtitle: "Início",
          description:
            "Planeje disparos pontuais aos contatos que realizarem determinadas ações ou possuírem determinados comportamentos.",
          label: "Criar Fluxo de automação",
          classe:
            "flex align-items-center justify-content-center pi pi-forward pb-8 pt-8 bg-cyan-100 text-6xl",
        },
      ],
      cardsEditor: [
        {
          title: "Editor em branco",
          subtitle: "Editor de Texto com HTML",
          description: "Edidor com recursos de texto e edição de código-fonte.",
          label: "Selecionar",
          image:
            "https://cdn.pixabay.com/photo/2016/06/04/14/56/icon-1435687_960_720.png",
          classe:
            "flex align-items-center justify-content-center pi pi-file-word pb-5 pt-5 bg-blue-100 text-6xl",
        },
        {
          title: "Editor clássico",
          subtitle: "Drag and Drop",
          description: "Edidor com recursos simples de arrastar e soltar.",
          label: "Selecionar",
          image:
            "https://cdn.pixabay.com/photo/2016/06/04/14/56/icon-1435687_960_720.png",
          classe:
            "flex align-items-center justify-content-center pi pi-table pb-5 pt-5 bg-indigo-100 text-6xl",
        },
        {
          title: "Dinamize Builder",
          subtitle: "Drag and Drop",
          description: "Novo editor com recursos avançados.",
          label: "Selecionar",
          classe:
            "flex align-items-center justify-content-center pi pi-th-large pb-5 pt-5 bg-cyan-100 text-6xl",
        },
      ],
      cardOptions: [
        {
          title: "A partir de um modelo",
          subtitle: "Template prévio",
          description:
            "Utilize um dos modelos salvos em sua galeria de templates.",
          label: "Selecionar",
          classe:
            "flex align-items-center justify-content-center pi pi-palette pb-5 pt-5 bg-blue-100 text-6xl",
        },
        {
          title: "Upload de arquivo HTML",
          subtitle: "HTML",
          description:
            "Escolha um arquivo HTML salvo em seu computador e realize alterações.",
          label: "Selecionar",
          classe:
            "flex align-items-center justify-content-center pi pi-code pb-5 pt-5 bg-indigo-100 text-6xl",
        },
        {
          title: "Upload de arquivo ZIP",
          subtitle: "Arquivo compactado",
          description:
            "Faça upload de um zip contendo o HTML na raíz e uma pasta com as imagens.",
          label: "Selecionar",
          classe:
            "flex align-items-center justify-content-center pi pi-box pb-5 pt-5 bg-cyan-100 text-6xl",
        },
        {
          title: "A partir de uma URL",
          subtitle: "URL",
          description:
            "No momento do envio, vamos avaliar a URL utilizada e disparar seu conteúdo.",
          label: "Selecionar",
          classe:
            "flex align-items-center justify-content-center pi pi-cloud pb-5 pt-5 bg-purple-100 text-6xl",
        },
        {
          title: "Copiar o conteúdo de uma URL",
          subtitle: "URL",
          description: "Copie o conteúdo de uma URL e realize as alterações.",
          label: "Selecionar",
          classe:
            "flex align-items-center justify-content-center pi pi-cloud-download pb-5 pt-5 bg-pink-100 text-6xl",
        },
        {
          title: "A partir de um envio anterior",
          subtitle: "Template prévio",
          description: "Conteúdo de uma mensagem já disparada previamente.",
          label: "Selecionar",
          classe:
            "flex align-items-center justify-content-center pi pi-replay pb-5 pt-5 bg-red-100 text-6xl",
        },
      ],
    };
  },
};
</script>

<style></style>
