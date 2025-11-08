<template>
    <nav class="navbar navbar-expand-lg bg-light border-bottom sticky-top">
        <div class="container">
            <router-link class="navbar-brand fw-bold" to="/">
                <i class="bi bi-people-fill me-2"></i>{{ brand }}
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div id="mainNav" class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/chi-siamo">Chi siamo</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/consiglieri">Consiglieri</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/programma">Programma</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/comunicati">Comunicati</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/contatti">Contatti</router-link></li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() { return { brand: 'Insieme per Spoleto' } }
    }
</script>
