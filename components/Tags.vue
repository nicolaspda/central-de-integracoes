<template>
  <MultiSelect
    v-model="selectedTags"
    filter
    display="chip"
    :options="tags"
    optionLabel="value"
    placeholder="Selecione os grupos"
    :maxSelectedLabels="5"
    class="w-full"
    @change="AddRow"
  />
</template>

<script>
export default {
  data() {
    return {
      selectedTags: "",
      tags: [
        { value: "Grupo gestores" },
        { value: "E-commerce" },
        { value: "Outbound" },
        { value: "Evento" },
        { value: "Webinar" },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
