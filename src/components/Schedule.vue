<template lang="html">
  <div class="events">
    <h1>Schedule</h1>
    <div v-show='apiCalling'>
      loading...
    </div>
    <br>
    <div v-show='getEvents.length !== 0'>
      <span>Select Events/Games</span>
      <select v-on:change="changeMatchType">
        <option value="all">All</option>
        <option value="Football">Football</option>
        <option value="Tennis">Tennis</option>
        <option value="Hockey">Hockey</option>
      </select>
      <br>
      <br>
      <table class="table table-bordered table-striped">
        <thead>

          <tr>
            <th>MATCHUP</th>
            <th>TIME</th>
            <th>TICKETS</th>
            <th>LOCATION</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for='event, index in getEvents' v-if="event.classifications[0].genre.name === matchType || matchType ==='all'">

            <td>
              <a :href="event.url">
                <img :src="event.images[0].url" style="width: 30px" />
                <span>{{event.name}}</span>
              </a>
              <span> at </span>
              <a :href="event._embedded.venues[0].url">
                <img :src="event._embedded.venues[0].images[0].url" style="width: 30px" />
                <span> {{event._embedded.venues[0].name}}</span>
              </a>
            </td>
            <td style="width: 120px">{{ event.dates.start.localTime}}</td>
            <td>
              <a :href="event.url"> Buy Ticket Here</a>
            </td>
            <td>{{ event._embedded.venues[0].address.line1 }}, {{ event._embedded.venues[0].city.name }}</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'schedule',
  data () {
    return {
      matchType: 'all'
    }
  },

  methods: {
    ...mapActions([
      'fetchEvents'
    ]),

    changeMatchType: function (e) {
      this.matchType = e.target.value
    }
  },

  computed: {
    ...mapGetters(['apiCalling', 'getEvents'])
  },

  created () {
    if (this.getEvents.length === 0) {
      this.fetchEvents()
    }
  }
}
</script>

<style lang="css">
</style>
