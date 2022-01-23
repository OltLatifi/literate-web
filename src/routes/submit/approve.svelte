<script context="module">
    export async function load({ fetch }) {
       let res = await fetch('http://localhost:8000/questions/');
       if (res.ok) {
           return {
               props: {
                   items: await res.json()
               }
           };
       }
       return {
           status: res.status,
           error: new Error()
       };
   }
</script>
<script>
    import axios from 'axios';

    export let items;
    let questions = items;
    let inputValue="";
    let id;
    console.log(questions)


    function updateQuestion(text, approved, id_){
        inputValue = text;
        id = id_;
    }

    async function approveQuestion(){
        console.log(inputValue);
        try{
            if(inputValue !== ""){
                let formData = new FormData()
                formData.append('text', inputValue)
                formData.append('approved', 'true')

                const submit = await axios.put(`http://localhost:8000/approve-question/${id}`, formData)
                window.location.reload();
            }

        }catch(e){
            console.log(e)
        }
    }
</script>

<h1>Approve questions</h1>
<input type="text" bind:value={inputValue}>
<ul>
    {#each questions as question}
        {#if !question.approved}
        <li><button on:click={()=>updateQuestion(question.text, question.approved, question.id)}>{question.text}</button></li>
        {/if}
    {/each}
</ul>
<button class="btn" on:click={approveQuestion}>approve</button>