<script lang="ts">
    export let hour;
</script>

{#if hour <= 12 }
    <h3>Good morning: </h3>
{:else}
    <h3>Good afternoon: </h3>
{/if}

