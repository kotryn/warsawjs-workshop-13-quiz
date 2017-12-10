import Vue from 'vue'
import Vuex from 'vuex'
import {STATUSES} from './common/const'
import data from '../db.js'

Vue.use(Vuex)

const INITIAL_STATE = {
  currentRound: 0,
  questions: [],
  status: STATUSES.NOT_STARTED
}

const getters = {
  questions: state => state.questions,
  currentQuestion: state => {
    const currentRound = getters.currentRound(state)
    const questions = getters.questions(state)
    return questions[currentRound]
  },
  currentRound: state => state.currentRound,
  status: state => state.status
}

//asynchroniczne
const actions = {
  //zapytanie do api
  initGame: ({commit}) => {
    return commit('resetGame', data.questions)
  }
}

//synchroniczne
const mutations = {
  resetGame: (state, questions) => {
    state.status = STATUSES.NOT_STARTED
    state.currentRound = 0
    state.questions = questions
  },
  checkAnswer: (state, answer) => {
    const isAnswerCorrect = getters.currentQuestion(state).correct_answer === answer
    if (isAnswerCorrect){
      if(state.questions.length === state.currentRound + 1){
        //this.$router.push({path: '/won'});
        state.status = STATUSES.WON
      }else{
        state.currentRound++
      }
    }else{
      //this.$router.push({path: '/lost'});
      state.status = STATUSES.LOST
    }
  },
}

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  state: INITIAL_STATE
})
