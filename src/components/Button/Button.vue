<template>
    <button :disabled="disabled" :id="classes" >
        <slot></slot>
    </button>
</template>

<script type="text/babel">
export default {
  props: {
    disabled: Boolean
  },
  computed: {
    classes() {
      if (this.disabled) {
        return "btn_disabled";
      } else {
        return "";
      }
    }
  }
};
</script>

<style>
#btn_disabled {
  background-color: #ccc;
  color: #0a0f3e;
}
</style>
