<template>
    <div>
        <h1> Create Movie</h1>

        <hr>
        <section class="row">
            <section class="col-md-4">
                <form @submit.prevent="addMovie()">
                    <section class="form-group">
                        <CustomInput :labelClass="['control-label']" label="Title" class="form-control" v-model.trim="movie.title" type="text" />
                    </section>
                    <section class="form-group">
                        <CustomInput :labelClass="['control-label']" label="Release Date" class="form-control" v-model="movie.releaseDate" type="text" />
                    </section>
                    <section class="form-group">
                        <CustomInput :labelClass="['control-label']" label="Genre" class="form-control" v-model.trim="movie.genre" type="text" />
                    </section>
                    <section class="form-group">
                        <CustomInput :labelClass="['control-label']" label="Price" class="form-control" v-model.number="movie.price" type="number" />
                    </section>
                    <section class="form-group">
                        <button class="btn btn-primary" type="submit">Create</button>
                    </section>
                </form>
            </section>
        </section>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {Movie} from '../../models/movie'
export default {
    name: 'MovieCreate',
    setup () {
        let movie = new Movie();
        let addMovie = () => {
            console.log(movie);
        }
        const pageState = reactive({
            movie,
            addMovie
        });
        return { ...toRefs(pageState)}
    }
}
</script>

<style scoped>

</style>