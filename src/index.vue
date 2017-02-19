<template>
    <div>
        <ul>
            <router-link :to = "{path:'/repository'}">
                <md-button href="#/repository"  class="md-raised md-primary">View your respository</md-button>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                msg: ''
            }
        }
    }
</script>