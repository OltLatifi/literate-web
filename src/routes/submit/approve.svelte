<script context="module">
  export async function load({ fetch }) {
    let res = await fetch("https://oltlatifi.pythonanywhere.com/questions/");
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

<script>


  import axios from "axios";
  import { onMount } from 'svelte';

  export let items;
  let questions = items;
  let inputValue = "";
  let access_token;
  let id;
  const axiosInstance = axios.create({
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access_token')
        ? `Bearer ${localStorage.getItem('access_token')}`// this is like saying 'Bearer 49582048902485kfjdkj'
        : null,                                        // so it's just the access token on the header 
        'Content-Type': 'application/json',            // if there is a token format it, else return null
        accept: 'application/json'
    },
})
if (typeof localStorage !== 'undefined') {
  onMount(()=>{
    access_token = localStorage.getItem('access_token')
  })}

  function updateQuestion(text, approved, id_) {
    inputValue = text;
    id = id_;
  }

  async function approveQuestion() {
    console.log(inputValue);
    try {
      if (inputValue !== "") {
        let formData = new FormData();
        formData.append("text", inputValue);
        formData.append("approved", "true");

        const submit = await axiosInstance.put(
          `https://oltlatifi.pythonanywhere.com/approve-question/${id}`,
          formData
        );
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  }
</script>


{#if access_token !==null}
<div class="ctn flex flex-col">
  <h1 class="txt my-1">APPROVE QUESTIONS</h1>
  <input class="rounded h-8 px-2 my-1" type="text" bind:value={inputValue} />
  <ul>
    {#each questions as question}
      {#if !(question.approved)}
        <li>
          <button
            class="bg-slate-200 w-full my-2 rounded shadow-sm"
            on:click={() =>
              updateQuestion(question.text, question.approved, question.id)}
            >{question.text}</button
          >
        </li>
      {/if}
    {/each}
  </ul>
  <button class="btn my-2 mb-1" on:click={approveQuestion}>Approve</button>
</div>
{:else}
<div class="ctn flex flex-col">
  <a href="/auth/login" class="btn">You need to login for that</a>
</div>
{/if}

