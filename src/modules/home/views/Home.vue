<template>
  <b-jumbotron>
    <template slot="header">
      Syllabuild
    </template>
    <template slot="lead">
      Way to build a smart syllabus.
    </template>
    <hr class="my-4">
    <p>
      Choose an action and get started!
    </p>
    <b-btn
      :to="{'name': 'Plan'}"
      variant="primary">Enter Syllabuild</b-btn>
    <b-btn
      :to="{'name': 'Profile'}"
      variant="success">View/Import Syllabus</b-btn>
    <b-btn
      variant="dark"
      href="https://github.com/V2grad/Syllabuild">About this Project</b-btn>
    <b-btn
      variant="link"
      href="https://v2grad.org">About us</b-btn>
  </b-jumbotron>
</template>
