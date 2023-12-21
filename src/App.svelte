<script lang="ts">
  import InfoCard from '$lib/InfoCard.svelte'
  import StepCard from '$lib/StepCard.svelte'
  import Menu from '$lib/Menu.svelte'
</script>

<main class="h-screen">
  <div class="flex h-full space-x-4">
    <Menu class="h-full"/>
    <div class="flex flex-col justify-between">
      <InfoCard class="h-min"  />
      <StepCard class="h-min"  />
    </div>
  </div>
</main>

<style>
</style>
