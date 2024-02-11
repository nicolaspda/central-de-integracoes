<template>
  <Menu />
  <div class="card">
    <!-- Título -->
    <h2>
      <i class="pi pi-sync">&nbsp;</i>
      <span class="text-primary">Central</span> de Integrações
    </h2>
    <p>
      Conheça os meios e as plataformas disponíveis para integração com as
      ferramentas de automação de marketing e email marketing da Dinamize.
    </p>
    <TabView>
      <TabPanel header="Quero Integrar ">
        <div class="fadein animation-duration-200">
          <h3>Através do método:</h3>
          <!-- Primeira Integração - Webhook -->
          <Panel toggleable collapsed>
            <template #header>
              <div class="flex align-items-center gap-2">
                <Avatar
                  image="https://cdn-icons-png.flaticon.com/128/11896/11896341.png"
                  shape="circle"
                  class="bg-blue-100"
                />
                <span class="font-bold">Integração Instantânea</span>
                <i
                  class="pi pi-question-circle"
                  v-tooltip="
                    'Adiciona/atualiza um contato na Dinamize quando um evento for disparado do sistema terceiro (Webhook)'
                  "
                  style="font-size: 1rem"
                ></i>
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
                <i
                  class="pi pi-question-circle"
                  v-tooltip="
                    'Permite importar automaticamente os e-mails e seus dados respectivos. Pode ser uma importação única ou recorrente'
                  "
                  style="font-size: 1rem"
                ></i>
              </div>
            </template>
            <Native />
          </Panel>
          <!-- Terceira Integração - Formulário -->
          <Panel toggleable collapsed class="mt-4">
            <template #header>
              <div class="flex align-items-center gap-2">
                <Avatar icon="pi pi-book" shape="circle" class="bg-blue-100" />
                <span class="font-bold">Integração via formulário </span>
                <i
                  class="pi pi-question-circle"
                  v-tooltip="
                    'Crie formulários nativos ou identifique os formulários do seu site para automaticamente inserir os cadastros na Dinamize'
                  "
                  style="font-size: 1rem"
                ></i>
              </div>
            </template>
            TAG
          </Panel>
          <!-- Quarta Integração - Captura de compra -->
          <Panel toggleable collapsed class="mt-4">
            <template #header>
              <div class="flex align-items-center gap-2">
                <Avatar
                  icon="pi pi-shopping-cart"
                  shape="circle"
                  class="bg-blue-100"
                />
                <span class="font-bold">Integrações para E-commerce </span>
                <i
                  class="pi pi-question-circle"
                  v-tooltip="
                    'Integrações específicas para E-commerce. Ex: Capturar dados de compra'
                  "
                  style="font-size: 1rem"
                ></i>
              </div>
            </template>
            TAG
          </Panel>
        </div>
      </TabPanel>
      <TabPanel header="Integrações Ativas"> <Active /> </TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {};
</script>
<style scoped></style>
