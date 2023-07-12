<script lang="ts">
    export let data: any;
</script>

<h1>blog</h1>

<ul>
    {#each data.posts as post}
        <li>
            <h2>
                <a href={post?.path}>
                    {post?.meta?.title}
                </a>
            </h2>
            {post?.meta?.date}
        </li>
    {/each}
</ul>
