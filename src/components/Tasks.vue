<template>
  <div>
    <h3>Tasks</h3>
    <div class="legend">
      <div>Double click to mark as complete</div>
      <div>
        <span class="incomplete-box"></span> = Incomplete
      </div>
      <div>
        <span class="complete-box"></span> = Complete
      </div>
    </div>
    <div class = "tasks">
      <div class = "task" v-for = "task in allTasks" :key = "task.id" @dblclick="onDblClick(task)" :class="{completed: task.completed}">
        <div class = "task-title">
          {{ task.title }}
        </div>
        <i class = "fas fa-trash-alt" @click="deleteTask(task.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Tasks",
  created() {
    this.fetchTasks()
  },
  methods: {
    ...mapActions(['fetchTasks', "deleteTask", "updateTask"]),
    onDblClick(task) {
        const newTask = {
          id: task.id,
          title: task.title,
          completed: !task.completed
        }
        this.updateTask(newTask)
    }

  },
  computed: {...mapGetters(['allTasks'])},
}
</script>

<style scoped>
.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;

  overflow: hidden;
  height: fit-content;
  width: fit-content;
  padding: 1em;
}

.task {
  background: rgb(74, 184, 131);
  box-shadow: 4px 4px 0 rgb(51, 128, 91);
  padding: 1em;
  border-radius: 5px;
  text-align: center;
  position: relative;
  overflow: auto;

  color: white;
  font-size: 1em;

  transition: 50ms ease-in-out;

}

.task-title {
  font-weight: 700;
  letter-spacing: 1px;
  user-select: none;
}

.task:active {
  box-shadow: none;
}

i {
  position: absolute;

  bottom: 0.5em;
  right: 0.5em;
  cursor: pointer;
}
.incomplete-box, .complete-box{
  display: inline-block;
  width: 10px;
  height: 10px;
}

.incomplete-box{
  background: rgb(74, 184, 131);
}
.complete-box{
  background: rgb(51, 128, 91);
}
.completed{
  background: rgb(51, 128, 91);
  box-shadow: 4px 4px 0 rgb(74, 184, 131);
}

@media only screen and (max-width: 1000px) {
  .tasks{
    grid-template-columns: 1fr;
  }
}
</style>