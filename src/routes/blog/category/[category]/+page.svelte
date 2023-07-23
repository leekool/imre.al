<script lang="ts">
    import Postlist from '$lib/postlist.svelte';
    import type { Data } from '$lib/postlist.svelte';

    export let data: Data;
</script>

<svelte:head>
    <title>imre.al</title>
</svelte:head>

<Postlist bind:data />
