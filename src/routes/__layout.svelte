<script lang="ts">
    import Greeting from "$lib/greeting.svelte";
    import Footer from "$lib/footer.svelte";
    import { onMount } from 'svelte';
    import '../app.css'

    let access_token;
    let refresh_token;

    onMount(()=>{
        access_token = localStorage.getItem('access_token')
        console.log(access_token)
    })


    const time = new Date();
    let hour = time.getHours();
    let year = time.getFullYear();

</script>
<body class="bg-slate-400 container flex flex-col mx-auto">
    <header class="container flex flex-row mt-8 bg-slate-300 justify-center max-w-lg rounded py-2 overflow-hidden">
        <h3 class="mx-1 px-1 font-mono"><a href="/">Home</a></h3>
        <h3 class="mx-1 px-1 font-mono"><a href="/submit">Submit</a></h3>
        <h3 class="mx-1 px-1 font-mono"><a href="/about">About</a></h3>
        {#if access_token!==null}
            <h3 class="mx-1 px-1 font-mono"><button on:click={()=>{
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.reload();
            }}>Log out</button></h3>
        {/if}
    </header>

<main>
    <slot></slot>
</main>

<Footer year={year}/> 
</body>

