<script lang="ts">
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
  const videos = Array.from({ length: 9 });
  let clientHeight: number;
  $: w = `${(clientHeight * 16) / 9 || 200}px`;
</script>

<div
  class={cn("carousel flex flex-nowrap h-full overflow-auto", className)}
  bind:clientHeight
  {...$$restProps}
>
  {#each videos as _}
    <div class="pl-0:first pl-[1px]" style:min-width={w}>
      <AspectRatio ratio={16 / 9} class="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=64&dpr=2&q=80"
          alt="Gray by Drew Beamer"
          class="object-cover h-full w-full"
        />
      </AspectRatio>
    </div>
  {/each}
</div>
