<template>
  <div class="card ml-6 mr-6">
    <TabView>
      <TabPanel header="Criar formulários">
        <CreateForm class="fadein animation-duration-200" />
      </TabPanel>
      <TabPanel header="Captura automática do site">
        <CaptureForm class="fadein animation-duration-200" />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
