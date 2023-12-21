<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<Card.Root
  class={cn("live-card w-[720px] overflow-hidden", className)}
  {...$$restProps}
>
  <Card.Content class="p-0">
    <AspectRatio ratio={16 / 9} class="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Gray by Drew Beamer"
        class="object-cover h-full w-full"
      />
    </AspectRatio>
  </Card.Content>
  <Card.Footer class="flex justify-end text-sm text-slate-500 p-3">
    view more playback...
  </Card.Footer>
</Card.Root>
