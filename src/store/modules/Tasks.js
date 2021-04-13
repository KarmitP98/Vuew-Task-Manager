import axios from "axios";

const state = {
    tasks: []
};

const getters = {
    allTasks: (state) => state.tasks
};

const actions = {
    // eslint-disable-next-line no-unused-vars
    async fetchTasks({commit}) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        commit('setTasks', response.data)
    },
    async addTask({commit}, title) {
        const response = await axios
            .post("https://jsonplaceholder.typicode.com/todos", {title, completed: false})

        commit('newTask', response.data);
    },
    async deleteTask({commit}, id) {
        // Delete
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit("removeTask", id)
    },
    async filterTasks({commit}, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit("setTasks", response.data)
    },
    async updateTask({commit}, updatedTask) {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTask.id}`,updatedTask)
        commit('updateTodo', res.data)
    }
};

const mutations = {
    setTasks: (state, tasks) => (state.tasks = tasks),
    newTask: (state, task) => (state.tasks.unshift(task)),
    removeTask: (state, id) => state.tasks = state.tasks.filter(value => value.id !== id),
    updateTodo: (state, newTask) => {
        const index = state.tasks.findIndex(task => task.id === newTask.id)
        if (index !== -1) {
            state.tasks.splice(index, 1, newTask)
        }
    }
};

export default {
    state, getters, actions, mutations
}