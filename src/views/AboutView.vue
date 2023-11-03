<template>
  <div class="about">
    <div class="main-about">
      <div class="appBar">Todo List</div>
      <div class="page-3">
        <div class="columns-3" v-for="(item, index) in todos" :key="index">
          <h5 v-if="!item.editVal">{{ item.text }}</h5>
          <p v-else>
            <input
              @keyup.enter="editTextValue(index)"
              v-model="item.text"
              type="text"
            />
          </p>
          <a><material-icon name="edit" @click="editTodo(index)" /></a>
          <a
            ><material-icon name="delete" @click="delTodo(index)"
          /></a>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [{ text: "Todo #1", editVal: true }, { text: "Todo #2", editVal: false }, { text: "Todo #3", editVal: false }],
      editText: "",
    };
  },
  methods: {
    delTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(index) {
      this.todos[index].editVal = !this.todos[index].editVal;
    },
    editTextValue(index) {
      this.todos[index].text = this.editText;
      this.todos[index].editVal = !this.todos[index].editVal;
    },
  },
};
</script>

<style lang="scss">
h5 {
  width: 200px;
}
material-icon {
  width: 20px;
}
.main-about {
  // display: flex;
  // flex-wrap: wrap;
  height: 250px;
  // margin: auto;
  margin-top: 5rem;
  // padding: 2rem;
  // width: 80%;
  border: 1px solid #000;
  .appBar {
    border: 1px solid #000;
    text-align: center;
    padding-top: 10px;
    text-align: center;
  }
  .columns-3 {
    display: flex;
  }
}
</style>
