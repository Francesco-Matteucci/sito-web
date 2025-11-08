<template>
    <div class="container py-5">
        <h1 class="h2 mb-4">Consiglieri</h1>

        <div class="row g-4">
            <div class="col-md-4" v-for="p in people" :key="p.name">
                <div class="card h-100 shadow-sm border-0">
                    <img v-if="p.photo" :src="p.photo" class="card-img-top" :alt="p.name">
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
