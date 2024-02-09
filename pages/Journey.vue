<template>
<div class="card">
  <!-- Título -->
  <h2>Minhas Jornadas</h2>
  <p>
    Encontre aqui toda a informação necessária para começar a utilizar a
    plataforma da Dinamize e então trabalhar a jornada de seus contatos.
  </p>
  <TabView class="mt-5">
   <!-- Primeira opção do seletor (tab) -->
    <TabPanel header="Começando na plataforma">
      <p class="m-0">
   <!-- Componente do cartão (loop) -->
      <Fieldset 
      v-for="(userCard, key) in usercardData"
      :key="key" class="mt-3">
      <template #legend>
        <div class="flex align-items-center">
          <Avatar shape="circle">{{userCard.number}}</Avatar>
          <span class="font-bold pl-2">{{userCard.title}}</span>
        </div>
      </template>
      <div class="card flex justify-content-center pt-4">
     {{userCard.content}}
      </div>
      <Button :label="userCard.label" class="ml-5"></Button>
      <icon :class="userCard.status === 'on' ? 'pi pi-check-circle flex justify-content-end mr-5  text-green-800' : 'pi pi-exclamation-circle text-yellow-500 flex justify-content-end mr-5'" style="font-size: 1.3rem"></icon>
    </Fieldset>
      </p>
    </TabPanel>
     <!-- Segunda opção do seletor (tab) -->
    <TabPanel header="Jornada do cliente">
    <p class="m-0">
    <!-- Componente do cartão (loop) -->
       <Fieldset 
       v-for="(contactCard, key) in contactcardData"
       :key="key" class="mt-3">
       <template #legend>
         <div class="flex align-items-center">
           <Avatar shape="circle">{{contactCard.number}}</Avatar>
           <span class="font-bold pl-2">{{contactCard.title}}</span>
         </div>
       </template>
       <div class="card flex justify-content-center pt-4">
      {{contactCard.content}}
       </div>
       <Button :label="contactCard.label" class="ml-5"></Button>
       <icon :class="contactCard.status === 'on' ? 'pi pi-check-circle flex justify-content-end mr-5  text-green-800' : 'pi pi-exclamation-circle text-yellow-500 flex justify-content-end mr-5'" style="font-size: 1.3rem"></icon>
     </Fieldset>
       </p>
    </TabPanel>
  </TabView>
</div>
</template>
<script>
export default {
data() {
  return {
    usercardData:[
    {
      number: "1",
      title: "Valide suas configurações DNS",
      content: "O primeiro passo para garantir que seus envios levarão as mensagens com autenticidade e confiaça aos provedores de e-mail. Os CNAMEs, SPF, DKIM e DMARC são muito importantes para o uso correto do sistema.",
      label: "Configurar domínios",
      status: "on"
    },
    {
      number: "2",
      title: "Importe seus contatos",
      content: "Comece iniciando a importação de seus contatos. Você pode importar os dados de uma planilha CSV, TXT, XLS, XLSX ou a partir de uma integração com outra plataforma.",
      label: "Importar agora",
      status: "off"
    },
    {
      number: "3",
      title: "Google Analytics",
      content: "Tenha uma visão completa da performance do site. O Google Analytics integrado aos recursos da Dinamize permite analisar o comportamento dos clientes para aferir relatórios simplificados e tomar as melhores decisões.",
      label: "Conectar GA4",
      status: "off"
    },
    {
      number: "4",
      title: "Script da Dinamize",
      content: "O Script da Dinamize desbloqueia diversos recursos da plataforma. Realize a inserção do código em todas as suas páginas para utilizar ferramentas como: Captura automática de formulários, Dados de compra dos clientes, Lead-tracking, Pop-Ups, botão do WhatsApp e muito mais!",
      label: "Acessar script",
      status: "off"
    }
    ],
    contactcardData:[
    {
      number: "1",
      title: "Crie sua primeira campanha",
      content: "O primeiro passo para garantir que seus envios levarão as mensagens com autenticidade e confiaça aos provedores de e-mail. Os CNAMEs, SPF, DKIM e DMARC são muito importantes para o uso correto do sistema.",
      label: "Configurar domínios",
      status: "on"
    },
    {
      number: "2",
      title: "Defina tags para segmentar através de grupos",
      content: "Comece iniciando a importação de seus contatos. Você pode importar os dados de uma planilha CSV, TXT, XLS, XLSX ou a partir de uma integração com outra plataforma.",
      label: "Importar agora",
      status: "off"
    },
    {
      number: "3",
      title: "Google Analytics",
      content: "Tenha uma visão completa da performance do site. O Google Analytics integrado aos recursos da Dinamize permite analisar o comportamento dos clientes para aferir relatórios simplificados e tomar as melhores decisões.",
      label: "Conectar GA4",
      status: "off"
    },
    {
      number: "4",
      title: "Script da Dinamize",
      content: "O Script da Dinamize desbloqueia diversos recursos da plataforma. Realize a inserção do código em todas as suas páginas para utilizar ferramentas como: Captura automática de formulários, Dados de compra dos clientes, Lead-tracking, Pop-Ups, botão do WhatsApp e muito mais!",
      label: "Acessar script",
      status: "off"
    }
    ],
  };
},
methods: {
  //Seleciona a plataforma
  Add() {
 
  },
},
};
</script>
<style scoped></style>
