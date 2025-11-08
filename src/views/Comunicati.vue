<template>
    <section class="container py-5">
        <h1 class="display-6 fw-bold mb-4">Comunicati stampa</h1>

        <div v-if="items.length" class="press-list">
            <article v-for="c in items" :key="c.id" class="press-item card border-0 shadow-sm">
                <div class="card-body d-flex align-items-start gap-3">
                    <!-- Accento a sinistra (gestito via CSS ::before) -->

                    <div class="grow">
                        <h2 class="h5 fw-semibold mb-1">
                            <a :href="c.pdfUrl" target="_blank" rel="noopener" class="press-link">
                                {{ c.title }}
                            </a>
                        </h2>

                        <div class="d-flex align-items-center gap-2 mb-2">
                            <span class="date-badge">
                                {{ formatDate(c.date) }}
                            </span>
                        </div>

                        <p class="mb-0 text-secondary">
                            {{ c.summary }}
                        </p>
                    </div>

                    <div class="ms-auto">
                        <a :href="c.pdfUrl" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm"
                            :aria-label="`Apri PDF: ${c.title}`" title="Apri PDF">
                            <i class="bi bi-file-earmark-pdf"></i>
                        </a>
                    </div>
                </div>
            </article>
        </div>

        <div v-else class="text-muted">
            Nessun comunicato disponibile.
        </div>
    </section>
</template>

<script>
    import comunicati from '../data/comunicati.json'

    export default {
        name: 'Comunicati',
        data() {
            return { comunicati }
        },
        computed: {
            items() {
                return [...this.comunicati].sort(
                    (a, b) => Date.parse(b.date) - Date.parse(a.date)
                )
            }
        },
        methods: {
            formatDate(iso) {
                const d = new Date(iso)
                return d.toLocaleDateString('it-IT', {
                    day: '2-digit', month: '2-digit', year: 'numeric'
                })
            }
        }
    }
</script>

<style scoped>

    /* Contenitore lista: spaziatura tra card */
    .press-list {
        display: grid;
        gap: 12px;
    }

    /* Card con accento a sinistra */
    .press-item {
        position: relative;
        overflow: hidden;
        transition: transform 120ms ease, box-shadow 120ms ease;
    }

    /* Barra d’accento a sinistra */
    .press-item::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 4px;
        background: var(--brand-red);
    }

    /* Hover delicato e focus state */
    .press-item:hover,
    .press-item:focus-within {
        transform: translateY(-2px);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .07);
    }

    /* Link titolo: blu brand, underline solo on hover */
    .press-link {
        color: var(--brand-blue);
        text-decoration: none;
    }

    .press-link:hover {
        color: var(--brand-blue-700);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    /* Badge data: pill tenue con blu brand */
    .date-badge {
        display: inline-block;
        padding: .25rem .5rem;
        border-radius: 999px;
        font-size: .85rem;
        background: color-mix(in oklab, var(--brand-blue) 12%, white);
        color: var(--brand-blue-700);
    }

    /* Piccolo affinamento testo */
    .text-secondary {
        color: #667085 !important;
        /* neutro elegante */
    }

    /* Mobile: riduco gap e alzo leggibilità */
    @media (max-width: 575.98px) {
        .press-list {
            gap: 10px;
        }

        .date-badge {
            font-size: .8rem;
        }
    }
</style>
