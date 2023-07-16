<script lang="ts">
    export let data;
    const categoryHref = `category/${data.category}`;
</script>

<svelte:head>
    <title>imre.al - {data.title}</title>
    <meta property="og:title" content={data.title} />
</svelte:head>

<div id="main" class="content">
    <article>
        <h1>{data.title}</h1>
        <div class="article-metadata">
            <time datetime={data.date}>{data.date}</time>
            <span class="tags">
                <a class="tag" href={categoryHref}>{data.category}</a>
            </span>
        </div>

        <div class="article-content">
            <svelte:component this={data.content} />
        </div>
    </article>
</div>

<style>
    #main {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    .content {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .tags {
        font-family: "Berkeley Mono", monospace;
        font-size: 0.8rem;
        color: #5c6166;
    }

    .tags .tag {
        text-decoration: none;
        color: inherit;
    }

    .tags .tag:hover {
        text-decoration: underline;
    }

    .tags .tag:visited {
        color: inherit;
    }
</style>
