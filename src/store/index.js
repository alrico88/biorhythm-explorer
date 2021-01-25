import Vue from "vue";
import Vuex from "vuex";
import { subYears, format } from "date-fns";
import {
  calculateBiorhythmRange,
  DayFinder,
  constants,
  calculateBiorhythm
} from "biorhythm-calculator";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

const { BIORHYTHMS } = constants;

Vue.use(Vuex);

const DATE_FORMAT = "yyyy-MM-dd";
const today = new Date();

export default new Vuex.Store({
  state: {
    dateOfBirth: format(subYears(new Date(), 18), DATE_FORMAT),
    dateToAnalyze: format(new Date(), DATE_FORMAT)
  },
  getters: {
    selectedData(state) {
      return calculateBiorhythm(
        new Date(state.dateOfBirth),
        new Date(state.dateToAnalyze)
      );
    },
    bioData(state) {
      return calculateBiorhythmRange(
        new Date(state.dateOfBirth),
        new Date(state.dateToAnalyze),
        5
      );
    },
    nextDays(state) {
      const DOB = new Date(state.dateOfBirth);
      const DTA = new Date(state.dateToAnalyze);
      const physicalFinder = new DayFinder(DOB, DTA, BIORHYTHMS.physical);
      const emotionalFinder = new DayFinder(DOB, DTA, BIORHYTHMS.emotional);
      const intellectualFinder = new DayFinder(
        DOB,
        DTA,
        BIORHYTHMS.intellectual
      );
      return {
        best: {
          physical: physicalFinder.getNextBestDay(),
          emotional: emotionalFinder.getNextBestDay(),
          intellectual: intellectualFinder.getNextBestDay()
        },
        worst: {
          physical: physicalFinder.getNextWorstDay(),
          emotional: emotionalFinder.getNextWorstDay(),
          intellectual: intellectualFinder.getNextWorstDay()
        }
      };
    }
  },
  mutations: {
    changeDOB(state, dateOfBirth) {
      state.dateOfBirth = dateOfBirth;
    },
    changeDTA(state, dateToAnalyze) {
      state.dateToAnalyze = dateToAnalyze;
    }
  },
  actions: {
    setToToday({ commit }) {
      commit("changeDTA", format(today, DATE_FORMAT));
    },
    startUp({ dispatch }) {
      dispatch("setToToday");
    }
  },
  plugins: [vuexLocal.plugin]
});
