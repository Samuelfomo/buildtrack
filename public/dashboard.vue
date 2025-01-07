<template>
    <div class="flex flex-col min-h-screen">
      <!-- Header -->
      <Header />
  
      <!-- Contenu principal -->
      <main class="flex-1 bg-gray-50 p-8 grid grid-cols-2 gap-4">
        <!-- Carte pour Contact -->
        <Card title="Contact" description="Gestion des contacts">
          <template #icon>
            <i class="fas fa-address-book text-blue-500 text-3xl"></i>
          </template>
        </Card>
  
        <!-- Carte pour Utilisateur -->
        <Card title="Utilisateur" description="Gestion des utilisateurs">
          <template #icon>
            <i class="fas fa-user text-blue-500 text-3xl"></i>
          </template>
        </Card>
  
        <!-- Carte pour Matériel -->
        <Card title="Matériel" description="Gestion des matériaux">
          <template #icon>
            <i class="fas fa-hammer text-blue-500 text-3xl"></i>
          </template>
        </Card>
  
        <!-- Réutilisation d'une carte -->
        <Card title="Matériel" description="Gestion des matériaux">
          <template #icon>
            <i class="fas fa-hammer text-blue-500 text-3xl"></i>
          </template>
        </Card>
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "./components/header.vue";
  import Footer from "./components/footer.vue";
  import Card from "./components/card.vue";
  
  export default {
    name: "Dashboard",
    components: { Header, Footer, Card },
  };
  </script>
  