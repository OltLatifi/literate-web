<script lang="ts">
    import Greeting from "$lib/greeting.svelte";
    import Footer from "$lib/footer.svelte";
    import '../app.css'


    const time = new Date();
    let hour = time.getHours();
    let year = time.getFullYear();

</script>
<body class="bg-slate-400 container flex flex-col mx-auto">
    <header class="container flex flex-row mt-8 bg-slate-300 justify-center max-w-lg rounded py-2 overflow-hidden">
        <h3 class="mx-1 px-1 font-mono"><a href="/">Home</a></h3>
        <h3 class="mx-1 px-1 font-mono"><a href="/submit">Submit</a></h3>
        <h3 class="mx-1 px-1 font-mono"><a href="/about">About</a></h3>
    </header>

<main>
    <slot></slot>
</main>

<Footer year={year}/> 
</body>

