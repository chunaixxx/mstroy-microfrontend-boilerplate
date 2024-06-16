<template>
  <div id="q-app">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>HOST</q-toolbar-title>
          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>

      <q-page-container style="height: 100vh">
        <div class="view">VIEW</div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'App',
  })
</script>

<style lang="scss">
  .view {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
</style>
