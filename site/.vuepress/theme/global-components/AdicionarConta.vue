<template>
  <div class="adicionar-conta">
    <Header style="margin-bottom: 30px;">
      <div class="voltar">
        <img src="/images/arrow_back.svg" alt="">
      </div>
      <div class="titulo">ADICIONAR CONTA</div>
    </Header>

    <div class="inputs">
      <Input type="select" label="BANCO" v-model="banco"> 
        <option value="001"> NuBank </option>
      </Input>

      <Input type="number" label="AGENCIA" id="agencia" v-model="agencia"/>
      <Input type="number" label="CONTA" id="conta" v-model="conta"/>

      <Input type="select" label="TIPO DE CONTA" v-model="tipoDeConta">
        <option value="003"> Poupança </option>
        <option value="001"> Conta corrente </option>
      </Input>

      <Input type="password" label="SENHA" v-model="senha"/>

      <Button id="button" @click.native="handleAdicionarButtonClick"> ADICIONAR </Button>
    </div>
  </div>

</template>

<script>
import { mapActions } from "vuex";

export default {
  data () {
    return {
      banco: '',
      agencia: '',
      conta: '',
      tipoDeConta: '',
      senha: ''
    }
  },

  methods: {
    ...mapActions([
      'GET_CONTAS',
      'CADASTRAR_CONTA'
    ]),

    handleAdicionarButtonClick () {
      this.CADASTRAR_CONTA({ banco_id: parseInt(this.banco), agencia_digito: parseInt(this.agencia), conta_digito: parseInt(this.conta), poupanca_flag: 'False'})
        .then(e => {
          return this.GET_CONTAS()
        })
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
      margin-bottom: 30px;
      >.titulo {
        @include column(5)
      }
    }
  }

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
