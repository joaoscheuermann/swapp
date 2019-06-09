<template>
  <div class="conta">
    <div class="head">
      <img class="bankLogo" src="/images/logo_nubank.svg" alt="">
      <div class="clientName"> Ana Claudia Rodrigues </div>
    </div>
    
    <div class="dados">
      <div class="dado">
        <div class="label">Agência</div>
        <div class="valor">0001</div>
      </div>

      <div class="dado">
        <div class="label">Conta</div>
        <div class="valor">2874055-7</div>
      </div>

      <div class="dado">
        <div class="label">Saldo</div>
        <div class="valor">R$: 200,00</div>
      </div>
    </div>

    <div class="section">
      <button class="button">
        NOVA TRANSAÇÂO
      </button>
    </div>

    <div class="transacoes">
      <div class="transacao">
        <div class="dado">
          <div class="label">Transação</div>
          <div class="valor">R$: 100,00</div>
        </div>
        <div class="status"> PENDENTE </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "../styles/modules/grid.module";

.conta {
  margin: 0 20px;
  padding: 20px 0 0 0;

  background: radial-gradient(385.70px at 0% 0%, #FC82FF 0%, #D247EE 75.01%, #C41CFF 100%);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  color: white;

  overflow: hidden;

  >div {
    padding: 0 20px;
  }

  >.head {
    display: flex;
    align-content: center;
    margin-bottom: 15px;

    >.bankLogo {
      width: 52px;
      height: 39px;
    }

    >.clientName {
      margin-left: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      align-self: center;
      // line-height: 21px;
    }
  }

  >.dados {
    display: flex;
    margin-bottom: 15px;
  }

  .dado {
    margin-right: 15px;

    >.label {
      margin-bottom: 5px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }

    >.valor {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
  }

  >.section {
    display: flex;
    flex-direction: row-reverse;

    >.button {
      padding: 10px 20px;
      margin-bottom: 15px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      border-radius: 55px;
      border:none;
      background: white;
    }
  }

  >.transacoes {
    padding: 0;
    background: #FFF7FF;

    >.transacao {
      display: flex;
      padding: 10px 20px;
      color: black;
      
      >.dado {
        flex-shrink: 0;
      }

      >.status {
        width: 100%;
        align-self: center;
        text-align: right;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
      }
    }
  }

}

</style>
