<template>
  <div class="quiz">
    <b-container>
      <h2>Quiz</h2>

      <form @submit.prevent="gradeQuiz">
        <ul>
          <li v-for="(result, index) in results" :key="index">
            <p>{{index+1}}. {{result.question}}</p>
            <p>
              <b-form-input v-model="answers[index]" type="text" placeholder="Enter answer"/>
            </p>
            <div :class="theClassTimes(index)">
              <i class="fas fa-times"></i>
            </div>
            <div :class="theClassCheck(index)">
              <i class="fas fa-check"></i>
            </div>
          </li>
        </ul>
        <b-button type="submit" class="submit">Submit</b-button>
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
      results: null,
      answers: [],
      grade: []
    };
  },

  mounted: function() {
    // console.log(this.$route.params.results);
    this.results = this.$route.params.results;
  },
  methods: {
    theClassTimes(item) {
      if (this.grade.length > 0) {
        if (this.grade[item] === 1) return "none"
        else return "showit";
      } else {
        return "none";
      }
    },
     theClassCheck(item) {
      if (this.grade.length > 0) {
        if (this.grade[item] === 0) return "none"
        else return "showit";
      } else {
        return "none";
      }
    },
    gradeQuiz() {
      // console.log(this.answers);
      this.answers.forEach((item, i) => {
        // console.log(this.answers)
        if (
          this.$route.params.results[i].answer.trim().toLowerCase() ===
          item.trim().toLowerCase()
        ) {
          this.grade[i] = 1;
        } else {
          this.grade[i] = 0;
        }
      });
      console.log(this.grade);
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
