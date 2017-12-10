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
        :currentRound="currentRound"
      />
    </div>
  </div>
</template>

<script>
  import data from "../../db"
  import QuestionCard from "./QuestionCard"
  import QuestionsList from './QuestionsList'
  import {mapGetters, mapMutations} from 'vuex'

  const STATUSES = {
    'NOT_STARTED': 'not started',
    'PLAYING': 'playing',
    'WON': 'won',
    'LOST': 'lost',
  }

  export default {
    name: 'Game',
    created(){
      this.$store.dispatch('initGame')
    },
    components: {
      QuestionCard,
      QuestionsList
    },
    computed: {
      answers: function(){
        const answers = [
          ...this.currentQuestion.incorrect_answers,
          this.currentQuestion.correct_answer
        ]
        return answers
      },
     /* currentQuestion: function(){
        return this.questions[this.currentRound]
      },*/
      ...mapGetters({
          currentQuestion: 'currentQuestion',
          questions: 'questions',
          status: 'status',
          currentRound: 'currentRound'
      })
    },
    methods: {
      ...mapMutations({
        checkAnswer: 'checkAnswer'
      })
    },
    watch: {
      status: function(value, oldValue){
        if(value === STATUSES.WON){
          this.$router.push({path: '/won'});
        }else if(value === STATUSES.LOST){
          this.$router.push({path: '/lost'});
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
