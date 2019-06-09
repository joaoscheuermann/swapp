<template>
  <div class="contas">
    <Header/>

    <Conta v-for="conta in contas" :conta="conta" :key="conta.conta_id"/>

    <Button 
      class="adicionarConta"
      type="rounded"
      @click.native="handleAdicionarContaButtonClick">
      +
    </Button>

  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState([
      'contas'
    ])
  },
  
  methods: {
    ...mapActions([
      'GET_CONTAS'
    ]),
    handleAdicionarContaButtonClick () {
      this.$router.push('/adicionar_conta.html')
    },

    created () {
    }
  },

  created () {
    // http://ec2-18-207-210-129.compute-1.amazonaws.com/usuario/contas
    /* axios.get('http://ec2-18-207-210-129.compute-1.amazonaws.com/usuario/contas', {

    })
      .then(e => {

      })
    */
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
