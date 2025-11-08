<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <NavBar />

    <main class="grow d-flex">
      <div class="w-100 my-auto">
        <router-view />
      </div>
    </main>

    <SiteFooter />
  </div>
</template>


<script>
  import NavBar from './components/NavBar.vue'
  import SiteFooter from './components/SiteFooter.vue'

  export default { components: { NavBar, SiteFooter } }
</script>
