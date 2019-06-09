<template>
  <div class="login">
    <img height="200px" width="200px" style="margin-bottom: 60px;" src="" alt="">

    <md-field class="input">
      <label for="gender">CPF</label>
      <md-input name="last-name" id="last-name" autocomplete="family-name"/>
    </md-field>

    <md-field class="input">
      <label for="gender">Senha</label>
      <md-input name="last-name" id="last-name" autocomplete="family-name"/>
    </md-field>

    <md-button class="md-dense md-primary">Login</md-button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "../styles/modules/grid.module";

.login {
  @include grid;
  padding: 0 20px;

  .input {
    @include column(5);
    margin-bottom: 15px;
  }

  .md-button.md-dense {
    @include column(5);
    height: 40px;
    margin-top: 40px;
    border: 1px solid #448aff;
  }
}
</style>
