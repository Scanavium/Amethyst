<script setup lang="ts">
defineProps<{icon: any, text?:string}>();
</script>

<template>
  <button
    class="flex gap-1 hover:bg-primary hover:text-surface-800 duration-user-defined cursor-pointer items-center bg-accent bg-opacity-15 text-accent py-2 text-13px font-weight-user-defined rounded-8px gap-2"
    :class="[text? 'px-4' : 'px-2']"
  >
    <component
      :is="icon"
      class="w-4 h-4 min-w-4 min-h-4"
    />
    {{ text }}
  </button>
</template>
