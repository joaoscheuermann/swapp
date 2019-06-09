<template>
  <div :class="['button', type]">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 54px;

  padding: 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  background: #2764FF;
  color: white;

  &.rounded {
    min-width: 68px;
    min-height: 68px;
    border-radius: 50px;
    font-size: 24px;
  }
}

</style>
