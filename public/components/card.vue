<template>
    <div
      class="border-2 border-gray-200 p-4 rounded-lg hover:shadow-lg flex flex-col justify-center items-center cursor-pointer"
    >
      <slot name="icon"></slot>
      <h2 class="text-lg font-bold mt-2">{{ title }}</h2>
      <p class="text-sm text-gray-500">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
    props: {
      title: String,
      description: String,
    },
  };
  </script>
  