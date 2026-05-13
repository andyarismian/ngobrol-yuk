<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import Question from '@/components/QuestionComponent.vue'

const route = useRoute()
const id = route.params.id

const title = ref('')

onMounted(async () => {
    const data = await import(`@/assets/data/${id}.json`)
    title.value = data.text;
    console.log(data);

})

</script>
<<template>
    <div id="main">
        <div id="top">
            <RouterLink to="/ngobrol" class="btn btn-secondary border-pixel-sm">
                <!-- https://feathericons.dev/?search=arrow-left&iconset=feather -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2">
                    <line x1="19" x2="5" y1="12" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
            </RouterLink>
            <div class="card border-pixel bg-neutral-100" style="width: 100%;">
                <div class="card-body">
                    {{ title }}
                </div>
            </div>
        </div>
        <div class="mt-5">
            <Question question="a" id="question">

            </Question>
            <button class="btn btn-primary btn-full mt-4">
                Pertanyaan lain
            </button>
        </div>
    </div>
</template>
    <style scoped>
    #main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 1rem;
    }

    #top {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    .card-body {
        font-size: 1rem;
        font-weight: bold;
    }

    #question {
        margin-top: 2rem;
    }
</style>