<script context="module">
    export async function load({ fetch }) {
      let res = await fetch("https://oltlatifi.pythonanywhere.com/approved-jokes/");
  
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
import { fade } from 'svelte/transition';
export let items;
// the number that we need to get a random question from the api
let randomN = Math.floor(Math.random() * items.length);

function get_random_joke() {
    randomN = Math.floor(Math.random() * items.length);
}
</script>

<div class="ctn">
<h1 class="txt">PROJECT LITERATE got jokes</h1>
<!-- get the text of a randomly picked question from the api request -->
<h2 class="text-lg" transition:fade>{items[randomN].text}</h2>
<div class="my-4 flex flex-row">
    <button
    class="btn mx-1 grow"
    type="button"
    on:click={get_random_joke}>Say something funny</button
    >
</div>
</div>
  