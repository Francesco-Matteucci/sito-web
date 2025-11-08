<template>
    <div class="container py-5">
        <h1 class="h2 mb-4">Comunicati stampa</h1>

        <div v-if="loading" class="text-muted">Caricamento…</div>

        <div class="list-group" v-else>
            <a v-for="c in comunicati" :key="c.id"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                :href="c.pdfUrl" target="_blank" rel="noopener">
                <div class="me-3">
                    <div class="fw-semibold">{{ c.title }}</div>
                    <div class="small text-muted">{{ formatDate(c.date) }}</div>
                    <p class="mb-1 mt-2">{{ c.summary }}</p>
                </div>
                <i class="bi bi-file-earmark-pdf fs-4"></i>
            </a>
        </div>
    </div>
</template>

<script>
    import comunicatiData from '../data/comunicati.json'

    export default {
        data() { return { loading: true, comunicati: [] } },
        mounted() {
            // simuliamo una fetch locale
            this.comunicati = comunicatiData
            this.loading = false
        },
        methods: {
            formatDate(iso) {
                const d = new Date(iso)
                return d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' })
            }
        }
    }
</script>
