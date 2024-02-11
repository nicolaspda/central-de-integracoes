<template>
  <div
    class="card flex justify-content-center align-items-center h-screen flex-column"
  >
    <div class="flex justify-content-center">
      <img
        src="https://i.postimg.cc/DyWW65wL/dina-logo.png"
        width="200"
        :class="logoClass"
      />
    </div>
    <div class="w-3 mt-3">
      <ProgressBar
        :value="loading"
        :showValue="false"
        style="height: 7px"
      ></ProgressBar>
    </div>
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
          this.endProgress();
        }
        this.loading = newValue;
      }, 1400);
    },
    endProgress() {
      clearInterval(this.interval);
      this.interval = null;
      setTimeout(() => {
        this.$router.push("/Dash");
      }, 1200);
    },
  },
  computed: {
    logoClass() {
      return this.loading < 100
        ? "flex pb-3 mb-2 fadein animation-duration-2000 animation-iteration-infinite"
        : "flex pb-3 mb-2 w-11rem transition-all transition-duration-200 transition-delay-500";
    },
  },
};
</script>

<style scoped></style>
