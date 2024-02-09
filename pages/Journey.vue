<template>
  <Menu />
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
        <!-- Componente do cartão (loop) -->
        <Fieldset
          v-for="(userCard, key) in usercardData"
          :key="key"
          class="mt-3"
        >
          <template #legend>
            <div class="flex align-items-center">
              <Avatar shape="circle">{{ userCard.number }}</Avatar>
              <span class="font-bold pl-2">{{ userCard.title }}</span>
            </div>
          </template>
          <div class="card flex justify-content-center pt-4">
            {{ userCard.content }}
          </div>
          <Button :label="userCard.label" class="ml-5"></Button>
          <icon
            :class="
              userCard.status === 'on'
                ? 'pi pi-check-circle flex justify-content-end mr-5  text-green-800'
                : 'pi pi-exclamation-circle text-yellow-500 flex justify-content-end mr-5'
            "
            style="font-size: 1.3rem"
          ></icon>
        </Fieldset>
      </TabPanel>
      <!-- Segunda opção do seletor (tab) -->
      <TabPanel header="Jornada do cliente">
        <!-- Componente do cartão (loop) -->
        <Fieldset
          v-for="(contactCard, key) in contactcardData"
          :key="key"
          class="mt-3"
        >
          <template #legend>
            <div class="flex align-items-center">
              <Avatar shape="circle">{{ contactCard.number }}</Avatar>
              <span class="font-bold pl-2">{{ contactCard.title }}</span>
            </div>
          </template>
          <div class="card flex justify-content-center pt-4">
            {{ contactCard.content }}
          </div>
          <Button :label="contactCard.label" class="ml-5"></Button>
          <icon
            :class="
              contactCard.status === 'on'
                ? 'pi pi-check-circle flex justify-content-end mr-5  text-green-800'
                : 'pi pi-exclamation-circle text-yellow-500 flex justify-content-end mr-5'
            "
            style="font-size: 1.3rem"
          ></icon>
        </Fieldset>
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usercardData: [
        {
          number: "1",
          title: "Valide suas configurações DNS",
          content:
            "O primeiro passo para garantir que seus envios levarão as mensagens com autenticidade e confiaça aos provedores de e-mail. Os CNAMEs, SPF, DKIM e DMARC são muito importantes para o uso correto do sistema.",
          label: "Configurar domínios",
          status: "on",
        },
        {
          number: "2",
          title: "Importe seus contatos",
          content:
            "Comece iniciando a importação de seus contatos. Você pode importar os dados de uma planilha CSV, TXT, XLS, XLSX ou a partir de uma integração com outra plataforma.",
          label: "Importar agora",
          status: "off",
        },
        {
          number: "3",
          title: "Google Analytics",
          content:
            "Tenha uma visão completa da performance do site. O Google Analytics integrado aos recursos da Dinamize permite analisar o comportamento dos clientes para aferir relatórios simplificados e tomar as melhores decisões.",
          label: "Conectar GA4",
          status: "off",
        },
        {
          number: "4",
          title: "Script da Dinamize",
          content:
            "O Script da Dinamize desbloqueia diversos recursos da plataforma. Realize a inserção do código em todas as suas páginas para utilizar ferramentas como: Captura automática de formulários, Dados de compra dos clientes, Lead-tracking, Pop-Ups, botão do WhatsApp e muito mais!",
          label: "Acessar script",
          status: "off",
        },
        {
          number: "5",
          title: "Integre com outra plataforma",
          content:
            "Possui algum CRM, E-commerce ou plataforma diferente? Integre este sistema com a Dinamize para reunir a estratégia de marketing da sua empresa em um único espaço.",
          label: "Acessar Integrações",
          status: "off",
        },
      ],
      contactcardData: [
        {
          number: "1",
          title: "Crie sua primeira Campanha",
          content:
            "As campanhas podem ser utilizadas para agrupar um conjunto de envios que possuem conteúdos relacionados. Além disso, ao criar uma campanha e vinclular sua conta ao Analytics, a Dinamize realizará o envio dessas informações para o GA4, e a partir disso, você poderá analisar dados relevantes e o retorno das ações de Marketing.",
          label: "Acessar Campanhas",
          status: "on",
        },
        {
          number: "2",
          title: "Defina TAGs para segmentar através de grupos",
          content:
            "As TAGs permitem realizar a gestão da base de contatos de forma simplificada. Você poderá utilizar uma 'etiqueta' para definir um grupo de contatos, e a partir disso, identificá-lo e relacionar em seus envios ou nos demais recursos disponíveis na plataforma. ",
          label: "Gerenciar Marcadores",
          status: "off",
        },
        {
          number: "3",
          title: "Crie seu primeiro Envio",
          content:
            "Comunique-se com sua base de contatos através de um envio pontual ou teste A/B. Você pode realizar este disparo no momento da criação ou agendá-lo para um momento posterior. Selecione o público, utilize modelos e comece agora mesmo a engajar seus leads.",
          label: "Criar um envio",
          status: "off",
        },
        {
          number: "4",
          title: "Crie sua primeira Landing Page",
          content:
            "As Landing pages são tratadas como 'páginas de aterissagem' e tem como objetivo principal captar novos e-mails ou atualizar dados dos contatos existentes. Crie agora mesmo sua Landing page e identifique rapidamente os leads mais aquecidos.",
          label: "Criar Landing Page",
          status: "off",
        },
        {
          number: "5",
          title: "Crie seu primeiro Pop-Up",
          content:
            "O Script da Dinamize desbloqueia diversos recursos da plataforma. Realize a inserção do código em todas as suas páginas para utilizar ferramentas como: Captura automática de formulários, Dados de compra dos clientes, Lead-tracking, Pop-Ups, botão do WhatsApp e muito mais!",
          label: "Criar Pop-Up",
          status: "off",
        },
        {
          number: "6",
          title: "Ative os Fluxos de automação",
          content:
            "Os fluxos ajudam a automatizar tarefas e programar como a ferramenta deve agir em diferentes situações. Desde atribuir marcadores, realizar e-mails de boas-vindas, aniversário, até a identificação de leads rastreados. Automatize suas tarefas agora, confira nossos fluxos predefinidos.",
          label: "Criar Automação",
          status: "off",
        },
      ],
    };
  },
  methods: {
    //Seleciona a plataforma
    Add() {
      // código da função Add
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
