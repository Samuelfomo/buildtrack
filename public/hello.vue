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
          <p class="text-gray-400 mb-2 text-center ">Your PIN code in required to sign in</p>
          <div class="relative border-gray-300 flex justify-center gap-2">
            <input
              v-for="(value, index) in pin"
              :key="index"
              v-model="pin[index]"
              type="text"
              maxlength="1"
              class="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg bg-gray-100
              focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition duration-300 placeholder-gray-600"
              @input="handlePinInput(index)"
            />
        </div>
        <p v-if="errors.pin" class="text-red-600 text-sm mt-1">{{ errors.pin }}</p>

          <div class="py-3 mt-5 w-full flex">
            <button
                @click="router.push('/')"
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
const pin = ref(['', '', '', '']);


const errors = ref({
  pin: ''
});

const handlePinInput = (index: number) => {
  if (pin.value[index].length === 1 && index < pin.value.length - 1) {
    // Passer automatiquement au champ suivant
    const nextInput = document.querySelectorAll('input')[index + 1];
    nextInput && (nextInput as HTMLInputElement).focus();
  } else if (pin.value[index].length === 0 && index > 0) {
    // Revenir automatiquement au champ précédent si l'utilisateur efface
    const prevInput = document.querySelectorAll('input')[index - 1];
    prevInput && (prevInput as HTMLInputElement).focus();
  }
};

const handleSubmit = () => {
  // Validation du PIN
  if (pin.value.some((digit) => digit === '')) {
    errors.value.pin = 'Veuillez remplir tous les champs.';
  } else {
    errors.value.pin = '';
    // Traitez le PIN ici (exemple : l'envoyer au backend)
    console.log('PIN soumis :', pin.value.join(''));
    router.push('/');
  }
};




</script>

<style scoped>
/* Styles personnalisés supplémentaires si nécessaire */
</style>
