<template>
  <div>
    <h3>{{question.question}}</h3>
    <ol>
      <li v-for="answer in answers" @click="onAnswer(answer)" class="answer" >
        {{answer}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'QuestionCard',
    props: {
      question: {
        default: () => ({})
      },
      onAnswer: {
        default: () => ({})
      }
    },
    computed: {
      answers: function(){
        const answers = [
          ...this.question.incorrect_answers,
          this.question.correct_answer
        ]
        return answers
      },
    },
  }
</script>

<style scoped>

</style>
