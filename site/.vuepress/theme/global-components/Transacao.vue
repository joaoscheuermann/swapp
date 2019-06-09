<template>
  <div class="adicionar-conta">
    <Header>
      <div>voltar</div>
      <div>Transação</div>
    </Header>

    <div class="inputs">
      <Input type="select" label="BANCO"> 
        <option value="teste"> NuBank </option>
      </Input>

      <Input type="text" label="AGENCIA" id="agencia"/>
      <Input type="text" label="CONTA" id="conta"/>

      <Input type="select" label="TIPO DE CONTA"> 
        <option value="003"> Poupança </option>
        <option value="001"> Conta corrente </option>
      </Input>

      <Input type="text" label="CPF"/>

      <Input type="select" label="VALOR"> 
        <option value="003"> 100 </option>
        <option value="001"> 200 </option>
      </Input>

      <Button id="button"> REALIZAR </Button>
    </div>
  </div>

</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  @import "../styles/modules/grid.module";

  .adicionarConta {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
    background: #2C67FF;
  }

  .inputs {
    @include grid;
    padding: 0 20px;

    .input {
      @include column(6);
    }

    #agencia,
    #conta,
    #button {
      @include column(3);
    }

    #button {
      grid-column-start: 4;
      grid-column-end: 7;
    }
  }
</style>
