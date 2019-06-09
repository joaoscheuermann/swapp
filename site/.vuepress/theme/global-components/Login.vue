<template>
  <div class="login">

    <Input type="number" v-model="cpf" label="CPF"/>
    <Input type="password" v-model="senha" label="SENHA"/>

    <Button id="button" @click.native="handleLoginButtonClick"> LOGIN </Button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data () {
    return {
      cpf: '',
      senha: ''
    }
  },

  methods: {
    ...mapActions([
      'LOGIN'
    ]),

    handleLoginButtonClick () {
      const {cpf, senha} = this
      this.LOGIN({ cpf, senha })
        .then(() => {
          this.$router.push('/contas.html')
        })
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
