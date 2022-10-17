<script lang="ts">
	/** @type {import('./$types').PageData} */
  export let data;

  $: ({ ProjectsList } = data);
</script>

<div>
    // Unlike in the docs I need an additional if statement 
		// in order to not get an iteration error by svelte
    {#if $ProjectsList.data?.project}
        {#each $ProjectsList.data.project as project}
            <div>
              <p>{project.name}</p>
              <p>{project.description}</p>
            </div>
        {/each}
    {/if}
</div>
