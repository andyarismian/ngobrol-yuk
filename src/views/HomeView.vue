<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <div id="main">
        <div class="card border-pixel bg-neutral-100">
            <div class="card-body">
                <h2>Selamat datang di <strong>Ngobrol Yuk!</strong></h2>
                <p>Ngobrol Yuk! adalah aplikasi berbasis card berisi kata-kata untuk menjadi konten pembicaraan agar kalian bisa bersoasialisasi lebih menarik.</p>
                <ul>
                    <li><strong>Obrolan pasangan:</strong> berisi konten yang cocok untuk obrolan antara pasangan.</li>
                    <li><strong>Obrolan teman:</strong> berisi konten yang cocok untuk obrolan antara teman.</li>
                    <li><strong>Obrolan orang tua dan anak:</strong> berisi konten yang cocok untuk obrolan antara orang tua dan anak.</li>
                </ul>
            </div>
        </div>

        <div class="home-menu">
            <RouterLink class="btn btn-full btn-primary menu-link border-pixel-sm active" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Mulai Ngobrol
            </RouterLink>
            <RouterLink class="btn btn-full btn-secondary menu-link border-pixel-sm active" to="/">
                <!-- https://feathericons.dev/?search=heart&iconset=feather -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Cek Keharmonisan
            </RouterLink>
        </div>

        <div class="card border-pixel bg-neutral-100">
            <div class="card-header bg-primary text-white">
                <!-- https://feathericons.dev/?search=award&iconset=feather -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                Tips Hari ini
            </div>
            <div class="card-body">
                <h3>Kenapa harus <strong>Ngobrol Yuk!</strong>?</h3>
                <p>Kami percaya bahwa komunikasi yang baik adalah kunci untuk membangun hubungan yang sehat dan bahagia. Dengan menggunakan aplikasi kami, Anda dapat memperkuat ikatan dengan pasangan, teman, atau keluarga Anda melalui percakapan yang menyenangkan dan bermakna.</p>
        
            </div>
        </div>
    </div>
</template>
<style scoped>
    #main {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        min-height: 100vh;
    }
    strong {
        color: var(--primary-500);
    }
    .home-menu{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 1rem 0;
    }
</style>