<script>
  let firstName = "said";
  let lastName = "fatah";
  let color = "red";
  let counter = 0;

  let users = [
    {
      id: 1,
      name: "Soumia ",
    },
    {
      id: 2,
      name: "Ayoub ",
    },
    {
      id: 3,
      name: "Zakaria ",
    },
  ];

  let showDescription = false;
  $: name = firstName + " " + lastName;

  setInterval(() => {
    counter++;
  }, 100);

  const toggle = () => {
    color = color == "red" ? "blue" : "red";
  };
  const toggleDescription = () => {
    showDescription = !showDescription;
  };
  const addUser = () => {
    users = [
      ...users,
      {
        id: users.length + 1,
        name: "random name lol ",
      },
    ];
  };
</script>

<main>
  <h1 style="color: {color};">Hello {name}!</h1>
  <h1 style="color: {color};">counter {counter}!</h1>
  <div>
    {#if showDescription}
      <p>I'm a software engineer</p>
    {/if}
    <button on:click={toggleDescription}>
      {#if showDescription}
        hide description
      {:else}
        show description
      {/if}
    </button>
  </div>
  <button on:click={toggle}>toggle</button>

  <h1>Users</h1>
  <button on:click={addUser}>new Random user</button>

  {#each users as user (user.id)}
    <h2>{user.id} : {user.name}</h2>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
