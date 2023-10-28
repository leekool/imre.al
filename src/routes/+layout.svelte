<script lang="ts">
    import "../app.css";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    onMount(() => {
        console.log($page);
    });
</script>

<header>
    <div class="layout">
        <a id="site-title" class="clean-link" href="/">
            <img src="header.png" alt="header">
        </a>
    </div>
</header>

<slot />

<footer>
    <div class="layout">
        <div>
            <a class="link" href="/">
                lee luppi
            </a>
        </div>
        <div class="footer-links">
            <a class="icon-link" title="Contact" href="mailto:lee@imre.al">
                <img src="icon-mail.png" alt="Contact">
            </a>
            <a class="icon-link" title="GitHub" href="https://github.com/leekool">
                <img src="icon-github.png" alt="GitHub">
            </a>
        </div>
    </div>
</footer>

<style>
    .layout {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    header {
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #161616;
    }

    header .layout {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .layout #site-title {
        font-family: "Roboto Slab", serif;
        font-size: 1.4rem;
        font-weight: 300;
        /* color: #78b0d3; */
        color: #97ef9f;
    }

    header .layout a {
        align-self: last baseline;
    }

    footer {
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-top: 1px solid #161616;
        font-size: 0.8rem;
    }

    footer .layout {
        display: flex;
        justify-content: space-between;
    }

    footer .link {
        /* font-family: "Berkeley Mono", monospace; */
        font-size: 0.8rem;
        color: #5c6166;
        text-decoration: none;
    }

    footer .link:hover {
        text-decoration: underline;
    }

    .footer-links {
        display: flex;
    }

    .icon-link img {
        width: 4rem;
        aspect-ratio: 1 / 1;
    }
</style>
