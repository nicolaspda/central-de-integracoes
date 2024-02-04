<template>
  <TabView>
    <TabPanel header="Quero Integrar ">
      <h3>Através do método:</h3>
      <!-- Primeira Integração - Webhook -->
      <Panel toggleable>
        <template #header>
          <div class="flex align-items-center gap-2">
            <Avatar
              image="https://cdn-icons-png.flaticon.com/128/11896/11896341.png"
              shape="circle"
            />
            <span class="font-bold"
              >Integração Instantânea - (Evento de webhook)</span
            >
          </div>
        </template>
        <!-- Passo 1 -->
        <div v-if="step1">
          <div class="flex flex-column md:flex-row">
            <div
              class="w-full md:w-5 flex flex-column align-items-left justify-content-center gap-3 py-5"
            >
              <!-- Primeiro componente -->
              Conecte o sistema:
              <Dropdown
                v-model="selectedPlatform"
                :options="systems"
                optionLabel="platform"
                placeholder="Selecione um sistema"
                class="w-full md:w-25rem"
                @change="Add"
              >
                <!-- Valor da opção selecionada -->
                <template #value="{ value }">
                  <div v-if="value" class="flex align-items-center">
                    <img :src="value.img" style="width: 18px" />
                    <div>&nbsp; {{ value.platform }}</div>
                  </div>
                </template>
                <!-- Valor da listagem -->
                <template #option="{ option }">
                  <div class="flex align-items-center">
                    <img :src="option.img" style="width: 18px" />
                    <div>&nbsp; {{ option.platform }}</div>
                  </div>
                </template>
              </Dropdown>
              <br />
              <!-- Segundo componente -->
              Quando isso acontecer...
              <Dropdown
                v-model="selectedEvent"
                :options="tempPlatform"
                optionLabel="evento"
                optionGroupLabel="platform"
                optionGroupChildren="events"
                placeholder="Selecione um evento"
                class="w-full md:w-25rem"
                emptyMessage="Selecione uma plataforma"
              >
                <!-- Valor do título do grupo -->
                <template #optiongroup="slotProps">
                  <div class="flex align-items-center">
                    <img :src="slotProps.option.img" style="width: 18px" />
                    <div>&nbsp; {{ slotProps.option.platform }}</div>
                  </div>
                </template>
              </Dropdown>
            </div>
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
            <div
              class="w-full md:w-5 flex flex-column align-items-left justify-content-center gap-3 py-5"
            >
              <!-- Quarto componente -->
              Com a Dinamize:
              <Dropdown
                disabled
                placeholder="Dinamize"
                class="w-full md:w-25rem"
              >
                <template #value>
                  <img
                    src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/4067564985/original/60x2t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS6FNSMY2XLZULJPI%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240201T115959Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a14f50c852745d95b84bebc8ee231d68473497fbc7333b7f64be21be0efaea31"
                    style="width: 16px"
                  />
                  &nbsp; Dinamize
                </template>
              </Dropdown>
              <br />
              <!-- Quinto componente -->
              Faça isso:
              <Dropdown
                placeholder="Dinamize"
                class="w-full md:w-25rem"
                emptyMessage="Não há mais opções disponíveis"
              >
                <template #value>
                  <img
                    src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/4067564985/original/60x2t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS6FNSMY2XLZULJPI%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240201T115959Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a14f50c852745d95b84bebc8ee231d68473497fbc7333b7f64be21be0efaea31"
                    style="width: 16px"
                  />
                  &nbsp; Cadastrar contato
                </template>
              </Dropdown>
            </div>
          </div>
          <!-- Ícones de conexão -->
          <div
            class="flex justify-content-center align-items-center flex-wrap gap-3 mt-4"
          >
            <Avatar :image="selectedPlatform.img" class="mr-1" size="xlarge" />
            <i class="pi pi-plus" style="font-size: 1rem"></i>
            <Avatar
              image="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/4067564985/original/60x2t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS6FNSMY2XLZULJPI%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240201T115959Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a14f50c852745d95b84bebc8ee231d68473497fbc7333b7f64be21be0efaea31"
              class="mr-2"
              size="xlarge"
            />
          </div>
          <!-- Botão e warning -->
          <div class="flex justify-content-center mt-4">
            <Button @click="Step2">Criar Intergração</Button>
          </div>
          <Toast></Toast>
        </div>
        <!-- Passo 2 -->
        <div v-if="step2">
          <div class="fadein animation-duration-200">
            <div class="flex justify-content-center pt-0">
              <Breadcrumb :home="home" :model="bread">
                <template #item="{ item, props }">
                  <a @click="Navigate(item)">
                    <span :class="[item.icon, 'text-color']" />
                    <span
                      class="text-primary font-semibold hover:underline cursor-pointer"
                      >{{ item.label }}
                    </span>
                  </a>
                </template>
              </Breadcrumb>
            </div>
            <Fieldset>
              <template #legend>
                <div class="flex align-items-center">
                  <Avatar shape="circle">1</Avatar>
                  <span class="font-bold pl-2">Passo</span>
                </div>
              </template>
              Escolha os campos que deseja integrar:
              <!-- Primeiro componente -->
              <div class="card flex justify-content-center">
                <MultiSelect
                  v-model="selectedFields"
                  display="chip"
                  :options="dinaFields"
                  optionLabel="name"
                  placeholder="Campos da Dinamize"
                  :maxSelectedLabels="5"
                  class="w-full"
                  @change="AddRow"
                />
              </div>
            </Fieldset>
            <Fieldset class="mt-5">
              <template #legend>
                <div class="flex align-items-center">
                  <Avatar shape="circle">2</Avatar>
                  <span class="font-bold pl-2">Passo</span>
                </div>
              </template>
              Relacione-os com os dados de {{ selectedPlatform.platform }}:
              <!-- Segundo componente -->
              <DataTable rowHover class="mt-3" :value="selectedFields">
                <Column field="dinaField" header="Campo da Dinamize">
                  <template #body="slotProps">
                    {{
                      slotProps.data.type == "Texto Simples"
                        ? "🗒️"
                        : slotProps.data.type == "E-mail"
                        ? "✉️"
                        : slotProps.data.type == "LVM"
                        ? "📚"
                        : slotProps.data.type == "LVU"
                        ? "📗"
                        : slotProps.data.type == "Data"
                        ? "📅"
                        : slotProps.data.type == "Telefone"
                        ? "📞"
                        : ""
                    }}
                    {{ slotProps.data.name }}
                  </template>
                </Column>
                <Column field="connect" class="text-left">
                  <template #body="connect">
                    <i class="pi pi-arrows-h" style="font-size: 16px"></i>
                  </template>
                </Column>
                <Column
                  field="tparty"
                  :header="'Campo de' + ' ' + selectedPlatform.platform"
                >
                  <template #body="select">
                    <AutoComplete
                      v-model="select.data.searchValue"
                      :suggestions="webFields"
                      @complete="search"
                      dropdown
                      placeholder="Campos disponíveis"
                    />
                  </template>
                </Column>
              </DataTable>
            </Fieldset>
          </div>
          <!-- Botão de Prosseguir //Testar se campos foram selecionados -->
          <div class="flex justify-content-end">
            <Button
              class="mt-4"
              severity="primary"
              aria-label="Next"
              label="Prosseguir"
              icon="pi pi-chevron-circle-right"
              @click="Step3"
            />
          </div>
        </div>
        <!-- Passo 3 -->
        <div v-if="step3">
          <div class="card fadein animation-duration-200">
            <Fieldset>
              <template #legend>
                <div class="flex align-items-center">
                  <Avatar shape="circle">3</Avatar>
                  <span class="font-bold pl-2">Passo</span>
                </div>
              </template>
              <!-- Primeiro componente -->
              <label for="webhookName">
                Dê um nome para esta integração:
              </label>
              <div class="flex flex-wrap justify-content-left gap-3 mt-3">
                <InputText id="webhookName" v-model="valor" class="w-9" />
                <Button
                  severity="primary"
                  aria-label="Next"
                  label="Gerar URL"
                  icon="pi pi-chevron-circle-right"
                  @click="generate"
                />
              </div>
            </Fieldset>
          </div>
        </div>
      </Panel>
    </TabPanel>
    <TabPanel header="Integrações Ativas"> Conteudo </TabPanel>
  </TabView>
  <!-- Segunda Integração - Nativa -->
</template>

<script>
export default {
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
      webFields: [],
      searchValue: "",
      selectedFields: null,
      selectedPlatform: "",
      selectedEvent: "",
      tempPlatform: [],
      step1: true,
      step2: false,
      step3: false,
      dinaFields: [
        { name: "Nome", type: "Texto Simples" },
        { name: "E-mail", type: "E-mail" },
        { name: "Categorias", type: "LVM" },
        { name: "Cidade", type: "Texto Simples" },
        { name: "Estado", type: "LVU" },
        { name: "Telefone", type: "Telefone" },
        { name: "Aniversário", type: "Data" },
      ],
      systems: [
        {
          platform: "VTEX",
          img: "https://albato.com/strapi/uploads/logo_app_vtex_bd66d73eee.png",
          events: [
            { evento: "Pedido criado" },
            { evento: "Contato criado" },
            { evento: "Contato removido" },
            { evento: "Pedido cancelado" },
            { evento: "Pedido em transporte" },
          ],
        },
        {
          platform: "NuvemShop",
          img: "https://conectenvios.com.br/wp-content/uploads/2023/03/cropped-nuvemshop_logo.png",
          events: [
            { evento: "Pedido criado" },
            { evento: "Contato criado" },
            { evento: "Pedido cancelado" },
            { evento: "Pedido em transporte" },
          ],
        },
      ],
    };
  },
  methods: {
    //Seleciona a plataforma
    Add() {
      this.tempPlatform = [];
      this.tempPlatform.push(this.selectedPlatform);
    },
    //Manda para o passo 1 quando clica no botão "Voltar"
    Step1() {
      this.step1 = true;
      this.step2 = false;
    },
    //Manda para o passo 2 quando clica no botão "Criar Integração"
    Step2() {
      //Testa se uma plataforma foi selecionada ou se o evento foi selecionado
      if (this.selectedPlatform == "" || this.selectedEvent == "") {
        this.$toast.add({
          severity: "warn",
          summary: "Selecione uma plataforma",
          detail:
            "Uma plataforma e um evento devem ser selecionados para prosseguir",
          life: 4000,
        });
      } else {
        this.step1 = false;
        this.step2 = true;
      }
    },
    Step3() {
      this.step1 = false;
      this.step2 = false;
      this.step3 = true;
    },
    Navigate(item) {
      if (item.action == "Step1") {
        this.Step1();
      } else if (item.action == "Step2") {
        this.Step2();
      } else if (item.action == "Step3") {
        this.Step3();
      }
    },
    //Faz a busca do autocomplete no passo de escolher os dados do Webhook"
    search(event) {
      this.webFields = [
        "web.nome",
        "web.email",
        "web.telefone",
        "web.cate",
        "web.cates",
        "web.sobrenome",
        "web.cidade",
        "web.aniver",
      ];
      this.webFields = event.query
        ? this.webFields.filter((item) =>
            item.toLowerCase().includes(event.query.toLowerCase())
          )
        : this.webFields;
    },
  },
};
</script>
<style scoped></style>
