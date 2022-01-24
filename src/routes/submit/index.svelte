<script>
    import axios from "axios";
    let inputValue = '';
    async function submit(){
        try{
            if(inputValue !== ""){
                let formData = new FormData()
                formData.append('text', inputValue)
                const submit = await axios.post('https://oltlatifi.pythonanywhere.com/create-questions/', formData)
                inputValue = '';
            }

        }catch(e){
            console.log(e)
        }
    }
</script>

<div class="ctn flex flex-col">
    <h1 class="txt">SUBMIT A QUESTION</h1>
    <h3 class="text-lg">We will review and possibly approve it in a bit...</h3>
    <input class="rounded h-8 px-2 my-2" type="text" bind:value={inputValue}>
    <button class="btn my-2" on:click={submit}>Submit</button>
</div>
