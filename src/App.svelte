<script lang="ts">
  import InfoCard from '$lib/InfoCard.svelte'
  import StepCard from '$lib/StepCard.svelte'
  import Menu from '$lib/Menu.svelte'
  import SummaryCard from '$lib/SummaryCard.svelte'
  import LiveCard from '$lib/LiveCard.svelte'
  import BookmarkCard from '$lib/BookmarkCard.svelte'
</script>

<main class="h-screen">
  <div class="flex h-full space-x-4">
    <Menu class="h-full"/>
    <div class="flex flex-col justify-between">
      <InfoCard class="h-min"  />
      <StepCard class="h-min"  />
    </div>
    <div class="w-full pr-4 space-y-4">
      <SummaryCard />
      <div class="flex space-x-4">
        <LiveCard class="flex-1 w-auto" />
        <div class="flex-none">
          <BookmarkCard class="w-80" />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
