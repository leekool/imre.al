<script lang="ts">
    import { page } from "$app/stores";
</script>

<div id="main" class="content">
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}</p>
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
</style>
