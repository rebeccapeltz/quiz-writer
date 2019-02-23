<template>
  <div class="quiz">
    <b-container>
      <h2>Quiz</h2>

      <form @submit.prevent="gradeQuiz">
        <ul>
          <li v-for="(result, index) in results" :key="index">
            <p>{{result.question}}</p>
          </li>
        </ul>
      </form>
    </b-container>
  </div>
</template>

<script>
// TODO: Import axios properly here.

export default {
  name: "Quiz",
  data() {
    return {
      errors: [],
      results: null
    };
  },

  mounted: function() {
    console.log(this.$route.params.results);
    this.results = this.$route.params.results;
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
