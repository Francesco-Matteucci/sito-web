<template>
    <footer class="site-footer text-light mt-5" role="contentinfo">
        <div class="container py-4">
            <div class="row gy-3 align-items-center">
                <!-- Brand -->
                <div class="col-md-6 d-flex align-items-center gap-2">
                    <span class="fw-semibold">Insieme per Spoleto</span>
                </div>

                <!-- Contatti -->
                <div class="col-md-6 text-md-end">
                    <a class="link-light text-decoration-none me-3" href="mailto:press@insiemeper-spoleto.it"
                        aria-label="Scrivi a press@insiemeper-spoleto.it">
                        <i class="bi bi-envelope me-1"></i>press@insiemeper-spoleto.it
                    </a>
                    <a class="link-light text-decoration-none" href="#" target="_blank" rel="noopener"
                        aria-label="Pagina Facebook ufficiale">
                        <i class="bi bi-facebook me-1"></i>Facebook
                    </a>
                </div>
            </div>

            <hr class="opacity-25 my-4" />

            <div class="d-flex flex-column flex-md-row justify-content-between align-items-center small gap-3">
                <div>© {{ year }} Insieme per Spoleto — Tutti i diritti riservati</div>
                <div>
                    <a href="#" class="link-light text-decoration-none me-3">Privacy</a>
                    <a href="#" class="link-light text-decoration-none me-3">Cookie</a>
                    <a href="#" class="link-light text-decoration-none" @click.prevent="scrollTop">
                        Torna su <i class="bi bi-arrow-up-short"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        computed: {
            year() { return new Date().getFullYear() }
        },
        methods: {
            scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }) }
        }
    }
</script>

<style scoped>
    .site-footer {
        background-color: var(--brand-red);
        box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.12);
    }

    .site-footer .link-light:hover {
        text-decoration: underline;
    }

    hr {
        border-color: rgba(255, 255, 255, .25);
    }
</style>
