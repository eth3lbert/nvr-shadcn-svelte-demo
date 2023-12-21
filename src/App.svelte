<script lang="ts">
  import InfoCard from "$lib/InfoCard.svelte";
  import StepCard from "$lib/StepCard.svelte";
  import Menu from "$lib/Menu.svelte";
  import SummaryCard from "$lib/SummaryCard.svelte";
  import LiveCard from "$lib/LiveCard.svelte";
  import BookmarkCard from "$lib/BookmarkCard.svelte";
  import RecentEventLogsCard from "$lib/RecentEventLogsCard.svelte";
  import Carousel from "$lib/FakeCarousel.svelte";
  import { GripHorizontal } from "lucide-svelte";
  import { onMount } from "svelte";

  let topHeight = "20%";
  let resize = false;
  let dragbar: HTMLElement;

  onMount(() => {
    const { clientHeight } = document.body;
    topHeight = `${clientHeight * 0.2}px`;
  });

  function onMouseDown() {
    if (resize) return;
    resize = true;
    document.body.addEventListener("mousemove", onMouseMove);
  }

  function onMouseUp() {
    if (!resize) return;
    resize = false;
    document.body.removeEventListener("mousemove", onMouseMove);
  }

  function onMouseMove(e: MouseEvent) {
    if (!resize) return;
    const { clientY } = e;
    topHeight = `${clientY}px`;
  }
</script>

<svelte:document on:mouseup={onMouseUp} />

<main class="h-screen w-screen" style:--top-height={topHeight}>
  <div class="content-top relative w-full text-center h-[var(--top-height)]">
    <Carousel />
    <div
      class="dragbar absolute top-[calc(var(--top-height)-.5rem)] h-3 w-full"
    >
      <button
        class="w-full h-full flex items-center justify-center bg-slate-900"
        on:mousedown={onMouseDown}
        bind:this={dragbar}
      >
        <GripHorizontal class="w-3" />
        <GripHorizontal class="w-3 -ml-[.125rem]" />
      </button>
    </div>
  </div>
  <div
    class="content-down flex h-[calc(100%-var(--top-height))] space-x-4 pt-4"
  >
    <Menu class="h-full" />
    <div class="flex flex-col justify-between">
      <InfoCard class="h-min" />
      <StepCard class="h-min" />
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
