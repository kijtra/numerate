<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
  el: '#app',

  metaInfo () {
    const { appName } = window.config

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },
}
</script>
