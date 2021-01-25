<template>
  <div class="form-control">
    <label v-if="label" :for="id">{{ label }}</label>
    <textarea v-model="payload" :id="id" rows="3"></textarea>
  </div>
</template>

<script>
const EMITTER_VALUE = "update:value";

export default {
  name: "VTextArea",
  emits: [EMITTER_VALUE],
  props: {
    value: {
      type: [String, Number],
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },
  computed: {
    id() {
      return `field-${this.name}`;
    },
    payload: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit(EMITTER_VALUE, value);
      },
    },
  },
};
</script>

<style scoped></style>
