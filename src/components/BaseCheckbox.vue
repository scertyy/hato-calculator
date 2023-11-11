<script setup>
import { computed } from "vue";

const props = defineProps({
  checkboxId: [Number, String],
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const selected = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <label
    class="base-checkbox"
    :class="{ 'base-checkbox_selected': modelValue }"
    :for="checkboxId"
  >
    <input type="checkbox" :id="checkboxId" v-model="selected" />
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<style lang="sass" scoped>
.base-checkbox
  font-size: 16px
  font-weight: 500
  color: #757575
  &_selected
    color: black
    font-weight: 600
</style>
