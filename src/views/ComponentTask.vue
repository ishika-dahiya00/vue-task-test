<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h1>Parent-Child Communication</h1>
        <p>
          Props allow you to pass data from a parent component to a child component. The child component receives the data as a prop and can use it in its template or logic. Props are passed down to child components in a unidirectional flow, meaning changes to the prop in the child component do not affect the parent component directly.
        </p>
      </div>
    </div>

    <hr>

    <div class="row mt-4">
      <div class="col">
        <h1>Child-Parent Communication</h1>
        <div class="row">
          <div class="col-md-6">
            <h3>Child Component:</h3>
            <p>
              Child components communicate with parents using events.
              They emit events when something happens, and the parent listens for these
              events and reacts accordingly.
            </p>
          </div>
          <div class="col-md-6">
            <h3>Parent Component:</h3>
            <p>
              Parent components listen for events emitted by child components using v-on or the shorthand @.
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="row mt-4">
      <div class="col">
        <h1>Child-Child Communication</h1>
        <div class="row">
          <div class="col">
            <h3>Shared Parent Component:</h3>
            <p>
              For child-child communication, the simplest approach is to establish a shared parent component that holds the shared state or acts as a mediator between child components.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentT',
};
</script>

