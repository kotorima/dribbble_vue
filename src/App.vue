<template>
  <div id="app">
    <app-header></app-header>
        <div class="loader">
            <div class="point">
                <div class="one"></div>
                <div class="two"></div>
                <div class="three"></div>
            </div>
            <p>Loading...</p>
        </div>
        <main>
        </main>
        <div class="close">
            <figure class="pop-up">
            </figure>
        </div>
        <ul class="pages">
        </ul>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
  data () {
    return {
     
    }
  },
  components:  {
    'app-header': Header
  }
}
</script>

<style>

</style>
