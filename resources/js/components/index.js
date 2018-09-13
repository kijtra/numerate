import Vue from 'vue'
import NewItemSimple from './NewItemSimple'
import NewItemGoal from './NewItemGoal'

[
    NewItemSimple,
    NewItemGoal
].forEach(Component => {
    Vue.component(Component.name, Component)
})
