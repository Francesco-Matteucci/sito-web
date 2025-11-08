<template>
    <nav class="navbar navbar-expand-lg border-bottom sticky-top py-3" :style="navbarStyle">
        <div class="container">
            <!-- LOGO -->
            <router-link class="navbar-brand d-flex align-items-center fw-bold text-dark" to="/">
                <img src="../assets/logo-insieme-per-spoleto.png" alt="Insieme per Spoleto" height="45" class="me-2">
                <span class="fs-5">Insieme per Spoleto</span>
            </router-link>

            <!-- TOGGLER -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- LINKS -->
            <div id="mainNav" class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto fw-medium">
                    <li class="nav-item" v-for="link in links" :key="link.to">
                        <router-link class="nav-link px-3" active-class="active" :to="link.to">
                            {{ link.label }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import logo from '../assets/logo-insieme-per-spoleto.png'

    export default {
        data() {
            return {
                links: [
                    { label: 'Home', to: '/' },
                    { label: 'Chi siamo', to: '/chi-siamo' },
                    { label: 'Consiglieri', to: '/consiglieri' },
                    { label: 'Programma', to: '/programma' },
                    { label: 'Comunicati', to: '/comunicati' },
                    { label: 'Contatti', to: '/contatti' }
                ],
                logo
            }
        },
        computed: {
            navbarStyle() {
                return { backgroundColor: 'var(--bg-light)', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }
            }
        }
    }
</script>

<style scoped>
    .nav-link {
        color: var(--text-dark);
        transition: color 0.2s ease-in-out;
    }

    .nav-link:hover {
        color: var(--brand-red);
    }

    .nav-link.active {
        color: var(--brand-blue);
        font-weight: 600;
    }
</style>
