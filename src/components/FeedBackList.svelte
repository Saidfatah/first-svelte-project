<script>
  import { fade, slide, scale } from "svelte/transition";
  import FeedBackItem from "./FeedBackItem.svelte";
  export let feedback = [];
</script>

{#each feedback as fb (fb.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedBackItem item={fb} on:delete-feedback />
  </div>
{/each}
