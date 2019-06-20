import Vue from 'vue'

export function fetchEvents ({ commit }) {
  commit('apiCalling')
  Vue.http.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=Z2PpOOA2YCQTrLHneGGBLTT8cOKhGBBy').then((response) => {
    commit('apiCalled')
    commit('fetchEvents', {
      events: [...response.body._embedded.events].filter(event => event.classifications[0].subGenre.name === 'MLB' || event.classifications[0].subGenre.name === 'NFL')
    })
  }).catch((err) => {
    commit('fetchError', {
      error: err.errorText
    })
  })
}
