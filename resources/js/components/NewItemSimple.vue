<template>
<section class="newitem">
    <vs-row>
        <vs-col vs-type="flex" vs-w="12">
            <vs-input :vs-label="$t('Title')" v-model="form.title" :vs-danger="!!invalid.title"/>
        </vs-col>
    </vs-row>
    <vs-row>
        <vs-col vs-type="flex" vs-w="12">
            <vs-input type="number" :vs-label="$t('Start')" v-model="form.count"/>
        </vs-col>
    </vs-row>
    <vs-row vs-justify="center">
        <vs-col vs-w="12">
            <vs-button vs-color="primary" vs-type="filled" vs-icon="check" @click.prevent="add()"></vs-button>
        </vs-col>
    </vs-row>
</section>
</template>
<script>
export default {
    name: 'new-item-simple',

    data() {
        return {
            form: {
                type: 'simple',
                title: '',
                count: 0,
            },
            invalid: {}
        }
    },

    methods: {
        add() {
            let success = true
            this.invalid = {}
            if (!this.form.title) {
                this.invalid.title = true
                success = false
            }
            if (success) {
                this.$store.dispatch('items/add', this.form).then(() => {
                    this.form = {
                type: 'simple',
                title: '',
                count: 0,
            }
                })
            }
        }
    }
}
</script>
