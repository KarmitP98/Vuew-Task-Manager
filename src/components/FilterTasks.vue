<template>
<div>
  <h3>Filter Tasks</h3>
  <select @change.prevent="filterTasks($event)">
    <option value = "200">200</option>
    <option value = "100">100</option>
    <option value = "50">50</option>
    <option value = "10">10</option>
    <option value = "5">5</option>
  </select>
</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "FilterTasks",
  methods: mapActions(["filterTasks"])
}
</script>

<style scoped>
select{
  border: none;
  padding: 0.5em 1em;
  font-size: 1.2em;
  font-weight: 500;
}
</style>