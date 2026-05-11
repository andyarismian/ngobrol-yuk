<script setup lang="ts">
const listMenu = [
    {
        name: 'Obrolan Pasangan',
        icon: 'heart',
        link: '/ngobrol/pasangan'
    },
    {
        name: 'Obrolan Suam-istri',
        icon: 'family',
        link: '/ngobrol/suami-istri'
    },
    {
        name: 'Obrolan Orang Tua dan Anak',
        icon: 'family',
        link: '/ngobrol/orangtua-anak'
    },
    {
        name: 'Obrolan Teman',
        icon: 'users',
        link: '/ngobrol/teman'
    }
]
</script>
<<template>
    <div id="main">
        
    </div>
</template>
<style scoped>
#main {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    min-height: 100vh;
}
</style>