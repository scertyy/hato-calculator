<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<style lang="sass" scoped>
.base-button
  padding: 5px 10px
  background: white
  border: 2px solid #DCAD76
  border-radius: 5px
  font-size: 18px
  cursor: pointer
</style>
