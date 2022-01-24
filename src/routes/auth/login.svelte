<script>
    import axiosInstance from "$lib/axios"
    import { onMount } from 'svelte';
    let username;
    let password;
    let access_token;
    onMount(()=>{
        access_token = localStorage.getItem('access_token')
        console.log(access_token)
    })


    function logIn(){
        axiosInstance.post(`https://oltlatifi.pythonanywhere.com/api/token/`, {
            username:username,
            password:password}
            )
        .then((response)=>{
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            axiosInstance.defaults.headers['Authorization'] = 
            'JWT'+ localStorage.getItem('access_token');
            window.location.reload();
        })
    }
</script>


<div class="ctn flex flex-col">
    <h1 class="txt">Log in</h1>
    <h3 class="text-lg">For superuser access</h3>
    
    {#if access_token !== null}
        <a href="/submit/approve/" class="btn my-2">Approve some questions</a>
    {:else}
        <input class="rounded h-8 px-2 my-2" type="text" placeholder="Username" bind:value={username}>
        <input class="rounded h-8 px-2 my-2" type="password" placeholder="Password" bind:value={password}>
        <buton class="btn my-2" on:click={logIn}>Log in</buton>
    {/if}
</div>

