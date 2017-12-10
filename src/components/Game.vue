<template>
  <div>
    <QuestionCard
      :question="currentQuestion"
      :onAnswer="checkAnswer"
    />
  </div>
</template>

<script>
  import data from "../../db"
  import QuestionCard from "./QuestionCard"
  export default {
    name: 'Game',
    components: {
      QuestionCard
    },
    data () {
      return {
        questions: data.questions,
        currentQuestionIndex: 0,
      }
    },
    computed: {
      answers: function(){
        const answers = [
          ...this.currentQuestion.incorrect_answers,
          this.currentQuestion.correct_answer
        ]
        return answers
      },
      currentQuestion: function(){
        return this.questions[this.currentQuestionIndex]
      }
    },
    methods: {
      checkAnswer: function(answer){
        const isAnswerCorrect = this.currentQuestion.correct_answer === answer
        if (isAnswerCorrect){
          this.currentQuestionIndex++
        }
      }
    }
  }
</script>

<style scoped>
.answer{
  width: 200px;
  height: 50px;
  border: solid 1px black;
  display: inline-block;
  margin: 10px;
}
</style>
