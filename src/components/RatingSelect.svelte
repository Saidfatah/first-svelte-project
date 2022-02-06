<script>
  import { createEventDispatcher } from "svelte";
  let selected = 10;
  const ratingsValues = Array.from(Array(10).keys());
  const dispatch = createEventDispatcher();
  const onChange = (e) => {
    selected = e.currentTarget.value;
    dispatch("rating-select", selected);
  };
</script>

<ul class="rating">
  {#each ratingsValues as ratingValue (ratingValue)}
    <li>
      <input
        type="radio"
        id={"num" + ratingValue}
        name="rating"
        value={ratingValue}
        on:change={onChange}
        checked={selected === 1}
      />
      <label for={"num" + ratingValue}>{ratingValue}</label>
    </li>
  {/each}
</ul>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }
  .rating li {
    position: relative;
    background-color: #f1dfd1;
    background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);
    box-shadow: 2px 2px 10px #a8a09a;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 12px;
    font-size: 19px;
    transition: 0.3s;
  }
  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .rating li:hover {
    background-color: #485461;
    background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
    color: #fff;
  }
  /* Make actual radio select invisible */
  [type="radio"] {
    opacity: 0;
  }
  /* Use the sibling select */
  [type="radio"]:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>
