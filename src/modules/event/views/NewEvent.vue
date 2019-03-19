<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <keep-alive>
            <NewEvent/>
          </keep-alive>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NewEvent from '../components/Cards/NewEvent'
export default {
  name: 'NewEventPage',
  components: {
    NewEvent
  }
}
</script>