<template>
    <div class="container py-5">
        <h1 class="h2 mb-4">Comunicati stampa</h1>

        <div v-if="loading" class="text-muted">Caricamento…</div>

        <div v-else>
            <div v-if="sortedComunicati.length" class="list-group">
                <a v-for="c in sortedComunicati" :key="c.id"
                    class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                    :href="c.pdfUrl || '#'" :target="c.pdfUrl ? '_blank' : null" :rel="c.pdfUrl ? 'noopener' : null"
                    :class="{ 'disabled': !c.pdfUrl }">
                    <div class="me-3">
                        <div class="fw-semibold">{{ c.title }}</div>
                        <div class="small text-muted">{{ formatDate(c.date) }}</div>
                        <p class="mb-1 mt-2">{{ c.summary }}</p>
                        <span v-if="!c.pdfUrl" class="badge text-bg-secondary">PDF non disponibile</span>
                    </div>
                    <i class="bi bi-file-earmark-pdf fs-4" v-if="c.pdfUrl"></i>
                </a>
            </div>

            <div v-else class="alert alert-info">
                Nessun comunicato disponibile al momento.
            </div>
        </div>
    </div>
</template>

<script>
    import comunicatiData from '../data/comunicati.json'

    export default {
        data() { return { loading: true, comunicati: [] } },
        mounted() {
            this.comunicati = comunicatiData
            this.loading = false
        },
        computed: {
            sortedComunicati() {
                // copia + sort per non mutare l'array originale
                return [...this.comunicati].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
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
