<script lang="ts">
    import Postlist from '$lib/postlist.svelte';

    export let data;
</script>

<svelte:head>
    <title>imre.al</title>
</svelte:head>

<Postlist bind:data />
