<script context="module">
  import Timer from "$lib/counter.svelte";
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

  let toefl = false;
</script>

<script lang="ts">
  import { fade } from 'svelte/transition';
  export let items;
  // the number that we need to get a random question from the api
  let randomN = Math.floor(Math.random() * items.length);

  function get_random_question() {
    randomN = Math.floor(Math.random() * items.length);
  }

  function updateToeflWorkAround(){
    randomN = Math.floor(Math.random() * items.length);;
    toefl = !toefl;
  }
</script>

<div class="ctn">
  <h1 class="txt">PROJECT LITERATE</h1>
  <!-- get the text of a randomly picked question from the api request -->
  <h2 class="text-lg" transition:fade>{items[randomN].text}</h2>
  <div class="my-4 flex flex-row">
    <button
      class="btn mx-1 grow"
      type="button"
      on:click={get_random_question}>Ask</button
    >
    <button
      class="btn mx-1 grow-0"
      type="button"
      on:click={updateToeflWorkAround}>TOEFL</button
    >
  </div>
</div>
{#if toefl}
<div transition:fade>
  <Timer/>
</div>
{/if}
