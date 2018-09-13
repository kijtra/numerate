<template>
    <div>
        welcome
        <hr>
        <router-link :to="{name:'home'}">app</router-link>
    </div>
</template>

<script>
export default {
    metaInfo () {
        return { title: this.$t('welcome') }
    },
}
</script>
