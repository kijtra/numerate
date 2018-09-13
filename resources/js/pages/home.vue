<template>
    <div>
        <div v-for="item in items" :key="item.id">
            {{item.name}}<button @click.prevent="remove(item.id)">&times;</button>
        </div>
        <hr>
        <button @click.prevent="add()">add</button>
        <hr>
        <router-link :to="{name:'test'}">test</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    metaInfo () {
        return { title: this.$t('home') }
    },

    computed: {
        ...mapGetters({
            items: 'items/all',
        }),
    },

    methods: {
        add() {
            let id = Math.floor(Math.random() * Math.floor(100000));
            this.$store.dispatch('items/add', {
                id:id,
                name:'test'+id
            })
        },
        update(item) {
            this.$store.dispatch('items/update', item.id, item)
        },
        remove(id) {
            this.$store.dispatch('items/remove', id)
        }
    }
}
</script>
