<template>
<section class="newitem">
    <vs-row>
        <vs-col vs-type="flex" vs-w="12">
            <vs-input :vs-label="$t('Title')" v-model="form.title"/>
        </vs-col>
    </vs-row>
    <vs-row>
        <vs-col vs-type="flex" vs-w="12">
            <vs-input type="number" :vs-label="$t('Start')" v-model="form.count"/>
        </vs-col>
    </vs-row>
    <vs-row>
        <vs-col vs-type="flex" vs-w="12">
            <vs-input type="number" :vs-label="$t('Goal')" v-model="form.goal"/>
        </vs-col>
    </vs-row>
</section>
</template>
<script>
export default {
    name: 'new-item-goal',

    data() {
        return {
            form: {
                type: 'goal',
                title: '',
                count: 0,
                goal: 1,
            }
        }
    }
}
</script>
