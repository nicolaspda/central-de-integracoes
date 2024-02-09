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
        <!--Tem um V-IF aqui no <NuxtLink> que checa se existe rota. Eu tirei. Avaliar impacto v-if="item.route" -->
        <NuxtLink v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple class="flex align-items-center" v-bind="props.action" @click="navigate" :href="href">
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
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down',
              { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root },
            ]"
          ></i>
        </a>
       </NuxtLink>
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
          route: '/'
        },
        {
          label: "Criar",
          icon: "pi pi-bolt",
          items: [
            {
              label: "E-mail",
              icon: "pi pi-send",
              shortcut: "⌘+S",
            },
            {
              label: "Landing page",
              icon: "pi pi-desktop",
              shortcut: "⌘+B",
            },
            {
              label: "Pop-up",
              icon: "pi pi-id-card",
              shortcut: "⌘+U",
            },
            {
              label: "WhatsApp",
              icon: "pi pi-whatsapp",
              shortcut: "⌘+U",
            },
            {
              label: "SMS",
              icon: "pi pi-mobile",
              shortcut: "⌘+U",
            },
            {
              label: "Campanhas",
              icon: "pi pi-megaphone",
              shortcut: "⌘+U",
            },
            {
              separator: true,
            },
            {
              label: "Templates",
              icon: "pi pi-palette",
              items: [
                {
                  label: "E-mail",
                  icon: "pi pi-palette",
                  badge: 2,
                },
                {
                  label: "Landing page",
                  icon: "pi pi-palette",
                  badge: 3,
                },
              ],
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
            },
            {
              label: "Tags",
              icon: "pi pi-tags",
              shortcut: "⌘+B",
            },
            {
              label: "Filtros",
              icon: "pi pi-filter",
              shortcut: "⌘+U",
            },
            {
              label: "Lead Score",
              icon: "pi pi-sort-numeric-up-alt",
              shortcut: "⌘+U",
            },
            {
              label: "Galeria de imagens",
              icon: "pi pi-image",
              shortcut: "⌘+U",
            },
            {
              separator: true,
            },
            {
              label: "Templates",
              icon: "pi pi-palette",
              items: [
                {
                  label: "E-mail",
                  icon: "pi pi-palette",
                  badge: 2,
                },
                {
                  label: "Landing page",
                  icon: "pi pi-palette",
                  badge: 3,
                },
              ],
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
            },
            {
              label: "Analytics",
              icon: "pi pi-chart-bar",
              shortcut: "⌘+B",
            },
            {
              label: "Landing pages",
              icon: "pi pi-desktop",
              shortcut: "⌘+U",
            },
            {
              label: "SMS",
              icon: "pi pi-mobile",
              shortcut: "⌘+U",
            },
            {
              label: "SEO",
              icon: "pi pi-google",
              shortcut: "⌘+U",
            },
            {
              separator: true,
            },
            {
              label: "Templates",
              icon: "pi pi-palette",
              items: [
                {
                  label: "E-mail",
                  icon: "pi pi-palette",
                  badge: 2,
                },
                {
                  label: "Landing page",
                  icon: "pi pi-palette",
                  badge: 3,
                },
              ],
            },
          ],
        },
        {
          label: "Integrar",
          icon: "pi pi-sync",
          route: '/Central'
        },
        {
          label: "Configurar",
          icon: "pi pi-cog",
          items: [
            {
              label: "Domínios",
              icon: "pi pi-globe",
              shortcut: "⌘+S",
            },
            {
              label: "Analytics",
              icon: "pi pi-chart-bar",
              shortcut: "⌘+U",
            },
            {
              label: "URL amigável",
              icon: "pi pi-verified",
              shortcut: "⌘+B",
            },
            {
              label: "Script da Dinamize",
              icon: "pi pi-code",
              shortcut: "⌘+U",
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
              route: '/Journey'
            },
            {
              label: "Criando jornada do cliente",
              icon: "pi pi-truck",
              badge: 3,
              route: '/Journey'
            },
          ],
        },
      ],
    };
  },
};
</script>
