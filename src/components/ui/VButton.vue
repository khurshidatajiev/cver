<template>
  <button
    @click="onClick"
    class="btn"
    :class="theme"
    :type="type"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<script>
const EMITTER_CLICK = "click";

export default {
  name: "VButton",
  emits: [EMITTER_CLICK],
  props: {
    theme: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    onClick() {
      this.$emit(EMITTER_CLICK);
    },
  },
};
</script>
