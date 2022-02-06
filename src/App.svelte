<script>
  import FeedbackList from "./components/FeedBackList.svelte";
  // import FeedbackForm from './components/FeedbackForm.svelte'
  // import FeedbackStats from './components/FeedbackStats.svelte'

  let feedback = [
    {
      id: 1,
      text: " feedback 1",
      rating: 5,
    },
    {
      id: 2,
      text: " feedback 2",
      rating: 5,
    },
    {
      id: 3,
      text: " feedback 3",
      rating: 3,
    },
    {
      id: 4,
      text: " feedback 1",
      rating: 5,
    },
  ];

  const deleteFeedBack = (e) => {
    const itemId = e.detail;
    feedback = [...feedback.filter((fb) => fb.id !== itemId)];
  };
</script>

<main class="container">
  <FeedbackList {feedback} on:delete-feedback={deleteFeedBack} />
</main>
