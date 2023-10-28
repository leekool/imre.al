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
        <div>
            <a class="icon-link" title="Contact" href="mailto:lee@imre.al">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                    />
                </svg>
            </a>
            <a
                class="icon-link"
                title="GitHub"
                href="https://github.com/leekool"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    />
                </svg>
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
</style>
