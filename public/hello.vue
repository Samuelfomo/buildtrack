<template>

  <div class=" bg-gray-200 flex items-center justify-center min-h-screen ">
    <div
        v-if="isLoading"
        class="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-50 backdrop-blur-sm">
      <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500"></div>
      <p class="ml-4 font-medium" style="color: #FF4200">Chargement...</p>
    </div>

    <div class="bg-gray-200 w-full max-w-md p-3 ">
      <div class="bg-white  w-full max-w-sm p-3 rounded-2xl">
        <header class="py-2 px-4 text-center">
          <p class=" text-center text-black font-bold pt-2 capitalize text-2xl italic"> Hello! </p>
          <p class=" text-center text-gray-300 -pt-1 capitalize text-2xl"> Manfred MOUKATE </p>
        </header>
        <div class="p-4">
          <p class="text-gray-400 mb-2 ">Your PIN code in required to sign in</p>
          <div class="relative border-gray-300">
            <input
                v-model="tel"
                type="tel"
                placeholder="699888709"
                class="text-end w-full px-6 py-2 text-lg border-2 border-gray-300 rounded-xl bg-gray-300
                 focus:outline-none focus:border-blue-600 focus:ring-2
                 focus:ring-blue-200 transition duration-300
                 placeholder-gray-600"
            />
            <p v-if="errors.tel" class="text-red-600 text-sm mt-1">{{ errors.tel }}</p>
          </div>
          <div class="py-3 mt-5 w-full flex">
            <button
                @click="handleSubmit"
                class=" text-black font-bold rounded-xl hover:text-black flex-1
            transition duration-300 capitalize"
            >
              Retour
            </button>
            <button
                @click="handleSubmit"
                class=" text-blue-600 font-bold rounded-xl hover:text-blue-800
            transition duration-300 capitalize flex-1"
            >
              continuer
            </button>
          </div>


          <div class="text-center text-sm text-gray-500 mt-2 mb-0">
            From
          </div>
          <div class="text-center text-lg text-gray-500 -mb-4">
            <a href="#" class="text-black font-bold hover:underline">ENM-BuildTrack</a>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup lang="ts" >
import { useRouter } from 'vue-router';
import { ref } from 'vue'

const router = useRouter();

const isLoading = ref(false);
const tel = ref('');

const errors = ref({
  tel: ''
});

const handleSubmit = () => {
  // Reset errors
  errors.value = {
    tel: ''
  };

  // Validate fields
  if (!tel.value) {
    errors.value.tel = 'Veuillez entrer votre numero de telephone';
  }

  // If no errors, proceed with form submission
  if (!errors.value.tel && !errors.value.password && !errors.value.confirmed) {
    // Add form submission logic here
    router.push('/hello');
  }
};



</script>

<style scoped>
/* Styles personnalisés supplémentaires si nécessaire */
</style>
