<template>
  <div class="flex">
    <div
      class="w-5rem h-screen border-round left-0 flex flex-column gap-4 z-1"
      style="background: #eaf1fb"
    >
      <div class="pt-2"></div>
      <!--Topo reservado-->
      <div class="cont mb-2 mt-3">
        <div
          class="hover:surface-300 h-3rem border-circle flex justify-content-center align-items-center ml-3 mr-3 transition-all transition-duration-300 cursor-pointer"
          @click="panelAction"
        >
          <i
            class="pi pi-bars"
            style="font-size: 16px"
          ></i>
        </div>
      </div>
      <!--Ícones-->
      <div
        class="cont flex flex-column gap-1 justify-content-center align-items-center hover:surface-300 border-round transition-all transition-duration-300 cursor-pointer mr-2 ml-2"
        v-for="menu in menus"
        :key="menu"
        @click="selectedMenu = menu.label"
      >
        <i
          :class="menu.class"
          style="font-size: 16px"
          v-badge.danger
        >
        </i>
        <span style="font-size: 11px"> {{ menu.label }} </span>
      </div>
    </div>
    <!--Menu expandido-->
    <div
      :class="
        panel
          ? 'card w-15rem h-screen animation-duration-200 fadeinleft z-0'
          : 'card hidden h-screen z-0'
      "
    >
      <div
        v-for="btn in filteredMenu"
        :key="btn"
        class="mt-7"
      >
        <div
          class="card flex align-items-center gap-3 hover:surface-100 border-round transition-all transition-duration-100 h-1rem cursor-pointer shadow-1"
          v-for="item in btn.items"
        >
          <i :class="item.icon"></i>
          {{ item.label }}
        </div>
      </div>
    </div>
    <!--Painel principal-->

    <div
      class="card h-screen w-full"
      style="background: #eaf1fb"
    >
      <div class="ml-0 gap-3 pt-3">
        <img
          src="https://i.postimg.cc/DyWW65wL/dina-logo.png"
          width="120"
          class="flex mr-6 pb-3"
        />
      </div>
      <h4>Olá, Nicolas!</h4>
      <div class="card w-full h-screen ml-0 mt-4 bg-white">Conteúdo</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      panel: false,
      selectedMenu: "Dashboard",
      menus: [
        {
          label: "Dashboard",
          class: "pi pi-home",
          route: "/Dash",
        },
        {
          label: "Criar",
          class: "pi pi-bolt",
          route: "/Dash",
          items: [
            {
              label: "E-mail",
              icon: "pi pi-send",
              route: "/Journey",
            },
            {
              label: "Landing page",
              icon: "pi pi-desktop",
              route: "/Journey",
            },
            {
              label: "Pop-up",
              icon: "pi pi-id-card",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "WhatsApp",
              icon: "pi pi-whatsapp",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "SMS",
              icon: "pi pi-mobile",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "Templates",
              icon: "pi pi-palette",
            },
          ],
        },
        {
          label: "Gerenciar",
          class: "pi pi-wrench",
          route: "/Dash",
          items: [
            {
              label: "Contatos",
              icon: "pi pi-users",
              shortcut: "⌘+S",
              route: "/ManageContacts",
            },
            {
              label: "Tags",
              icon: "pi pi-tags",
              shortcut: "⌘+B",
              route: "/Journey",
            },
            {
              label: "Filtros",
              icon: "pi pi-filter",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "Campanhas",
              icon: "pi pi-megaphone",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "Lead Score",
              icon: "pi pi-sort-numeric-up-alt",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "Galeria de imagens",
              icon: "pi pi-image",
              shortcut: "⌘+U",
              route: "/Journey",
            },
          ],
        },
        {
          label: "Automatizar",
          class: "pi pi-forward",
          route: "/Dash",
        },
        {
          label: "Analisar",
          class: "pi pi-chart-line",
          route: "/Dash",
          items: [
            {
              label: "Envios",
              icon: "pi pi-send",
              shortcut: "⌘+S",
              route: "/Journey",
            },
            {
              label: "Analytics",
              icon: "pi pi-chart-bar",
              shortcut: "⌘+B",
              route: "/Journey",
            },
            {
              label: "Landing pages",
              icon: "pi pi-desktop",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "SMS",
              icon: "pi pi-mobile",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "SEO",
              icon: "pi pi-google",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "Consumo",
              icon: "pi pi-dollar",
              shortcut: "⌘+U",
              route: "/Journey",
            },
          ],
        },
        {
          label: "Integrar",
          class: "pi pi-sync",
          route: "/Dash",
        },
        {
          label: "Configurar",
          class: "pi pi-cog",
          route: "/Dash",
          items: [
            {
              label: "Domínios",
              icon: "pi pi-globe",
              shortcut: "⌘+S",
              route: "/Journey",
            },
            {
              label: "Analytics",
              icon: "pi pi-chart-bar",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "URL amigável",
              icon: "pi pi-verified",
              shortcut: "⌘+B",
              route: "/Journey",
            },
            {
              label: "Script da Dinamize",
              icon: "pi pi-code",
              shortcut: "⌘+U",
              route: "/Journey",
            },
          ],
        },
        {
          label: "Jornadas",
          class: "pi pi-truck",
          route: "/Dash",
        },
      ],
    };
  },
  methods: {
    panelAction() {
      this.panel = !this.panel;
    },
  },
  computed: {
    filteredMenu() {
      return this.menus.filter((menu) => {
        return menu.label.match(this.selectedMenu);
      });
    },
  },
};
</script>
