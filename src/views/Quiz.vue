<template>
  <div class="quiz">
    <b-container>
      <h2>Quiz</h2>
      <!-- 
      <form @submit.prevent="gradeQuiz">
      </form>-->
    </b-container>
  </div>
</template>

<script>
// TODO: Import axios properly here.

export default {
  name: "Quiz",
  data() {
    return {
      errors: []
    };
  },

  mounted: function() {
    console.log(this.$route.params.results);
  },
  methods: {
    gradeQuiz() {
      // console.log(this.text);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 20px 0;
}
.container {
  padding: 20px 0;
}


</style>
