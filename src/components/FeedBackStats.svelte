<script>
  import { FeedBackStore } from "../stores";

  console.log(FeedBackStore);

  $: count = $FeedBackStore.length;
  $: average =
    $FeedBackStore.reduce((a, { rating }) => a + rating, 0) /
    $FeedBackStore.length;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Ratings Average: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    color: #28313b;
  }
</style>
