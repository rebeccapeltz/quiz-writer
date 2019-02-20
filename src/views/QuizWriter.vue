<template>
  <div class="quiz-writer">
    <b-container>
      <h2>Input</h2>
      <form @submit.prevent="processText">
        <b-form-textarea
          class="input-content"
          id="textarea1"
          v-model="text"
          placeholder="Enter content to turn into quiz"
          :rows="5"
          :max-rows="50"
        ></b-form-textarea>
        <div>
          <b-button type="submit" variant="primary" size="sm">Create Quiz</b-button>
        </div>
      </form>
      <h2>Output</h2>
      <div class="quiz-content">{{quiz}}</div>
    </b-container>

  </div>
</template>

<script>
// TODO: Import axios properly here.

export default {
  name: "QuizWriter",
  data() {
    return {
      results: null,
      errors: [],
      text: "",
      quiz: ""
    };
  },
  methods: {
    processText() {
      // console.log(this.text);
      this.quiz = this.text;
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
.quiz-writer {
  background-color: antiquewhite;
  /* padding: 20px; */
}

.input-content {
  margin: 2em auto;
  width: 80%;
  border-radius: 5px;
  border: 1px solid blue;
}
.quiz-content {
  text-align:left;
  padding: 10px;
  margin: 2em auto;
  width: 80%;
  height: 100px;
  border-radius: 5px;
  background-color:white;
  border: 1px solid blue;
}

</style>
