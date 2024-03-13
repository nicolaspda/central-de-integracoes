<template>
  <!--Menu flutuante-->
  <div
    class="card z-5 shadow-2 ml-7 mt-4 w-min h-min absolute scalein animation-duration-100"
    v-if="floatMenu"
    @mouseleave="floatMenu = false"
  >
    <div
      v-for="btn in filteredMenu"
      :key="btn"
      class="mt-4 animation-duration-100 fadein"
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
  <div class="flex">
    <!--Menu lateral (drawer)-->
    <div
      :class="
        panel
          ? 'w-5rem h-screen border-round flex flex-column gap-4 z-1 transition-all transition-duration-300 shadow-1'
          : 'w-15rem h-screen border-round flex flex-column gap-4 z-1 transition-all transition-duration-300 shadow-2'
      "
      style="background: #eaf1fb"
    >
      <div class="pt-2"></div>
      <!--Topo reservado-->
      <div class="topo">
        <div
          class="hover:surface-300 w-3rem h-3rem border-circle flex justify-content-center align-items-center ml-2 mr-2 transition-all transition-duration-300 cursor-pointer"
          @click="panelAction"
          v-tooltip="panel ? 'Expandir' : 'Reduzir'"
        >
          <i class="pi pi-bars"></i>
        </div>
      </div>
      <!--Ícones-->
      <div
        class="icons flex align-items-center hover:surface-300 border-round-md transition-all transition-duration-200 cursor-pointer ml-4 mr-4 h-2rem"
        v-for="menu in menus"
        :key="menu"
        @click="goMenu(menu.label)"
        v-tooltip="panel ? menu.label : ''"
      >
        <div class="flex gap-4">
          <i
            :class="menu.class"
            style="font-size: 16px"
            v-badge.danger
          >
          </i>
          <span
            v-if="!panel"
            class="fadein animation-duration-800"
            >{{ menu.label }}</span
          >
        </div>
      </div>
    </div>

    <!--Painel principal-->
    <div class="card h-screen w-full">
      <div class="ml-0 gap-3 pt-3">
        <img
          src="https://i.postimg.cc/DyWW65wL/dina-logo.png"
          width="120"
          class="flex mr-6 pb-3"
        />
      </div>
      <h4>Olá, Nicolas!</h4>
      <div class="card w-full h-screen ml-0 mt-4 bg-white">
        {{ selectedMenu }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      floatMenu: false,
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
              route: "/Journey",
            },
            {
              label: "WhatsApp",
              icon: "pi pi-whatsapp",
              route: "/Journey",
            },
            {
              label: "SMS",
              icon: "pi pi-mobile",
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
              route: "/ManageContacts",
            },
            {
              label: "Tags",
              icon: "pi pi-tags",
              route: "/Journey",
            },
            {
              label: "Filtros",
              icon: "pi pi-filter",
              route: "/Journey",
            },
            {
              label: "Campanhas",
              icon: "pi pi-megaphone",
              route: "/Journey",
            },
            {
              label: "Lead Score",
              icon: "pi pi-sort-numeric-up-alt",
              route: "/Journey",
            },
            {
              label: "Galeria de imagens",
              icon: "pi pi-image",
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
              route: "/Journey",
            },
            {
              label: "Analytics",
              icon: "pi pi-chart-bar",
              route: "/Journey",
            },
            {
              label: "Landing pages",
              icon: "pi pi-desktop",
              route: "/Journey",
            },
            {
              label: "SMS",
              icon: "pi pi-mobile",
              route: "/Journey",
            },
            {
              label: "SEO",
              icon: "pi pi-google",
              route: "/Journey",
            },
            {
              label: "Consumo",
              icon: "pi pi-dollar",
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
              route: "/Journey",
            },
            {
              label: "Analytics",
              icon: "pi pi-chart-bar",
              route: "/Journey",
            },
            {
              label: "URL amigável",
              icon: "pi pi-verified",
              route: "/Journey",
            },
            {
              label: "Script da Dinamize",
              icon: "pi pi-code",
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
    goMenu(menuName) {
      this.selectedMenu = menuName;
      if (this.filteredMenu.some((menu) => menu.items)) {
        this.floatMenu = true;
        console.log("tem item");
      } else {
        this.floatMenu = false;
      }
    },
    hideMenu() {
      this.floatMenu = true;
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
