<script context="module">
  export async function load({ fetch }) {
    let res = await fetch("http://localhost:8000/questions/");
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

  export let items;
  let questions = items;
  let inputValue = "";
  let id;
  console.log(questions);

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

        const submit = await axios.put(
          `http://localhost:8000/approve-question/${id}`,
          formData
        );
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  }
</script>

<div class="ctn flex flex-col">
  <h1 class="txt my-1">APPROVE QUESTIONS</h1>
  <input class="rounded h-8 px-2 my-1" type="text" bind:value={inputValue} />
  <ul>
    {#each questions as question}
      {#if !question.approved}
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
