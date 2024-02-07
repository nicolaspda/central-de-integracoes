<template>
  <TabView>
    <TabPanel header="Quero Integrar ">
      <h3>Através do método:</h3>
      <!-- Primeira Integração - Webhook -->
      <Panel toggleable collapsed>
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
        <Webhook />
      </Panel>
      <!-- Segunda Integração - Nativa -->
      <Panel toggleable collapsed class="mt-4">
        <template #header>
          <div class="flex align-items-center gap-2">
            <Avatar
              icon="pi pi-file-import"
              shape="circle"
              class="bg-blue-100"
            />
            <span class="font-bold">Integração Nativa </span>
          </div>
        </template>
        <Native />
      </Panel>
    </TabPanel>
    <TabPanel header="Integrações Ativas"> <Active /> </TabPanel>
  </TabView>
  <!-- Segunda Integração - Nativa -->
</template>

<script>
export default {};
</script>
<style scoped></style>
