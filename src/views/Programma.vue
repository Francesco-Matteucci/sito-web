<template>
    <div class="container py-5">
        <h1 class="h2 mb-4 text-center">Programma</h1>

        <p class="lead text-center mb-5">
            I punti cardine del nostro impegno per una città più trasparente, sostenibile e vicina ai cittadini.
        </p>

        <ul class="list-group list-group-flush shadow-sm">
            <li class="list-group-item py-3" v-for="(p, i) in punti" :key="i">
                <strong class="me-2 text-primary">#{{ i + 1 }}</strong> {{ p }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                punti: [
                    "Scuole sicure e moderne: manutenzione, efficienza energetica e accessibilità.",
                    "Quartieri partecipativi: incontri periodici e ascolto diretto dei cittadini.",
                    "Ambiente e mobilità sostenibile: piste ciclabili, spazi verdi, trasporti ecologici.",
                    "Trasparenza amministrativa: pubblicazione dei bilanci e delle attività consiliari.",
                    "Cultura e turismo: valorizzare eventi e patrimonio storico della città."
                ]
            }
        }
    }
</script>
