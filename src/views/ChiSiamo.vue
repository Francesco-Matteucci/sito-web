<template>
    <section class="bg-light border-bottom">
        <div class="container py-5">
            <div class="row align-items-center g-5">
                <div class="col-md-6">
                    <h1 class="h2 mb-4">Chi siamo</h1>
                    <p class="lead mb-4">
                        <strong>Insieme per Spoleto</strong> è un gruppo consiliare formato da persone con esperienze
                        diverse ma unite da un obiettivo comune: costruire una città più giusta, moderna e partecipata.
                    </p>
                    <p>
                        Crediamo nella trasparenza, nel dialogo con i cittadini e nella forza delle idee condivise.
                        Ogni proposta nasce dall’ascolto del territorio e dalla collaborazione con la comunità.
                    </p>
                </div>

                <div class="col-md-6 text-center">
                    <div class="photo-wrapper rounded shadow-sm overflow-hidden d-inline-block">
                        <img src="../assets/chi-siamo.jpg" alt="Foto del gruppo Insieme per Spoleto"
                            class="photo img-fluid" loading="lazy" />
                        <div class="photo-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .photo-wrapper {
        position: relative;
        display: inline-block;
        background: #000;
    }

    .photo {
        width: 100%;
        height: auto;
        max-height: 450px;
        object-fit: cover;
        object-position: center top;
        filter: brightness(0.95);
        transition: transform 0.6s ease, filter 0.6s ease;
    }

    .photo-overlay {
        position: absolute;
        inset: 0;
        background: rgba(212, 0, 0, 0.1);
        mix-blend-mode: multiply;
        transition: opacity 0.4s ease;
    }

    .photo-wrapper:hover .photo {
        transform: scale(1.03);
        filter: brightness(1);
    }

    .photo-wrapper:hover .photo-overlay {
        opacity: 0.05;
    }
</style>
