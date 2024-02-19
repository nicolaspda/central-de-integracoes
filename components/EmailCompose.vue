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
          <div class="card pt-2">
            <TabView class="tabview-custom">
              <!--1 passo -->
              <TabPanel>
                <template #header>
                  <div class="flex align-items-center gap-2">
                    <Avatar shape="circle">1º</Avatar>
                    <span class="font-bold white-space-nowrap">Validações</span>
                  </div>
                </template>
                <div class="flex justify-content-evenly">
                  <!--Validação -->
                  <div class="validations w-2">
                    <Avatar
                      icon="pi pi-check"
                      class="bg-green-600 text-white"
                      size="normal"
                      shape="circle"
                    />
                    <span class="ml-2">CNAME</span>
                    <Divider></Divider>
                    <Avatar
                      icon="pi pi-check"
                      class="bg-green-600 text-white"
                      size="normal"
                      shape="circle"
                    />
                    <span> SPF</span>
                    <Divider></Divider>
                    <Avatar
                      icon="pi pi-times"
                      class="bg-red-600 text-white"
                      size="normal"
                      shape="circle"
                    />
                    <span class="ml-2">DKIM</span>
                    <Divider></Divider>
                    <Avatar
                      icon="pi pi-times"
                      class="bg-red-600 text-white"
                      size="normal"
                      shape="circle"
                    />
                    <span class="ml-2">DMARC</span>
                  </div>
                  <!--Divisor responsivo-->
                  <div class="w-full md:w-2">
                    <Divider layout="vertical" class="hidden md:flex"
                      ><b>-></b>
                    </Divider>
                    <Divider
                      layout="horizontal"
                      class="flex md:hidden"
                      align="center"
                    >
                      <i class="pi pi-arrow-down" style="font-size: 0.9rem"></i>
                    </Divider>
                  </div>
                  <!--OptOut -->
                  <div class="optOut">
                    <span>Qual será o método de descadastro?</span>
                    <div class="card flex justify-content-start">
                      <div class="flex flex-wrap gap-3 w-min">
                        <div class="flex align-items-center">
                          <RadioButton
                            v-model="checkedOptout"
                            inputId="semConfirmacao"
                            name="semConfirmacao"
                            value="semConfirmacao"
                          />
                          <label for="ingredient1" class="ml-2"
                            >Sem confirmação</label
                          >
                        </div>
                        <div class="flex align-items-center">
                          <RadioButton
                            v-model="checkedOptout"
                            inputId="confirmacao"
                            name="confirmacao"
                            value="confirmacao"
                          />
                          <label for="confirmacao" class="ml-2"
                            >Com comfirmação</label
                          >
                        </div>
                        <div class="flex align-items-center">
                          <RadioButton
                            v-model="checkedOptout"
                            inputId="motivos"
                            name="motivos"
                            value="motivos"
                          />
                          <label for="motivos" class="ml-2">Com motivos</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Divisor responsivo-->
                  <div class="w-full md:w-2">
                    <Divider layout="vertical" class="hidden md:flex"
                      ><b>-></b>
                    </Divider>
                    <Divider
                      layout="horizontal"
                      class="flex md:hidden"
                      align="center"
                    >
                      <i class="pi pi-arrow-down" style="font-size: 0.9rem"></i>
                    </Divider>
                  </div>
                  <!--Velocidade -->
                  <div class="speed flex w-2">Velocidade do envio</div>
                </div>
              </TabPanel>
              <!--2 passo -->
              <TabPanel>
                <template #header>
                  <div class="flex align-items-center gap-2">
                    <Avatar shape="circle">2º</Avatar>
                    <span class="font-bold white-space-nowrap"
                      >Rastreamento e Mídias
                    </span>
                  </div>
                </template>
                <div class="card media">
                  <div class="GA card flex align-items-center p-2">
                    <Avatar
                      icon="pi pi-google"
                      class="mr-2 text-orange-500"
                      size="large"
                      shape="circle"
                    />
                    <Checkbox v-model="checkedGA" :binary="true" />
                    &nbsp;Enviar dados ao Google Analytics
                  </div>

                  <div class="FB card flex align-items-center p-2">
                    <Avatar
                      icon="pi pi-facebook"
                      class="mr-2 text-blue-600"
                      size="large"
                      shape="circle"
                    />
                    <Checkbox v-model="checkedFB" :binary="true" />
                    &nbsp;Postar disparo no Facebook
                  </div>

                  <div class="TW card flex align-items-center p-2">
                    <Avatar
                      icon="pi pi-twitter"
                      class="mr-2 text-blue-400"
                      size="large"
                      shape="circle"
                    />
                    <Checkbox v-model="checkedTW" :binary="true" />
                    &nbsp; Postar disparo no Twitter (X)
                  </div>
                </div>
              </TabPanel>
              <!--3 passo -->
              <TabPanel>
                <template #header>
                  <div class="flex align-items-center gap-2">
                    <Avatar shape="circle">3º</Avatar>
                    <span class="font-bold white-space-nowrap"> Disparo </span>
                  </div>
                </template>
                <div class="flex justify-content-between">
                  <div class="test&schedule flex flex-wrap gap-3">
                    <div class="test">
                      <label for="testEmail"
                        >Teste seu envio antes do disparo oficial
                      </label>
                      <InputGroup class="mt-2">
                        <InputText
                          id="testEmail"
                          type="email"
                          v-model="testEmail"
                          aria-describedby="testEmail"
                          placeholder="seuemail@seudominio.com"
                        />
                        <Button label="Testar envio" class="h-min"></Button>
                      </InputGroup>
                    </div>
                    <div class="choose">
                      <div class="field-radiobutton">
                        <RadioButton
                          v-model="sendType"
                          inputId="sendNow"
                          name="sendNow"
                          value="sendNow"
                        />
                        <label for="sendNow">Quero enviar agora</label>
                      </div>
                      <div class="field-radiobutton">
                        <RadioButton
                          v-model="sendType"
                          inputId="sendLater"
                          name="sendLater"
                          value="sendLater"
                        />
                        <label for="sendLater">Quero agendar</label>
                      </div>
                      <div
                        class="calendar fadein animation-duration-100"
                        v-show="sendType == 'sendLater'"
                      >
                        <label for="buttondisplay" class="block mb-2">
                          Para o dia
                        </label>
                        <Calendar
                          v-model="date"
                          showIcon
                          :showOnFocus="false"
                          inputId="buttondisplay"
                          dateFormat="dd/mm/yy"
                          class="w-24rem"
                        />
                      </div>
                    </div>
                  </div>
                  <!--Divisor-->
                  <Divider layout="vertical" class="w-min" />
                  <div class="flex justify-content-center flex-wrap">
                    <div
                      class="totalAudience lg:w-8 flex justify-content-center"
                    >
                      <h3>
                        Público total:
                        <span class="text-3xl"> 1254 </span>
                      </h3>
                    </div>
                    <div class="audienceProvider">
                      <MeterGroup :value="provider" />
                    </div>
                    <div class="audienceLimit w-7 mt-5">
                      <Checkbox v-model="checkedLimit" :binary="true" />
                      Limitar o público desse disparo?
                    </div>
                    <div class="realSend mt-5">
                      <Button
                        :disabled="sendType == ''"
                        :label="sendType == 'sendLater' ? 'Agendar' : 'Enviar'"
                        :icon="
                          sendType == 'sendLater'
                            ? 'pi pi-calendar'
                            : 'pi pi-send'
                        "
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabView>
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
      sendType: "",
      testEmail: "",
      checkedOptout: "",
      checkedGA: true,
      checkedFB: false,
      checkedTW: false,
      checkedLimit: false,
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
      provider: [
        { label: "Gmail", color: "#34d399", value: 24, icon: "pi pi-google" },
        {
          label: "Hotmail",
          color: "#60a5fa",
          value: 42,
          icon: "pi pi-microsoft",
        },
        {
          label: "Yahoo",
          color: "#c084fc",
          value: 24,
          icon: "pi pi-filter-fill",
        },
        { label: "Outros", color: "#fbbf24", value: 10, icon: "pi pi-at" },
      ],
    };
  },
};
</script>

<style></style>
