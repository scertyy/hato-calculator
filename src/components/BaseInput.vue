<script setup>
defineProps({
  modelValue: [Number, String],
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    class="base-input"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style lang="sass" scoped>
.base-input
  padding: 5px 10px
  background: white
  border: 2px solid #DCAD76
  border-radius: 5px
  font-size: 18px
  width: 100%
  outline: none
</style>
