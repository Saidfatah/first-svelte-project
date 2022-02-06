<script>
  import { onMount, onDestroy } from "svelte";
  import { FeedBackStore } from "../stores";
  import { fade, slide, scale } from "svelte/transition";
  import FeedBackItem from "./FeedBackItem.svelte";
</script>

{#each $FeedBackStore as fb (fb.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedBackItem item={fb} />
  </div>
{/each}
