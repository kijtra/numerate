<template>
    <div>
        <vs-row v-show="currentTab">
            <vs-tabs :vs-color="colorx" vs-position="left">
                <vs-tab @click="tabClick('simple')" :vs-label="$t('Simple')" ref="new">
                    <new-item-simple></new-item-simple>
                </vs-tab>
                <vs-tab @click="tabClick('goal')" :vs-label="$t('Goal')" ref="new">
                    <new-item-goal></new-item-goal>
                </vs-tab>
            </vs-tabs>
        </vs-row>
        <vs-row vs-justify="center">
            <vs-button v-show="!currentTab" vs-color="dark" vs-type="filled" vs-icon="add" @click.prevent="currentTab='simple'"></vs-button>
            <vs-button v-show="currentTab" vs-color="danger" vs-type="filled" vs-icon="clear" @click.prevent="currentTab=null"></vs-button>
        </vs-row>

        <div v-for="item in items" :key="item.id">
            #{{item.id}}:{{item.title}}:{{item.count}}:{{item.created_at | date.local}}<button @click.prevent="remove(item.id)">&times;</button>
        </div>
        <hr>
        <button @click.prevent="add()">add</button>
        <hr>
        <router-link :to="{name:'welcome'}">welcome</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    metaInfo () {
        return { title: this.$t('home') }
    },

    data() {
        return {
            colorx:'success',
            currentTab: null
        }
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
        },

        tabClick(type) {
            console.log(this.$refs)
            this.currentTab = type;
        }
    }
}
</script>
