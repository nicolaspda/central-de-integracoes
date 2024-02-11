<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <div class="ml-4 gap-3 pt-3">
          <img
            src="https://i.postimg.cc/DyWW65wL/dina-logo.png"
            width="180"
            class="flex mr-6 pb-3"
          />
        </div>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <NuxtLink
          v-if="item.route"
          v-slot="{ navigate }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            class="flex align-items-center"
            v-bind="props.action"
            @click="navigate"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge
              v-if="item.badge"
              :class="{ 'ml-auto': !root, 'ml-2': root }"
              :value="item.badge"
            />
            <span
              v-if="item.shortcut"
              class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
              >{{ item.shortcut }}
            </span>
          </a>
        </NuxtLink>
        <a v-else v-ripple :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
            ]"
          ></i>
        </a>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-home",
          route: "/",
        },
        {
          label: "Criar",
          icon: "pi pi-bolt",
          items: [
            {
              label: "E-mail",
              icon: "pi pi-send",
              shortcut: "⌘+S",
              route: "/Journey",
            },
            {
              label: "Landing page",
              icon: "pi pi-desktop",
              shortcut: "⌘+B",
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
              label: "Campanhas",
              icon: "pi pi-megaphone",
              shortcut: "⌘+U",
              route: "/Journey",
            },
            {
              label: "Templates",
              icon: "pi pi-palette",
              items: [
                {
                  label: "E-mail",
                  icon: "pi pi-palette",
                  route: "/Journey",
                },
                {
                  label: "Landing page",
                  icon: "pi pi-palette",
                  route: "/Journey",
                },
              ],
            },
            {
              separator: true,
            },
          ],
        },
        {
          label: "Gerenciar",
          icon: "pi pi-wrench",
          items: [
            {
              label: "Contatos",
              icon: "pi pi-users",
              shortcut: "⌘+S",
              route: "/Journey",
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
            {
              separator: true,
            },
          ],
        },
        {
          label: "Automatizar",
          icon: "pi pi-forward",
        },
        {
          label: "Analisar",
          icon: "pi pi-chart-line",
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
              separator: true,
            },
          ],
        },
        {
          label: "Integrar",
          icon: "pi pi-sync",
          route: "/Central",
        },
        {
          label: "Configurar",
          icon: "pi pi-cog",
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
            {
              separator: true,
            },
          ],
        },
        {
          label: "Jornadas",
          icon: "pi pi-directions",
          items: [
            {
              label: "Começando na plataforma",
              icon: "pi pi-car",
              badge: 2,
              route: "/Journey",
            },
            {
              label: "Criando jornada do cliente",
              icon: "pi pi-truck",
              badge: 3,
              route: "/Journey",
            },
          ],
        },
      ],
    };
  },
};
</script>
