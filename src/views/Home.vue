<template>
    <div>
        <!-- HERO (boxed) -->
        <section class="py-4">
            <div class="container">
                <div class="hero-box position-relative overflow-hidden rounded-4 shadow-sm">
                    <div class="hero-bg"></div>
                    <div class="hero-overlay"></div>
                    <div class="hero-content text-center text-light position-relative">
                        <h1 class="hero-title display-6 fw-bold mb-3">Insieme per Spoleto</h1>
                        <p class="hero-subtitle lead mb-4">
                            Un gruppo consiliare al servizio della città, per una Spoleto più giusta, trasparente e
                            partecipata.
                        </p>
                        <router-link to="/programma" class="btn btn-light btn-lg px-4 fw-semibold">
                            Scopri il nostro programma
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- ULTIMI COMUNICATI -->
        <section class="container py-5">
            <h2 class="h3 mb-4 text-center text-uppercase">Ultimi comunicati stampa</h2>

            <div v-if="latestComunicati.length" class="row g-4">
                <div v-for="c in latestComunicati" :key="c.id" class="col-md-4">
                    <div class="card h-100 shadow-sm border-0">
                        <div class="card-body">
                            <h3 class="h5">{{ c.title }}</h3>
                            <p class="small text-muted mb-2">{{ formatDate(c.date) }}</p>
                            <p class="mb-3">{{ c.summary }}</p>
                            <a :href="c.pdfUrl" target="_blank" class="btn btn-outline-primary btn-sm">
                                <i class="bi bi-file-earmark-pdf me-1"></i>Leggi il comunicato
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="text-center text-muted py-5">
                Nessun comunicato disponibile al momento.
            </div>

            <div class="text-center mt-5">
                <router-link to="/comunicati" class="btn btn-primary px-4">
                    Tutti i comunicati
                </router-link>
            </div>
        </section>
        <!-- PROGRAMMA IN EVIDENZA -->
        <section class="bg-light py-5">
            <div class="container">
                <h2 class="h3 mb-4 text-center text-uppercase">Programma in evidenza</h2>

                <div class="row g-4">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body">
                                <div class="icon-pill mb-3"><i class="bi bi-hospital"></i></div>
                                <h3 class="h6 mb-2">Sanità e territorio</h3>
                                <p class="mb-3 small">Difesa e potenziamento dei servizi sanitari cittadini,
                                    accessibilità e prevenzione.</p>
                                <router-link to="/programma" class="stretched-link small">Approfondisci</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body">
                                <div class="icon-pill mb-3"><i class="bi bi-mortarboard"></i></div>
                                <h3 class="h6 mb-2">Scuola e giovani</h3>
                                <p class="mb-3 small">Edilizia scolastica, sport e opportunità formative per i più
                                    giovani.</p>
                                <router-link to="/programma" class="stretched-link small">Approfondisci</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body">
                                <div class="icon-pill mb-3"><i class="bi bi-building"></i></div>
                                <h3 class="h6 mb-2">Sviluppo locale</h3>
                                <p class="mb-3 small">Sostegno a imprese, turismo e cultura per rilanciare l’economia
                                    cittadina.</p>
                                <router-link to="/programma" class="stretched-link small">Approfondisci</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="card-body">
                                <div class="icon-pill mb-3"><i class="bi bi-bus-front"></i></div>
                                <h3 class="h6 mb-2">Mobilità e ambiente</h3>
                                <p class="mb-3 small">Trasporti sostenibili, piste ciclabili e cura del verde pubblico.
                                </p>
                                <router-link to="/programma" class="stretched-link small">Approfondisci</router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-4">
                    <router-link to="/programma" class="btn btn-primary px-4">Tutto il programma</router-link>
                </div>
            </div>
        </section>
        <!-- GALLERIA / EVENTI -->
        <section class="py-5">
            <div class="container">
                <h2 class="h3 mb-4 text-center text-uppercase">Dal territorio</h2>

                <div class="row g-4">
                    <div class="col-12 col-md-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="ratio ratio-16x9 bg-light">
                                <img src="../assets/evento-1.jpg" alt="Incontro con i cittadini a Monteluco"
                                    class="w-100 h-100 obj-cover" loading="lazy">
                            </div>
                            <div class="card-body">
                                <h3 class="h6 mb-1">Incontro con i cittadini</h3>
                                <p class="small text-muted mb-2">Monteluco · 25/09/2025</p>
                                <p class="small mb-0">Ascolto, proposte e priorità per la città.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="ratio ratio-16x9 bg-light">
                                <img src="../assets/evento-2.jpg" alt="Sopralluogo impianti sportivi"
                                    class="w-100 h-100 obj-cover" loading="lazy">
                            </div>
                            <div class="card-body">
                                <h3 class="h6 mb-1">Impianti sportivi</h3>
                                <p class="small text-muted mb-2">Spoleto · 30/10/2025</p>
                                <p class="small mb-0">Sopralluogo e richieste di trasparenza sull’uso delle palestre.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="card h-100 border-0 shadow-sm">
                            <div class="ratio ratio-16x9 bg-light">
                                <img src="../assets/evento-3.jpg" alt="Tavolo sulla sanità locale"
                                    class="w-100 h-100 obj-cover" loading="lazy">
                            </div>
                            <div class="card-body">
                                <h3 class="h6 mb-1">Sanità e territorio</h3>
                                <p class="small text-muted mb-2">Spoleto · 17/10/2025</p>
                                <p class="small mb-0">Proposte concrete per il San Matteo degli Infermi.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-4">
                    <a href="#" target="_blank" rel="noopener" class="btn btn-outline-primary px-4">
                        Vedi altri scatti su Facebook
                    </a>
                </div>
            </div>
        </section>

        <!-- ANTEPRIMA CHI SIAMO -->
        <section class="bg-light py-5 text-center">
            <div class="container">
                <h2 class="h3 mb-3">Chi siamo</h2>
                <p class="lead mx-auto" style="max-width: 700px;">
                    Insieme per Spoleto è un gruppo consiliare civico nato per promuovere trasparenza, dialogo e
                    concretezza nelle istituzioni cittadine.
                </p>
                <router-link to="/chi-siamo" class="btn btn-outline-primary">Scopri di più</router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import comunicatiData from '../data/comunicati.json'

    export default {
        data() {
            return {
                comunicati: comunicatiData
            }
        },
        computed: {
            latestComunicati() {
                return [...this.comunicati]
                    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                    .slice(0, 3)
            }
        },
        methods: {
            formatDate(iso) {
                const d = new Date(iso)
                return d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })
            }
        }
    }
</script>

<style scoped>

    /* Box hero con confini chiari */
    .hero-box {
        min-height: 420px;
        /* altezza elegante*/
    }

    /* Immagine di sfondo*/
    .hero-bg {
        position: absolute;
        inset: 0;
        background: url('../assets/spoleto-bg.jpeg') center/cover no-repeat;
        filter: saturate(95%);
        transform: scale(1.02);
        /* micro-zoom per evitare bordi vuoti */
    }

    /* Velo per leggibilità del testo */
    .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg,
                rgba(0, 0, 0, .35) 0%,
                rgba(0, 0, 0, .25) 40%,
                rgba(0, 0, 0, .45) 100%);
    }

    /* Contenuto centrato */
    .hero-content {
        position: relative;
        padding: 80px 24px;
    }

    .hero-title {
        color: #d40000;
        font-weight: 700;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }

    .hero-subtitle {
        color: #fff;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    }

    /* Responsive */
    @media (max-width: 575.98px) {
        .hero-box {
            min-height: 360px;
        }

        .hero-content {
            padding: 60px 18px;
        }
    }

    .icon-pill {
        width: 44px;
        height: 44px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--brand-red);
        color: #fff;
        font-size: 1.2rem;
    }

    .obj-cover {
        object-fit: cover;
    }
</style>
