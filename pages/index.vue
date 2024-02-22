<template>
  <div
    class="flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="card">
      <img
        src="https://i.postimg.cc/DyWW65wL/dina-logo.png"
        width="180"
        class="flex mr-6 pb-3 mb-2"
      />
      <span class="p-text-secondary block mb-5">Acesse sua conta:</span>
      <div class="flex align-items-center gap-1 mb-3">
        <label
          for="username"
          class="font-semibold w-6rem"
          >Usuário</label
        >
        <div
          :class="inputFocusEmail === true ? animation : 'h-2rem'"
          style="width: 3px"
        ></div>
        <InputText
          id="username"
          class="flex-auto"
          autocomplete="off"
          v-model="email"
          @focus="changeFocus('email')"
        />
      </div>
      <div class="flex align-items-center gap-1 mb-5">
        <label
          for="password"
          class="font-semibold w-6rem"
        >
          Senha
        </label>
        <div
          :class="inputFocusPass === true ? animation : 'h-2rem'"
          style="width: 3px"
        ></div>
        <Password
          v-model="password"
          :feedback="false"
          @focus="changeFocus('password')"
          toggleMask
        />
      </div>
      <div class="flex justify-content-between">
        <div>
          <a
            href="https://www.dinamize.com.br/"
            class="text-xs"
            >Esqueci minha senha
          </a>
        </div>
        <div class="flex justify-content-end gap-2">
          <NuxtLink to="/Loading">
            <Button
              type="password"
              label="Entrar"
              @click="visible = false"
            ></Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animation:
        "h-2rem bg-indigo-400 scalein animation-duration-200 border-round",
      inputFocusEmail: false,
      inputFocusPass: false,
      email: null,
      password: null,
    };
  },
  methods: {
    /*função que anima a tabulação dos inputs*/
    changeFocus(clicked) {
      if (clicked === "email") {
        this.inputFocusEmail = true;
        this.inputFocusPass = false;
      } else if (clicked === "password") {
        this.inputFocusEmail = false;
        this.inputFocusPass = true;
      }
    },
  },
};
</script>
