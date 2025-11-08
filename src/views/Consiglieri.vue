<template>
    <div class="container py-5">
        <h1 class="h2 mb-4 text-center">Consiglieri</h1>

        <div class="row g-4">
            <div v-for="p in people" :key="p.name" class="col-12 col-sm-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="ratio ratio-16x9 bg-light">
                        <img v-if="p.photo" :src="p.photo" :alt="p.name" class="w-100 h-100 object-cover"
                            loading="lazy" />
                        <div v-else class="d-flex align-items-center justify-content-center">
                            <i class="bi bi-person-circle fs-1 text-muted"></i>
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
    import people from '../data/consiglieri.json'

    export default {
        data() {
            return { people }
        }
    }
</script>

<style scoped>
    .object-cover {
        object-fit: cover;
    }

    .card {
        transition: transform .12s ease;
    }

    .card:hover {
        transform: translateY(-2px);
    }
</style>
