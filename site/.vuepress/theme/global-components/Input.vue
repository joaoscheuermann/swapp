<template>
  <div class="input">
    <label class="label"> {{ label }} </label>
    <input v-if="type !== 'select'" class="field" :placeholder="placeholder" :type="type" name="" id="">
    <select v-else class="field">
      <slot />
    </select>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'Input text'
    }
  }
}
</script>

<style lang="scss">
.input {
  margin-bottom: 15px;

  .label {
    display: block;
    padding: 0 10px;
    margin-bottom: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  .field {
    display: block;
    width: 100%;
    padding: 14px 16px;

    background: white;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    border: 1px solid black;
    border-radius: 5px;
  }
}
</style>
