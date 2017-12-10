<template>
  <div>
    <h3>Pytanie?</h3>
    <ol>
      <li v-for="answer in answers">
        {{answer}}
      </li>
    </ol>
  </div>
</template>

<script>
  import data from "../../db"
  export default {
    name: 'Game',
    data () {
      return {
        questions: data.questions,
        firstQuestion: data.questions[0]
      }
    },
    computed: {
      answers: function(){
        const answers = [
          ...this.firstQuestion.incorrect_answers,
          this.firstQuestion.correct_answer
        ]
        return answers
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
