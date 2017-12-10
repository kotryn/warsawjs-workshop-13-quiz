<template>
  <aside>
  <ol>
      <li v-for="(question, index) in questions" :class='[{past_question: index < thisQuestionIndex}, {current_question: index === thisQuestionIndex}]'>
        <h5>Question {{index+1}}</h5>
        <h6>Question worth {{(index+1)*100}}$</h6>
      </li>
    </ol>
  </aside>
</template>

<script>
  export default {
    name: 'QuestionsList',
    props: {
      questions: {
        default: () => ({})
      },
      thisQuestionIndex: {
        default: () => ({})
      }
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style scoped>
  h5{
    margin: 0;
  }
  h6{
    margin: 5px 0 0 0;
  }
  ol{
    list-style-type: none;
    border: solid 1px black;
    margin: 0;
    padding: 5px 0;
    background-color: rgb(245, 244, 244);
  }
  li{
    margin: 15px 0;
  }
  .current_question{
    color: blue;
  }
  .past_question{
    color: green;
  }
</style>
