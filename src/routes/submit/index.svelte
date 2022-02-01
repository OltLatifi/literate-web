<script>
    import axios from "axios";

    let inputValue = '';
    let mode = "mode";
    let URL;

    async function submit(){
        if(mode === "question"){
            URL = 'https://oltlatifi.pythonanywhere.com/create-questions/'
        }else if(mode === "joke"){
            URL = 'https://oltlatifi.pythonanywhere.com/create-jokes/'
        }
        try{
            if(inputValue !== ""){
                let formData = new FormData()
                formData.append('text', inputValue)
                const submit = await axios.post(URL, formData)
                inputValue = '';
            }

        }catch(e){
            console.log(e)
        }
    }

    console.log(mode)

</script>

<div class="ctn flex flex-col">
    {#if mode === "mode"}
        <button class="btn my-2" on:click={()=> mode = 'question'}>Submit a question</button>
        <button class="btn my-2" on:click={()=> mode = 'joke'}>Submit a joke</button>
    {:else if mode==='question'}
        <h1 class="txt">SUBMIT A QUESTION</h1>
        <h3 class="text-lg">We will review and possibly approve it in a bit...</h3>
        <input class="rounded h-8 px-2 my-2" type="text" bind:value={inputValue}>
        <div class="flex flex-row">
            <button class="btn my-2 mx-1 grow" on:click={submit}>Submit</button>
            <button class="btn my-2 mx-1 grow-0" on:click={()=> mode="mode"}>Go back</button>
        </div>
    {:else if mode==='joke'}
        <h1 class="txt">SUBMIT A JOKE</h1>
        <h3 class="text-lg">We will review and possibly approve it in a bit...</h3>
        <input class="rounded h-8 px-2 my-2" type="text" bind:value={inputValue}>
        <div class="flex flex-row">
            <button class="btn my-2 mx-1 grow" on:click={submit}>Submit</button>
            <button class="btn my-2 mx-1 grow-0" on:click={()=> mode="mode"}>Go back</button>
        </div>
    {/if}
</div>
