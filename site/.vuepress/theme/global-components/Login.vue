<template>
  <div class="login">

    <Input type="password" label="CPF"/>
    <Input type="password" label="SENHA"/>

    <Button id="button" @click.native="handleLoginButtonClick"> LOGIN </Button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLoginButtonClick () {
      this.$router.push('/contas.html')
    }
  }
}
</script>

<style lang="scss">
.login {
  padding: 50px 20px 0;

  >#button {
    margin-top: 50px;
  }
}
</style>
