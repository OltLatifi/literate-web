<script>
    import axios from 'axios';
    let inputValue = '';
    async function submit(){
        try{
            if(inputValue !== ""){
                let formData = new FormData()
                formData.append('text', inputValue)
                const submit = await axios.post('http://localhost:8000/create-questions/', formData)
                inputValue = '';
            }

        }catch(e){
            console.log(e)
        }
    }
</script>

<div class="container">
    <h1 class="submit-header">Submit a question</h1>
    <h3>We will review and possibly approve it in a bit...</h3>
    <input class="submit-input" type="text" bind:value={inputValue}>
    <button class="btn" on:click={submit}>submit</button>
</div>
