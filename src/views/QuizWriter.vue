<template>
  <div class="quiz-writer">
    <b-container>
      <h2>Input</h2>
      <label for="myFile">
        <p> Choose File or paste text </p>
      <input type="file" id="myFile">
      </label>
      <form @submit.prevent="processText">
        <b-form-textarea
          class="input-content"
          id="textarea1"
          v-model="text"
          placeholder="Enter content to turn into quiz"
          :rows="5"
          :max-rows="50"
        ></b-form-textarea>
        <b-form-group label="Using sub-components:">
      <b-form-checkbox-group id="checkboxes2" name="flavour2" v-model="type">
        <b-form-checkbox value="orange">Orange</b-form-checkbox>
        <b-form-checkbox value="apple">Apple</b-form-checkbox>
        <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
        <b-form-checkbox value="grape">Grape</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
        <div>
          <b-button type="submit" variant="primary" size="lg">Create Quiz</b-button>
        </div>
      </form>
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
      quiz: "",
      type:""
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
  background-color: rgb(235, 141, 19);
  /* padding: 20px; */
}

.input-content {
  margin: 2em auto;
  width: 80%;
  border-radius: 5px;
  border: 1px solid rgb(111, 111, 117);
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
