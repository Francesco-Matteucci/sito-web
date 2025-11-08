<template>
    <div class="container py-5">
        <h1 class="h2 mb-4 text-center">Consiglieri</h1>

        <div class="row g-4 justify-content-center">
            <div v-for="p in people" :key="p.name" class="col-12 col-sm-6 col-lg-4">
                <div class="card text-center h-100 border-0 shadow-sm py-4">
                    <div class="d-flex justify-content-center mb-3">
                        <div class="circle-wrapper">
                            <img v-if="p.photo" :src="p.photo" :alt="p.name" class="circle-img" loading="lazy" />
                            <i v-else class="bi bi-person-circle fs-1 text-muted"></i>
                        </div>
                    </div>

                    <div class="card-body">
                        <h3 class="h5 mb-1">{{ p.name }}</h3>
                        <p class="text-muted small mb-2">{{ p.role }}</p>
                        <p class="mb-0">{{ p.bio }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import peopleData from '../data/consiglieri.json'

    export default {
        data() {
            return {
                people: peopleData.map(p => ({
                    ...p,
                    photo: p.photo ? new URL(`../assets/${p.photo}`, import.meta.url).href : null
                }))
            }
        }
    }
</script>

<style scoped>
    .circle-wrapper {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid var(--brand-red, #c00);
        background: #f8f9fa;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .circle-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card {
        transition: transform 0.12s ease;
    }

    .card:hover {
        transform: translateY(-2px);
    }
</style>
