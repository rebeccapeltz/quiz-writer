<template>
  <div class="quiz">
    <b-container>
      <h2>Quiz</h2>
      <form @submit.prevent="gradeQuiz">
        <ul>
          <li v-for="(result, index) in results" :key="index">
            <question :question="result" :index="index"></question>
          </li>
        </ul>
        <b-button type="submit" class="submit">Submit</b-button>
      </form>
    </b-container>
  </div>
</template>

<script>
// TODO: Import axios properly here.
import Question from "@/components/Question";
export default {
  name: "Quiz",
  components: {
    "question": Question
  },
  data() {
    return {
      errors: [],
      results: []
    };
  },

  created: function() {
    // console.log(this.$route.params.results);
    this.results = this.$route.params.results;

    //redirect to quizwriter if results are empty
    if (!this.results || this.results.length === 0) {
      this.$router.push("/");
    }
  },
  methods: {
    gradeQuiz() {
      // console.log(this.answers);
      // this.answers.forEach((item, i) => {
      for (let i = 0; i < this.results.length; i++) {
        this.$children[i].gradeQuestion();
        // console.log(this.answers)
        // let answer = this.answers[i];
        // this.results[i]["graded"] = true;
        // if (
        //   this.results[i].answer.trim().toLowerCase() ===
        //   answer.response.trim().toLowerCase()
        // ) {
        //   // answer.grade[i] = 1 //correct
        //   this.results[i]["correct"] = true;
        // } else {
        //   // answer.grade[i] = 0  //incorrect
        //   this.results[i]["correct"] = false;
        // }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 20px 0;
  color: white;
}
p {
  color: white;
  font-weight: bold;
}
.container {
  padding: 20px 0;
}
.quiz {
  /* background-color: rgb(235, 141, 19); */
  height: 1000px;
}
ul {
  list-style-type: none;
}
button.submit {
  background-color: black;
  color: white;
  font-weight: bold;
}
.fa-times {
  color: yellow;
  font-size: 1.5em;
}
.fa-check {
  color: aqua;
  font-size: 1.5em;
}
.none {
  display: none;
}
.showit {
  display: block;
}
</style>
