import axios from 'axios'

export default {
  async setJobs({ commit }, obj) {
    const jobs = (
      await axios.get('https://klick-jobs-backend.herokuapp.com/jobs/')
    ).data
    commit('SET_JOBS', { jobs })
  },

  async setJob({ commit }, jobId) {
    const { data } = await axios.get(
      `https://klick-jobs-backend.herokuapp.com/jobs/${jobId}`
    )
    commit('SET_JOB', data)
  }
}
