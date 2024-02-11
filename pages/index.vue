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
      <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Usuário</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex align-items-center gap-3 mb-5">
        <label for="password" class="font-semibold w-6rem">Senha</label>
        <Password v-model="password" :feedback="false" toggleMask />
      </div>
      <div class="flex justify-content-between">
        <div>
          <a href="https://www.dinamize.com.br/" class="text-xs"
            >Esqueci minha senha</a
          >
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
      password: null,
    };
  },
};
</script>
