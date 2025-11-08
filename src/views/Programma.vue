<template>
    <section class="bg-light border-bottom">
        <div class="container py-5">
            <p class="overline text-uppercase mb-2 text-center">Linee programmatiche</p>
            <h1 class="display-6 fw-bold mb-3 title-underline text-center">Programma</h1>

            <p class="lead text-center mb-5">
                I punti cardine del nostro impegno per una città più trasparente, sostenibile e vicina ai cittadini.
            </p>

            <div class="row g-3">
                <div class="col-12" v-for="(p, i) in punti" :key="i">
                    <article class="program-item card border-0 shadow-sm">
                        <div class="card-body d-flex align-items-start gap-3">
                            <span class="num-pill">#{{ i + 1 }}</span>
                            <p class="mb-0">{{ p }}</p>
                        </div>
                    </article>
                </div>
            </div>

            <div class="text-center mt-4">
                <router-link to="/consiglieri" class="btn btn-outline-primary px-4">I consiglieri</router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                punti: [
                    'Scuole sicure e moderne: manutenzione, efficienza energetica e accessibilità.',
                    'Quartieri partecipativi: incontri periodici e ascolto diretto dei cittadini.',
                    'Ambiente e mobilità sostenibile: piste ciclabili, spazi verdi, trasporti ecologici.',
                    'Trasparenza amministrativa: pubblicazione dei bilanci e delle attività consiliari.',
                    'Cultura e turismo: valorizzare eventi e patrimonio storico della città.'
                ]
            }
        }
    }
</script>

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
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 64px;
        height: 3px;
        background: var(--brand-red, #d40000);
        border-radius: 2px;
    }

    .program-item {
        position: relative;
        overflow: hidden;
    }

    .program-item::before {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 4px;
        background: var(--brand-red, #d40000);
    }

    .num-pill {
        display: inline-block;
        min-width: 44px;
        text-align: center;
        padding: .25rem .55rem;
        border-radius: 999px;
        font-weight: 600;
        background: color-mix(in oklab, var(--brand-blue, #0d6efd) 12%, white);
        color: color-mix(in oklab, var(--brand-blue, #0d6efd) 80%, black);
    }
</style>
