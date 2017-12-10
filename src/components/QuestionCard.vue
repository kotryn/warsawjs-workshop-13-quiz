<template>
  <div>
    <h3>{{question.question}}</h3>
    <ol class="answers">
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
  .answer{
    min-width: 150px;
    height: 50px;
    line-height: 50px;
    border: solid 1px black;
    display: inline-block;
    margin: 10px;
    padding: 5px;
    cursor:pointer;
    background-color: rgb(245, 244, 244);
  }
  .answers{
    margin: 10px;
    padding: 0;
  }
</style>
