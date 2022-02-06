import { writable } from "svelte/store";

export const FeedBackStore = writable([
  {
    id: 1,
    text: " feedback 1",
    rating: 3,
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
]);
