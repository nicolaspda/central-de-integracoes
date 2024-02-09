<template>
  <div class="card fadein animation-duration-200">
    <DataTable
      size="large"
      v-model:filters="filters"
      :value="integrations"
      paginator
      :rows="10"
      rowHover
      dataKey="name"
      filterDisplay="row"
      :loading="loading"
      :globalFilterFields="['name', 'plataform', 'status', 'type']"
    >
      <template #header>
        <div class="flex justify-content-end">
          <IconField iconPosition="left">
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText
              v-model="filters['global'].value"
              placeholder="Pesquisar"
            />
          </IconField>
        </div>
      </template>
      <template #empty>Nenhuma integração encontrada.</template>
      <template #loading>Carregando integrações. Por favor, aguarde.</template>
      <!-- Coluna Nome -->
      <Column field="name" sortable header="Nome" style="min-width: 12rem">
        {{ data.name }}
      </Column>
      <!-- Coluna Plataforma -->
      <Column
        field="plataform"
        sortable
        header="Plataforma"
        style="min-width: 12rem"
      >
        <template #body="{ data }"
          ><img alt="teste" :src="data.img" style="width: 16px" />
          {{ data.plataform }}
        </template>
      </Column>
      <!-- Coluna Tipo -->
      <Column field="type" header="Tipo" sortable>
        <template #body="{ data }">
          {{ data.type }}
        </template>
      </Column>
      <!-- Coluna Data -->
      <Column field="date" header="Data" sortable style="min-width: 12rem">
        {{ data.date }}
      </Column>
      <!-- Coluna Status -->
      <Column field="status" header="Status" sortable style="min-width: 12rem">
        <template #body="{ data }">
          <InputSwitch v-model="data.status" />
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
  data() {
    return {
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
      integrations: [
        {
          name: "Integração 1",
          plataform: "VTEX",
          type: "Instantânea",
          date: "10/01/2024",
          status: true,
          img: "https://albato.com/strapi/uploads/logo_app_vtex_bd66d73eee.png",
        },
        {
          name: "Integração 2",
          plataform: "NuvemShop",
          type: "Instantânea",
          date: "11/01/2024",
          status: true,
          img: "https://conectenvios.com.br/wp-content/uploads/2023/03/cropped-nuvemshop_logo.png",
        },
        {
          name: "Integração 3",
          plataform: "Shopify",
          type: "Instantânea",
          date: "12/01/2024",
          status: false,
          img: "https://freelogopng.com/images/all_img/1655836788shopify-icon-png.png",
        },
        {
          name: "Integração 4",
          plataform: "VNDA",
          type: "Nativa",
          date: "13/01/2024",
          status: false,
          img: "https://plugg.to/wp-content/uploads/2020/07/VNDA-100x100-cópia.png",
        },
        {
          name: "Integração 5",
          plataform: "ZohoCRM",
          type: "Instantânea",
          date: "14/01/2024",
          status: false,
          img: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://crm7.com.br/wp-content/uploads/2023/01/zoho-logo-300x300.png",
        },
      ],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
      loading: false,
    };
  },
  methods: {},
};
</script>
