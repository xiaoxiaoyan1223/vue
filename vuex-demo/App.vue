<template>
  <div >
    <Count/>
    <div>--------------</div>
    <Person/>
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Person from './components/Person.vue'

export default {
  name: 'App',
  components: {
    Count,
    Person
  }
}
</script>

<style>

</style>
