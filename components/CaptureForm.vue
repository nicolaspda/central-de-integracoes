<template>
  <div>
    <p class="m-1">
      Adicione o script da Dinamize nas páginas do seu site e deixe com que a
      plataforma realize a
      <strong> leitura e conversão automática </strong> dos formulários já
      existentes.
    </p>
    <div class="card pt-4">
      <div class="flex justify-content-end mb-2">
        <Button label="Adicionar" />
      </div>
      <DataTable
        :value="sites"
        tableStyle="min-width: 50rem"
        rowHover
      >
        <template #empty> No customers found. </template>
        <template #loading> Loading customers data. Please wait. </template>
        <Column
          field="site"
          header="Site"
        ></Column>
        <Column
          field="script"
          header="Script"
        ></Column>
        <Column
          field="action"
          header="Ação"
        >
          <template #body="{ data }">
            <Button
              icon="pi pi-copy"
              v-tooltip.top.focus="'Copiado!'"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        {
          site: "www.meusapatopreto.com.br",
          script:
            "<script src='//receiver.posclick.dinamize.com/forms/js/300001_1234.js'>",
        },
        {
          site: "www.meusapatocolorido.com.br",
          script:
            "<script src='//receiver.posclick.dinamize.com/forms/js/300001_1235.js'>",
        },
        {
          site: "www.pucrs.br",
          script:
            "<script src='//receiver.posclick.dinamize.com/forms/js/300001_1236.js'>",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
