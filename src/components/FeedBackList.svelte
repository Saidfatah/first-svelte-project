<script>
  import { onMount, onDestroy } from "svelte";
  import { FeedBackStore } from "../stores";
  import { fade, slide, scale } from "svelte/transition";
  import FeedBackItem from "./FeedBackItem.svelte";

  let feedback = [];

  let unsbuscribeRef = onMount(() => {
    unsbuscribeRef = FeedBackStore.subscribe((data) => {
      console.log(data);
      feedback = data;
    });
    console.log("mounted");
  });

  onDestroy(() => {
    console.log("on destroy");
    unsbuscribeRef();
  });
</script>

{#each feedback as fb (fb.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedBackItem item={fb} on:delete-feedback />
  </div>
{/each}
