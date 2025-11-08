<template>
    <section class="bg-light border-bottom">
        <div class="container py-5">
            <div class="row align-items-center g-5">
                <!-- Testo -->
                <div class="col-md-6">
                    <p class="overline text-uppercase mb-2">Il gruppo</p>
                    <h1 class="display-6 fw-bold mb-3 title-underline">Chi siamo</h1>

                    <p class="lead mb-4">
                        <strong>Insieme per Spoleto</strong> è un gruppo consiliare civico che lavora per una città più
                        giusta,
                        moderna e partecipata, mettendo al centro trasparenza e responsabilità.
                    </p>

                    <ul class="list-unstyled mb-4">
                        <li class="d-flex align-items-start mb-2">
                            <i class="bi bi-check2-circle me-2 text-brand"></i>
                            <span>Ascolto attivo dei cittadini e condivisione delle scelte</span>
                        </li>
                        <li class="d-flex align-items-start mb-2">
                            <i class="bi bi-check2-circle me-2 text-brand"></i>
                            <span>Proposte concrete per servizi pubblici efficienti</span>
                        </li>
                        <li class="d-flex align-items-start">
                            <i class="bi bi-check2-circle me-2 text-brand"></i>
                            <span>Legalità, trasparenza e rendicontazione del lavoro</span>
                        </li>
                    </ul>

                    <div class="d-flex flex-wrap gap-2">
                        <router-link to="/programma" class="btn btn-outline-primary">
                            Il nostro programma
                        </router-link>
                        <router-link to="/consiglieri" class="btn btn-primary">
                            I consiglieri
                        </router-link>
                    </div>
                </div>

                <!-- Immagine -->
                <div class="col-md-6 text-center">
                    <div class="photo-wrapper rounded shadow-sm overflow-hidden d-inline-block">
                        <img src="../assets/chi-siamo.jpg" alt="Foto del gruppo Insieme per Spoleto"
                            class="photo img-fluid" loading="lazy" />
                        <div class="photo-overlay"></div>
                    </div>

                    <!-- Pill valori -->
                    <div class="d-flex justify-content-center gap-2 flex-wrap mt-3">
                        <span class="pill">Trasparenza</span>
                        <span class="pill">Partecipazione</span>
                        <span class="pill">Concretezza</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .overline {
        letter-spacing: .12em;
        font-size: .8rem;
        color: #6c757d;
    }

    .title-underline {
        position: relative;
        padding-bottom: .35rem;
    }

    .title-underline::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 64px;
        height: 3px;
        background: var(--brand-red, #d40000);
        border-radius: 2px;
    }

    .text-brand {
        color: var(--brand-red, #d40000);
    }

    /* Foto */
    .photo-wrapper {
        position: relative;
        background: #000;
    }

    .photo {
        width: 100%;
        height: auto;
        max-height: 450px;
        object-fit: cover;
        object-position: center top;
        filter: brightness(.95);
        transition: transform .6s ease, filter .6s ease;
    }

    .photo-overlay {
        position: absolute;
        inset: 0;
        background: rgba(212, 0, 0, 0.10);
        mix-blend-mode: multiply;
        transition: opacity .4s ease;
    }

    .photo-wrapper:hover .photo {
        transform: scale(1.03);
        filter: brightness(1);
    }

    .photo-wrapper:hover .photo-overlay {
        opacity: .06;
    }

    /* Pill valori */
    .pill {
        display: inline-block;
        padding: .35rem .6rem;
        border-radius: 999px;
        font-size: .85rem;
        background: color-mix(in oklab, var(--brand-blue, #0d6efd) 12%, white);
        color: color-mix(in oklab, var(--brand-blue, #0d6efd) 80%, black);
    }
</style>
