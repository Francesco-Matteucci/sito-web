<template>
    <section class="container py-5">
        <h1 class="display-6 fw-bold mb-4">Comunicati stampa</h1>

        <div v-if="items.length" class="press-list">
            <article v-for="c in items" :key="c.id" class="press-item card border-0 shadow-sm">
                <div class="card-body d-flex align-items-start gap-3">

                    <div class="grow">
                        <h2 class="h5 fw-semibold mb-1">
                            <!-- apre il modale -->
                            <button type="button" class="btn-reset press-link" @click="open(c)">
                                {{ c.title }}
                            </button>
                        </h2>

                        <div class="d-flex align-items-center gap-2 mb-2">
                            <span class="date-badge">{{ formatDate(c.date) }}</span>
                        </div>

                        <p class="mb-0 text-secondary">{{ c.summary }}</p>
                    </div>

                    <div class="ms-auto">
                        <!-- anche questo apre il modale -->
                        <button type="button" class="btn btn-outline-primary btn-sm"
                            :aria-label="`Apri anteprima: ${c.title}`" title="Anteprima" @click="open(c)">
                            <i class="bi bi-eye"></i>
                        </button>
                    </div>
                </div>
            </article>
        </div>

        <div v-else class="text-muted">Nessun comunicato disponibile.</div>

        <!-- MODALE -->
        <div v-if="selected" class="press-modal" role="dialog" aria-modal="true" :aria-label="selected.title"
            @keydown.esc="close">
            <div class="press-modal__backdrop" @click.self="close">
                <div class="press-modal__card shadow-lg">
                    <div class="press-modal__header">
                        <h3 class="h5 mb-1">{{ selected.title }}</h3>
                        <span class="date-badge">{{ formatDate(selected.date) }}</span>
                    </div>

                    <div class="press-modal__body">
                        <p class="mb-0">{{ selected.summary }}</p>
                    </div>

                    <div class="press-modal__footer">
                        <a :href="selected.pdfUrl" target="_blank" rel="noopener" class="btn btn-primary">
                            <i class="bi bi-file-earmark-pdf me-1"></i>
                            Apri PDF completo
                        </a>
                        <button type="button" class="btn btn-outline-secondary" @click="close">
                            Chiudi
                        </button>
                    </div>


                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import comunicati from '../data/comunicati.json'

    export default {
        name: 'Comunicati',
        data() {
            return {
                comunicati,
                selected: null
            }
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
            },
            open(c) {
                this.selected = c
                document.documentElement.style.overflow = 'hidden'  // blocca scroll sotto
            },
            close() {
                this.selected = null
                document.documentElement.style.overflow = ''        // ripristina scroll
            }
        }
    }
</script>

<style scoped>

    /* ====== LISTA ====== */
    .press-list {
        display: grid;
        gap: 12px;
    }

    .press-item {
        position: relative;
        overflow: hidden;
        transition: transform 120ms ease, box-shadow 120ms ease;
    }

    .press-item::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 4px;
        background: var(--brand-red);
    }

    .press-item:hover,
    .press-item:focus-within {
        transform: translateY(-2px);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .07);
    }

    /* link come bottone “piatto” */
    .btn-reset {
        background: transparent;
        border: 0;
        padding: 0;
    }

    .press-link {
        color: var(--brand-blue);
        text-decoration: none;
        cursor: pointer;
    }

    .press-link:hover {
        color: var(--brand-blue-700);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .date-badge {
        display: inline-block;
        padding: .25rem .5rem;
        border-radius: 999px;
        font-size: .85rem;
        background: color-mix(in oklab, var(--brand-blue) 12%, white);
        color: var(--brand-blue-700);
    }

    .text-secondary {
        color: #667085 !important;
    }

    @media (max-width: 575.98px) {
        .press-list {
            gap: 10px;
        }

        .date-badge {
            font-size: .8rem;
        }
    }

    /* ====== MODALE ====== */
    .press-modal {
        position: fixed;
        inset: 0;
        z-index: 1050;
    }

    .press-modal__backdrop {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, .5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .press-modal__card {
        position: relative;
        width: 100%;
        max-width: 720px;
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        animation: pop .14s ease-out;
    }

    @keyframes pop {
        from {
            transform: translateY(6px);
            opacity: .8;
        }

        to {
            transform: none;
            opacity: 1;
        }
    }

    .press-modal__header {
        padding: 18px 20px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .06);
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .press-modal__body {
        padding: 16px 20px;
    }

    .press-modal__footer {
        padding: 14px 20px 18px;
        border-top: 1px solid rgba(0, 0, 0, .06);
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        flex-wrap: wrap;
    }

    .press-modal__close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #fff;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 8px;
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
    }

    .press-modal__close:hover {
        background: #f6f6f6;
    }
</style>
