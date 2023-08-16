<script lang="ts" context="module">
    interface Post {
        meta: {
            title: string;
            date: string;
            category: string;
        };
        path: string;
    }

    export interface Data {
        posts: Post[];
    }
</script>

<script lang="ts">
    export let data: Data;

    const getLongDate = (date: string) => {
        const dateOptions: Intl.DateTimeFormatOptions = {
            day: "numeric",
            month: "short",
            year: "numeric",
        };

        return new Date(date).toLocaleString("en-GB", dateOptions);
    };
</script>

<div id="main" class="content">
    <div class="blog-posts">
        <ul>
            {#each data.posts as post}
                <li>
                    <time datetime={post.meta.date}>{getLongDate(post.meta.date)}</time>
                    <a class="clean-link" href={post.path}>{post.meta.title}</a>
                    <span class="tags">
                        <a class="tag" href="/blog/category/{post.meta.category}">
                            {post.meta.category}
                        </a>
                    </span>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    #main {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .content {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .blog-posts {
        line-height: 1.5;
    }

    .blog-posts li time {
        margin-right: 0.5rem;
        font-family: "Berkeley Mono", monospace;
        font-size: 0.8rem;
    }

    .blog-posts li .tags {
        float: right;
        margin-left: 0.5rem;
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
