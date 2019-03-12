<template>
  <div class="question">
    <p>{{index+1}}. {{question.question}}</p>
    <p>
      <b-form-input v-model="answer.text" type="text" placeholder="Enter answer"/>
    </p>
    <!-- <grade-icon :graded="answer"></grade-icon> -->
    <div :class="{showit: showTimes ,none: showNone }">
      <i class="fas fa-times"></i>
    </div>
    <div :class="{showit: showCheck ,none: showNone }">

      <i class="fas fa-check"></i>
    </div>
    <!-- <p>graded {{answer.graded}}</p>
    <p>correct {{answer.correct}}</p> -->
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      answer: { text: "", graded: false, correct: false },
      showCheck: false,
      showTimes: false,
      showNone: true
    };
  },
  props: {
    question: Object,
    index: Number
  },
  methods: {
    gradeQuestion() {
      this.answer.graded = true;
      if (
        this.question.answer.trim().toLowerCase() ===
        this.answer.text.trim().toLowerCase()
      ) {
        this.answer.correct = true;
      } else {
        this.answer.correct = false;
      }
      this.showCheck = this.answer.graded && this.answer.correct
      this.showTimes = this.answer.graded && !this.answer.correct
      this.showNone = !this.answer.none
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.none {
  display: none;
}
.showit {
  display: block;
}
</style>
