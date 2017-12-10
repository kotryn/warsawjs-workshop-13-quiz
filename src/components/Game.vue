<template>
  <div>
    <div id="card">
      <QuestionCard
      :question="currentQuestion"
      :onAnswer="checkAnswer"
    />
    </div>
    <div id="list">
      <QuestionsList
        :questions="questions"
        :thisQuestionIndex="currentQuestionIndex"
      />
    </div>
  </div>
</template>

<script>
  import data from "../../db"
  import QuestionCard from "./QuestionCard"
  import QuestionsList from './QuestionsList'
  export default {
    name: 'Game',
    components: {
      QuestionCard,
      QuestionsList
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
  #card{
    width: 70%;
    display: inline-table;
  }
  #list{
    width: 17%;
    display: inline-table;
  }
</style>
