<template>
  <!-- Passo 1 -->
  <div v-if="step1">
    <div class="flex flex-column md:flex-row">
      <div
        class="w-full md:w-5 flex flex-column justify-content-center align-items-center gap-3 py-5"
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
            <div
              v-if="value"
              class="flex align-items-center"
            >
              <img
                :src="value.img"
                style="width: 18px"
              />
              <div>&nbsp; {{ value.platform }}</div>
            </div>
          </template>
          <!-- Valor da listagem -->
          <template #option="{ option }">
            <div class="flex align-items-center">
              <img
                :src="option.img"
                style="width: 18px"
              />
              <div>&nbsp; {{ option.platform }}</div>
            </div>
          </template>
        </Dropdown>
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
              <img
                :src="slotProps.option.img"
                style="width: 18px"
              />
              <div>&nbsp; {{ slotProps.option.platform }}</div>
            </div>
          </template>
        </Dropdown>
      </div>
      <div class="w-full md:w-2">
        <Divider
          layout="vertical"
          class="hidden md:flex"
          ><b>-></b>
        </Divider>
        <Divider
          layout="horizontal"
          class="flex md:hidden"
          align="center"
        >
          <i
            class="pi pi-arrow-down"
            style="font-size: 0.9rem"
          ></i>
        </Divider>
      </div>
      <div
        class="w-full md:w-5 flex flex-column justify-content-center align-items-center gap-3 py-5"
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
              src="https://dl.dnzdns.com/v/IvFMc1ABF0473"
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
              src="https://dl.dnzdns.com/v/IvFMc1ABF0473"
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
      <Avatar
        :image="selectedPlatform.img"
        class="mr-1"
        size="xlarge"
      />
      <i
        class="pi pi-plus"
        style="font-size: 1rem"
      ></i>
      <Avatar
        image="https://dl.dnzdns.com/v/IvFMc1ABF0473"
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
    <div class="card fadein animation-duration-200">
      <Breadcrumb
        :home="home"
        :model="bread"
      >
        <template #item="{ item }">
          <a
            v-if="selectedStep == item.action"
            @click="Navigate(item)"
            class="hover:underline cursor-pointer"
          >
            <span :class="[item.icon, 'text-color']" />
            <span class="text-primary font-semibold">{{ item.label }} </span>
          </a>
          <a
            v-else
            @click="Navigate(item)"
            class="hover:underline cursor-pointer"
          >
            <span :class="[item.icon, 'text-color']" />
            <span class="text-color font-semibold">{{ item.label }} </span>
          </a>
        </template>
      </Breadcrumb>
      <Fieldset>
        <template #legend>
          <div class="flex align-items-center">
            <Avatar shape="circle">1º</Avatar>
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
            <Avatar shape="circle">2º</Avatar>
            <span class="font-bold pl-2">Passo</span>
          </div>
        </template>
        Relacione-os com os dados de {{ selectedPlatform.platform }}:
        <!-- Segundo componente -->
        <DataTable
          rowHover
          class="mt-3"
          :value="selectedFields"
        >
          <Column
            field="dinaField"
            header="Campo da Dinamize"
          >
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
          <Column
            field="connect"
            class="text-left"
          >
            <template #body="connect">
              <i
                class="pi pi-arrows-h"
                style="font-size: 16px"
              ></i>
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
                :class="{
                  'p-invalid': missing && !select.data.searchValue,
                }"
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
    <Toast></Toast>
  </div>
  <!-- Passo 3 -->
  <div v-if="step3">
    <div class="card fadein animation-duration-200">
      <Breadcrumb
        :home="home"
        :model="bread"
      >
        <template #item="{ item }">
          <a
            v-if="selectedStep == item.action"
            @click="Navigate(item)"
            class="hover:underline cursor-pointer"
          >
            <span :class="[item.icon, 'text-color']" />
            <span class="text-primary font-semibold">{{ item.label }} </span>
          </a>
          <a
            v-else
            @click="Navigate(item)"
            class="hover:underline cursor-pointer"
          >
            <span :class="[item.icon, 'text-color']" />
            <span class="text-color font-semibold">{{ item.label }} </span>
          </a>
        </template>
      </Breadcrumb>
      <Fieldset>
        <template #legend>
          <div class="flex align-items-center">
            <Avatar shape="circle">3</Avatar>
            <span class="font-bold pl-2">Passo</span>
          </div>
        </template>
        <!-- Primeiro componente -->
        <label for="webhookName"> Dê um nome para esta integração: </label>
        <div class="flex flex-wrap justify-content-left gap-3 mt-3">
          <InputText
            id="webhookName"
            v-model="intName"
            :class="validateUrl ? 'w-9' : 'w-9 p-invalid'"
          />
          <Button
            severity="primary"
            aria-label="Next"
            label="Gerar URL"
            icon="pi pi-chevron-circle-right"
            @click="GenerateURL"
          />
        </div>
      </Fieldset>
      <Fieldset class="mt-5">
        <template #legend>
          <div class="flex align-items-center">
            <Avatar shape="circle">4</Avatar>
            <span class="font-bold pl-2">Passo</span>
          </div>
        </template>
        <!-- Segundo componente -->
        <label for="url">
          Copie a URL gerada, acesse o sistema terceiro e cole-a na área de<i>
            Webhooks
          </i>
          dedicada. Depois, adicione esta integração:
        </label>
        <div class="flex flex-wrap justify-content-left gap-3 mt-3">
          <InputGroup class="w-9">
            <InputText
              id="url"
              disabled
              v-model="urlValue"
            />
            <Button
              icon="pi pi-copy"
              v-tooltip.focus.top="'URL Copiada!'"
              :disabled="enableButtons"
            />
          </InputGroup>
          <Button
            label="Adicionar às Interações"
            :disabled="enableButtons"
            icon="pi pi-plus-circle"
            @click="goIntegrations"
          />
        </div>
      </Fieldset>
    </div>
    <Toast></Toast>
  </div>
</template>

<script>
export default {
  emits: ["sendIntegrations"],
  data() {
    return {
      urlValue: "",
      enableButtons: true,
      validateUrl: true,
      intName: "",
      missing: false,
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
      selectedStep: "",
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
    //Manda para o passo 1 quando clica no botão "Home"
    Step1() {
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.selectedStep = "Step1";
    },
    //Manda para o passo 2 quando clica no botão "Criar Integração"
    Step2() {
      //Testa se uma plataforma foi selecionada ou se o evento foi selecionado
      if (this.selectedPlatform == "" || this.selectedEvent == "") {
        this.$toast.add({
          severity: "warn",
          summary: "Selecione uma plataforma",
          detail:
            "Uma plataforma e um evento devem ser selecionados para prosseguir.",
          life: 4000,
        });
      } else {
        this.step1 = false;
        this.step2 = true;
        this.step3 = false;
        this.selectedStep = "Step2";
        console.log(this.selectedFields);
      }
    },
    Step3() {
      //Testa se os campos da Dinamize foram SELECIONADOS no PASSO 2
      console.log(typeof this.selectedFields);
      if (this.selectedFields == null) {
        this.$toast.add({
          severity: "warn",
          summary: "Você não selecionou nenhum campo!",
          detail: "No passo 1, escolha quais campos deseja integrar.",
          life: 4000,
        });
      }
      //Testa se os campos terceiros foram RELACIONADOS no PASSO 2
      const propriedade = "searchValue";
      if (!this.selectedFields.every((field) => propriedade in field)) {
        console.log(this.selectedFields);
        console.log("Mostra Toast");
        this.missing = true;
      } else {
        this.step1 = false;
        this.step2 = false;
        this.step3 = true;
        this.selectedStep = "Step3";
        this.missing = false;
      }
    },
    //Gerar URL no passo 3
    GenerateURL() {
      if (this.intName != "") {
        this.validateUrl = true;
        this.enableButtons = false;
        this.urlValue = "https://receiver.webhook.dinamize.com/12345";
        this.$toast.add({
          severity: "success",
          summary: "Sucesso",
          detail: "URL gerada com sucesso!",
          life: 4000,
        });
      } else {
        this.validateUrl = false;
      }
    },
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
    goIntegrations() {
      this.$emit("sendIntegrations");
    },
  },
};
</script>
<style scoped>
/*Multiselect Deep para responsividade mobile*/
:deep(.p-multiselect-token) {
  margin: 0.1rem;
}
:deep(.p-multiselect-label) {
  display: flex;
  flex-wrap: wrap;
}
</style>
