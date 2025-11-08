<template>
    <footer class="bg-dark text-light py-4 mt-5">
        <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <div class="small">© {{ new Date().getFullYear() }} {{ brand }}</div>
            <div class="small">
                <a class="link-light me-3" href="#">Privacy</a>
                <a class="link-light" href="#">Cookie</a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() { return { brand: 'Insieme per Spoleto' } }
    }
</script>
