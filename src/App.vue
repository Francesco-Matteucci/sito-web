<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <main class="grow">
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
