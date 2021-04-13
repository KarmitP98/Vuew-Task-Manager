<template>
  <div id="app">
    <div class="container">
      <AddTask/>
      <FilterTasks/>
      <Tasks/>
    </div>
  </div>
</template>

<script>
import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";
import FilterTasks from "@/components/FilterTasks";

export default {
  name: 'App',
  components: {
    FilterTasks,
    AddTask,
    Tasks
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

*{
  font-family: 'Montserrat', sans-serif;
}

body{
  line-height: 1.6;
  background-color: #e8f7f0;
}

.container{
  max-width: 70%;
  margin: auto;
  overflow: auto;
  padding: 0 2em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
