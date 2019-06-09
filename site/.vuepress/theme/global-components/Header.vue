<template>
  <div :class="{
    'header': true,
    'logo': !hasNodesInSlots
  }">
    <slot v-if="hasNodesInSlots"/>
    <div v-else class="logo"> Swapp </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasNodesInSlots () {
      return this.$slots.default && this.$slots.default.length
    }
  },
  created () {

  }
}
</script>

<style lang="scss">
@import "../styles/modules/grid.module";

.header {
  display: flex;
  padding: 28px 20px 30px;
  background: url('/images/header_background.svg');

  color: white;

  &:not(.logo) {
    @include grid;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    letter-spacing: 0.15px;
  }

  &.logo {
    padding: 22px 20px 27px;
  }

  >.logo {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */

    letter-spacing: -1.85px;
  }
}
</style>
