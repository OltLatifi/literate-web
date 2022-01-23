<script context="module">
  export async function load({ fetch }) {
    let res = await fetch("http://localhost:8000/approved-questions/");

    if (res.ok) {
      return {
        props: {
          items: await res.json(),
        },
      };
    }
    return {
      status: res.status,
      error: new Error(),
    };
  }
</script>

<script lang="ts">
  export let items;
  // the number that we need to get a random question from the api
  let randomN = Math.floor(Math.random() * items.length);

  function get_random_question() {
    randomN = Math.floor(Math.random() * items.length);
  }
</script>

<div class="container my-8 py-2 max-w-lg rounded overflow-hidden shadow-lg bg-slate-300">
  <h1 class="font-bold font-mono text-2xl mb-2">PROJECT LITERATE</h1>
  <!-- get the text of a randomly picked question from the api request -->
  <h2 class="text-lg">{items[randomN].text}</h2>
  <div class="my-4">
    <button
      class="btn w-full"
      type="button"
      on:click={get_random_question}>Ask</button
    >
  </div>
</div>
