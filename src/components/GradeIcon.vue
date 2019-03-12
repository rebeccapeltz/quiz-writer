<template>
  <div class="grade-icon">
    <div :class="{showit: (answer.graded && !answer.correct) ,none: (!answer.graded) }">
      <i class="fas fa-times"></i>
    </div>
    <!-- check correct-->
    <div :class="{showit: (answer.graded && answer.correct) ,none:(!answer.graded)}">
      <i class="fas fa-check"></i>
    </div>
  </div>
</template>

<script>
// TODO: Import axios properly here.

export default {
  name: "GradeIcon",
  props: {
   answer:Object
  },
  data() {
    return {
      
    };
  },

  beforeUpdate: function() {
   console.log("graded", this.answer.graded)
   console.log("correct",this.answer.correct)
  
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
