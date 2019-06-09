<template>
  <div class="contas">
    <Header/>

    <Conta />

    <Button 
      class="adicionarConta"
      type="rounded"
      @click.native="handleAdicionarContaButtonClick"> 
      +
    </Button>

  </div>

</template>

<script>
export default {
  methods: {
    handleAdicionarContaButtonClick () {
      this.$router.push('/adicionar_conta.html')
    }
  }
}
</script>

<style lang="scss">
  .contas {
    >.header {
      margin-bottom: 30px;
    }
  }

  .adicionarConta {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    background: #2C67FF;
  }
</style>
