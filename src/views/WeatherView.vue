<template>
  <div>
    <div >
      <select v-model="currentForm.showCity" @change="setCodeAndLabelForForm($event.target.selectedIndex)">
    <option v-for="i in showCity" :value="i.id">{{ i.name }}</option>
  </select>
  <br> currentForm: {{ currentForm }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        showCity: [],
        currentForm: {id: '', name: ""}
    }
    },
    methods: {
      setCodeAndLabelForForm: function(selectedIndex) {
      var citys = this.showCity[selectedIndex];
      this.currentForm = {citys: citys.id, text: citys.name};
    }
  },
  created() {
    this.$store.dispatch("show_city").then((resp) => {
      this.showCity = resp.data;
    });
  },
};
</script>
