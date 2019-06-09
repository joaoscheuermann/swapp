<template>
  <div class="contas">
    <Header>
      Swapp
    </Header>

    <Conta />

    <Button class="adicionarConta" type="rounded"> + </Button>

  </div>

</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .adicionarConta {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    background: #2C67FF;
  }
</style>
