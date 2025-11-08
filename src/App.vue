<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <NavBar />

    <main class="flex-grow-1">
      <router-view />
    </main>

    <SiteFooter />
  </div>
</template>


<script>
  import NavBar from './components/NavBar.vue'
  import SiteFooter from './components/SiteFooter.vue'

  export default { components: { NavBar, SiteFooter } }
</script>
