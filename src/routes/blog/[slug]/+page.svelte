<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>imre.al - {data.title}</title>
    <meta property="og:title" content={data.title} />
</svelte:head>

<article>
    <h1>{data.title}</h1>
    <p>{data.date}</p>
    <svelte:component this={data.content} />
</article>
