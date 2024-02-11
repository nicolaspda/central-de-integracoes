<template>
  <div class="flex align-items-center justify-content-center h-3">
    <img
      src="https://i.postimg.cc/DyWW65wL/dina-logo.png"
      width="200"
      :class="logoClass"
    />
  </div>
  <div class="w-12rem mt-3">
    <ProgressBar :value="loading" style="height: 7px"></ProgressBar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: 0,
      interval: null,
    };
  },
  mounted() {
    this.startProgress();
  },
  methods: {
    startProgress() {
      this.interval = setInterval(() => {
        let newValue = this.loading + 18;
        if (newValue >= 100) {
          newValue = 100;
          this.$toast.add({
            severity: "info",
            summary: "Success",
            detail: "Process Completed",
            life: 1000,
          });
          this.endProgress();
        }
        this.loading = newValue;
      }, 900);
    },
    endProgress() {
      clearInterval(this.interval);
      this.interval = null;
    },
  },
  computed: {
    logoClass() {
      return this.loading < 100
        ? "flex mr-6 pb-3 mb-2 fadein animation-duration-2000 animation-iteration-infinite"
        : "flex mr-6 pb-3 mb-2";
    },
  },
};
</script>

<style lang="scss" scoped></style>
