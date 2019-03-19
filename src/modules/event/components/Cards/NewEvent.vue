<template>
  <b-card-group deck>
    <b-card
      header="Create a new Event"
      title="Try something new!"
      footer-tag="footer">
      <p class="card-text">
          If an event is not within the list, you could create one here.
      </p>
      <p class="card-text">
          By default, an event is only visible to yourself, unless you set the permission to public.
      </p>
      <hr>
      <b-form
        v-if="show"
        validated
        @submit="onSubmit"
        @reset="onReset">
        <b-form-group
          id="TitleGroup"
          label="Title"
          label-for="TitleInput">
          <b-form-input
            id="TitleInput"
            v-model="title"
            :maxlength="90"
            label="Title"
            type="text"
            required
            placeholder="The title of the event"/>
        </b-form-group>
        <b-form-group
          id="CreditHoursGroup"
          label="Course Credit"
          label-for="CreditHoursInput">
          <b-form-input
            id="CreditHoursInput"
            v-model="creditHours"
            type="number"
            required
            placeholder="Number of credit your course will have"/>
        </b-form-group>
        <b-input-group>
            <b-input-group-prepend>
                <b-button variant="outline-info">Button</b-button>
            </b-input-group-prepend>

            <b-form-input type="number" min="0.00" />
        </b-input-group>
      </b-form>
      <em slot="footer">
        <b-button-group>
            <b-button
            type="submit"
            variant="primary">Submit</b-button>
            <b-button
            type="reset"
            variant="danger">Reset</b-button>
        </b-button-group>
      </em>
    </b-card>
  </b-card-group>

</template>

<script>
import { id } from '@/utils/id'
import event from '@/modules/class/event'

export default {
  name: 'NewEvent',
  data () {
    return {
        show: true,
        ...event()
    }
  },
  computed: {
    semesterList() {
      return [...this.$store.getters.semesterList, this.$unify.TRANSFERRED_SEMESTER_OPTION]
    },
    event() {
        return event
    }
  },
  methods: {
    addCourse () {
      this.$store.dispatch('addCourse', {
        semester: this.semester,
        course: {
          CourseName: this.courseName,
          CourseTitle: this.courseTitle,
          CreditHours: this.creditHours,
          custom: true,
          uuid: id()
        }
      })
      this.$toasted.success('Course added successfully.')
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.addCourse()
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.courseName = ''
      this.creditHours = 0
      this.semester = null
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>