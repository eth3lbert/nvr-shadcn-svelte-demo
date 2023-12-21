<script lang="ts">
  import InfoCard from '$lib/InfoCard.svelte'
  import StepCard from '$lib/StepCard.svelte'
  import Menu from '$lib/Menu.svelte'
  import SummaryCard from '$lib/SummaryCard.svelte'
  import LiveCard from '$lib/LiveCard.svelte'
  import BookmarkCard from '$lib/BookmarkCard.svelte'
  import RecentEventLogsCard from '$lib/RecentEventLogsCard.svelte'
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
        <LiveCard class="flex-1 h-max w-auto" />
        <div class="flex-none space-y-4">
          <BookmarkCard class="w-80" />
          <RecentEventLogsCard class="w-80" />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
