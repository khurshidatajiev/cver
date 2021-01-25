<template>
  <div class="form-control">
    <label v-if="label" :for="id">{{ label }}</label>
    <select v-model="payload" :id="id">
      <option v-for="item in items" :value="item.id" :key="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
const EMITTER_VALUE = "update:value";

export default {
  name: "VSelect",
  emits: [EMITTER_VALUE],
  props: {
    value: {
      type: [String, Number],
      required: false,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
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
