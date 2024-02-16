<template>
  <div class="card fadein animation-duration-200 pt-2">
    <p>
      Faça um envio pontual relacionado a um determinado assunto, um teste A/B
      para analisar o comportamento do seu público ou inicie um fluxo de
      automação.
    </p>
    <div class="flex justify-content-end mb-6">
      <Button label="Novo E-mail" @click="goEmail" />
    </div>
    <DataTable
      size="small"
      v-model:filters="filters"
      v-model:selection="sendSelected"
      :value="sendCollection"
      paginator
      :rows="10"
      rowHover
      dataKey="title"
      filterDisplay="row"
      :loading="loading"
      :globalFilterFields="['title', 'campaign']"
    >
      <template #header>
        <div class="flex justify-content-between">
          <div class="flex justify-content-start gap-2">
            <!-- Seletor do tipo de envio -->
            <FloatLabel class="w-full md:w-14rem">
              <Dropdown
                v-model="selectedType"
                id="type"
                :options="sendType"
                class="w-full"
              />
              <label for="type">Tipo de envio</label>
            </FloatLabel>
            <!-- Seletor do tipo de status -->
            <FloatLabel class="w-full md:w-14rem">
              <Dropdown
                v-model="selectedStatus"
                id="status"
                :options="sendStatus"
                class="w-full"
              />
              <label for="status">Status</label>
            </FloatLabel>
            <IconField iconPosition="left">
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText
                v-model="filters['global'].value"
                placeholder="Pesquisar envio ou campanha"
                class="w-12"
              />
            </IconField>
          </div>
          <div class="flex justify-content-end">
            <Button
              :icon="refresh"
              rounded
              raised
              v-tooltip.hover.top="'Recarregar lista de envios'"
              @click="loadDatatable"
            />
          </div>
        </div>
      </template>
      <template #empty>Nenhum envio encontrado.</template>
      <template #loading>Carregando informações. Por favor, aguarde.</template>
      <!-- Checkbox de seleção -->
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <!-- Coluna Nome do envio-->
      <Column field="title" sortable header="Envio" style="min-width: 12rem">
      </Column>
      <!-- Coluna Campanha do envio-->
      <Column
        field="campaign"
        sortable
        header="Campanha"
        style="min-width: 12rem"
      >
      </Column>
      <!-- Coluna Status -->
      <Column field="status" sortable header="Status" style="min-width: 12rem">
        <template #body="{ data }"
          ><Tag
            :icon="
              data.status === 'FN'
                ? 'pi pi-envelope'
                : data.status === 'AG'
                ? 'pi pi-calendar-plus'
                : data.status === 'PD'
                ? 'pi pi-file'
                : 'pi-exclamation-circle'
            "
            :value="
              data.status === 'FN'
                ? 'Enviado'
                : data.status === 'AG'
                ? 'Agendado'
                : data.status === 'PD'
                ? 'Rascunho'
                : 'Erro'
            "
            :severity="
              data.status === 'PD'
                ? 'warning'
                : data.status === 'AG'
                ? 'primary'
                : data.status === 'FN'
                ? 'success'
                : 'info'
            "
          ></Tag>
        </template>
      </Column>
      <!-- Coluna Data -->
      <Column field="date" header="Data" sortable style="min-width: 12rem">
        {{ data.date }}
      </Column>
      <!-- Coluna Público -->
      <Column
        field="delivered"
        header="Entrega"
        sortable
        style="min-width: 12rem"
      >
        <template #body="{ data }">
          <Knob
            readonly
            v-model="data.delivered"
            :strokeWidth="5"
            valueTemplate="{value}%"
            :size="70"
          />
        </template>
      </Column>
      <!-- Coluna Abertura -->
      <Column field="view" header="Abertura" sortable style="min-width: 12rem">
        <template #body="{ data }">
          <Knob
            readonly
            v-model="data.view"
            :strokeWidth="5"
            valueTemplate="{value}%"
            valueColor="var(--purple-500)"
            :size="70"
          />
        </template>
      </Column>
      <!-- Coluna Clique -->
      <Column field="click" header="Clique" sortable style="min-width: 12rem">
        <template #body="{ data }">
          <Knob
            v-model="data.click"
            :strokeWidth="5"
            valueTemplate="{value}%"
            valueColor="var(--cyan-500)"
            readonly
            :size="70"
          />
        </template>
      </Column>
      <!-- Coluna Configurações -->
      <Column field="options" header="Config." style="min-width: 12rem">
        <template #body="{ data }">
          <SpeedDial
            v-if="data.type == 'Instantânea'"
            :model="itemsWeb"
            showIcon=" pi pi-cog"
            hideIcon="pi pi-times"
            direction="right"
            :style="{ position: 'relative' }"
          />
          <SpeedDial
            v-else
            :model="items"
            showIcon=" pi pi-cog"
            hideIcon="pi pi-times"
            direction="right"
            :style="{ position: 'relative', left: '0px', marginleft: '0px' }"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { FilterMatchMode } from "primevue/api";

export default {
  emits: ["sendEmail"],
  data() {
    return {
      //Refresh do botão de lista
      refresh: "pi pi-refresh",
      //Itens do tipo de envio
      sendType: ["Todos", "Pontual", "Teste A/B", "Automação"],
      selectedType: "Todos",
      //Itens do tipo de status
      sendStatus: [
        "Todos",
        "Enviando",
        "Enviado",
        "Agendado",
        "Enviado Parcialmente",
        "Rascunho",
        "Arquivado",
      ],
      selectedStatus: "Todos",
      sendSelected: null,
      metaKey: true,
      items: [
        {
          label: "Edit",
          icon: "pi pi-pencil",
        },
        {
          label: "Remove",
          icon: "pi pi-trash",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Update",
              detail: "Data Updated",
            });
          },
        },
      ],
      itemsWeb: [
        {
          label: "Edit",
          icon: "pi pi-pencil",
        },
        {
          label: "Remove",
          icon: "pi pi-trash",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Update",
              detail: "Data Updated",
            });
          },
        },
        {
          label: "Copy",
          icon: "pi pi-copy",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Update",
              detail: "Data Updated",
            });
          },
        },
      ],
      sendCollection: [
        {
          title: "Produtos top",
          campaign: "Lançamento",
          status: "FN",
          date: "12/01/2024",
          sent: "1100",
          delivered: 99,
          click: 28,
          view: 30,
          type: "Instantânea",
        },
        {
          title: "Pré-evento",
          campaign: "Lançamento",
          status: "AG",
          date: "13/01/2024",
          sent: "1100",
          delivered: 99,
          click: 7,
          view: 34,
          type: "Instantânea",
        },
        {
          title: "Presentes",
          campaign: "Natal",
          status: "FN",
          date: "14/01/2024",
          sent: "1100",
          delivered: 100,
          click: 10,
          view: 22,
          type: "Instantânea",
        },
        {
          title: "E-commerce repique",
          campaign: "Destaques",
          status: "PD",
          date: "15/01/2024",
          sent: "1100",
          delivered: 99,
          click: 5,
          view: 50,
          type: "Instantânea",
        },
        {
          title: "News atualizada",
          campaign: "Destaques",
          status: "FN",
          date: "16/01/2024",
          sent: "1100",
          delivered: 98,
          click: 8,
          view: 40,
          type: "Instantânea",
        },
        {
          title: "Selecionados do mês",
          campaign: "E-commerce",
          status: "AG",
          date: "17/01/2024",
          sent: "1100",
          delivered: 97,
          click: 10,
          view: 45,
          type: "Instantânea",
        },
      ],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      loading: false,
    };
  },
  methods: {
    goEmail() {
      this.$emit("sendEmail");
    },
    //Spinner do botão de recarregar lista
    loadDatatable() {
      this.refresh = "pi pi-spin pi-refresh";
      setTimeout(() => {
        this.refresh = "pi pi-refresh";
      }, 2000);
    },
  },
};
</script>
