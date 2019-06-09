<template>
  <div class="adicionar-conta">
    <Header style="margin-bottom: 30px;">
      <div class="voltar" 
        @click="handleVoltarClick">
        <img src="/images/arrow_back.svg" alt="">
      </div>
      <div class="titulo">NOVA TRANSAÇÃO</div>
    </Header>

    <div class="inputs">
      <Input type="select" label="BANCO">
        <option value="NuBank"> NuBank </option>
      </Input>

      <Input type="text" label="AGENCIA" id="agencia"/>
      <Input type="text" label="CONTA" id="conta"/>

      <Input type="select" label="TIPO DE CONTA"> 
        <option value="003"> Poupança </option>
        <option value="001"> Conta corrente </option>
      </Input>

      <Input type="text" label="CPF"/>

      <Input type="select" label="VALOR"> 
        <option value="100"> R$: 100 </option>
        <option value="200"> R$: 200 </option>
      </Input>

      <Button id="button" @click.native="handleDoneButtonClick"> REALIZAR </Button>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions([
      'CADASTRAR_TRANSACAO'
    ]),

    handleVoltarClick() {
      // this.$router.push('/contas.html')
    },
    handleDoneButtonClick () {
      // 'conta_id', 'favorecido_id', 'valor_dolar', 'status_id'

      this.CADASTRAR_TRANSACAO({ conta_id: window.currentContaId, favorecido_id: 1, valor_dolar: 200, status_id: 1 })
        .then(e => {
          this.$router.push('/contas.html')
        })
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/modules/grid.module";

  .adicionar-conta {
    >.header {
      >.titulo {
        @include column(5)
      }
    }
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
      margin-top: 30px;
      grid-column-start: 4;
      grid-column-end: 7;
    }
  }
</style>
