<template>
    <section class="bg-light border-bottom">
        <div class="container py-5">
            <p class="overline text-uppercase mb-2 text-center">Contatti</p>
            <h1 class="display-6 fw-bold mb-3 title-underline text-center">Resta in contatto</h1>

            <p class="lead text-center mb-5">
                Scrivici per informazioni, proposte o segnalazioni. Siamo disponibili al confronto.
            </p>

            <div class="row g-5 justify-content-center">
                <div class="col-md-5">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex align-items-start mb-3">
                                    <i class="bi bi-envelope-fill me-2 text-brand"></i>
                                    <a href="mailto:insiemeperspoleto@gmail.com" class="text-decoration-none">
                                        insiemeperspoleto@gmail.com
                                    </a>
                                </li>
                                <li class="d-flex align-items-start mb-3">
                                    <i class="bi bi-geo-alt-fill me-2 text-brand"></i>
                                    <span>Spoleto (PG), Umbria</span>
                                </li>
                                <li class="d-flex align-items-start mb-3">
                                    <i class="bi bi-facebook me-2 text-brand"></i>
                                    <a href="#" class="text-decoration-none">Facebook ufficiale</a>
                                </li>
                            </ul>

                            <div class="d-flex gap-2 mt-4">
                                <a href="mailto:insiemeperspoleto@gmail.com" class="btn btn-primary">
                                    Scrivi una mail
                                </a>
                                <router-link to="/programma" class="btn btn-outline-primary">
                                    Vedi il programma
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="ratio ratio-16x9 shadow-sm rounded overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.963083771038!2d12.735!3d42.733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f1e4a3c9d6c7f%3A0xf7e4c8287b4a06b!2sSpoleto%2C%20PG!5e0!3m2!1sit!2sit!4v0000000000000!5m2!1sit!2sit"
                            width="600" height="450" style="border:0;" allowfullscreen loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
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
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 64px;
        height: 3px;
        background: var(--brand-red, #d40000);
        border-radius: 2px;
    }

    .text-brand {
        color: var(--brand-red, #d40000);
    }
</style>
