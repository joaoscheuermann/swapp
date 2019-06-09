<template>
  <div class="transacao">
    <div class="dado">
      <div class="label">Transação</div>
      <div class="valor">R$: 100,00</div>
    </div>
    <div class="status"> PENDENTE </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  .transacao {
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
</style>
