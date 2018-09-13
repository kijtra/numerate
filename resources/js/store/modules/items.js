import * as types from '../mutation-types'
import db from '~/plugins/dexie'

// state
export const state = {
    all: {},
}

// getters
export const getters = {
    all: state => state.all,
}

// mutations
export const mutations = {
    [types.RESET_ITEM] (state, data) {
        state.all = data
    },

    [types.ADD_ITEM] (state, data) {
        db.items.add(data).then(id => {
            this._vm.$set(state.all, id, data)
        })
    },

    [types.UPDATE_ITEM] (state, id, data) {
        db.items.update(id, data).then(id => {
            this._vm.$set(state.all, id, data)
        })
    },

    [types.REMOVE_ITEM] (state, id) {
        db.items.delete(id).then(() => {
            this._vm.$delete(state.all, id)
        })
    }
}

// actions
export const actions = {
    init ({ state }) {
        db.items.orderBy('id').each(item => {
            item.created_at = this._vm.$luxon.fromJSDate(item.created_at)
            item.updated_at = this._vm.$luxon.fromJSDate(item.updated_at)
            this._vm.$set(state.all, item.id, item)
        })
    },

    add ({ commit }, data) {
        if ('object' === typeof data) {
            commit(types.ADD_ITEM, Object.assign({
                created_at: new Date(),
                updatedd_at: new Date()
            }, data))
        } else {
            console.error('Invalid item')
        }
    },

    update ({ commit }, id, data) {
        if ('object' === typeof data && ('string' === typeof id || 'number' === typeof id)) {
            commit(types.UPDATE_ITEM, id, Object.assign({
                updatedd_at: new Date()
            }, data))
        } else {
            console.error('Invalid item')
        }
    },

    remove ({ commit }, data) {
        if ('object' === typeof data && data.id) {
            commit(types.REMOVE_ITEM, data.id)
        } else if ('string' === typeof data || 'number' === typeof data) {
            commit(types.REMOVE_ITEM, data)
        }
    }
}

// export const plugins = [createPersistedState()]
