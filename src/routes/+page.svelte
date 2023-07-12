<script lang="ts">
    export let data;
</script>

<div id="content">
    <h1>Lee Luppi</h1>
    <ul>
        <li>
            <a href="/contact">Contact</a>
        </li>
        {#each data.posts as post}
            <li>
                <a href={post?.path}>{post.meta.title}</a>
                {post.meta.date}
            </li>
        {/each}
    </ul>
</div>

<style>
</style>
