<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<Card.Root
  class={cn("bookmark-card overflow-hidden", className)}
  {...$$restProps}
>
  <Card.Header class="p-3">
    <Card.Title class="text-green-400">Bookmarks</Card.Title>
    <Card.Description class="text-xs text-slate-500"
      >Create bookmarks from points in time from your video footage.</Card.Description
    >
  </Card.Header>
  <Card.Content class="p-3">
    <Button class="w-full py-6 border border-dashed bg-background text-muted-foreground"
      >Create a new bookmark..</Button
    >
  </Card.Content>

  <Card.Footer class="flex justify-end text-xs text-slate-500 p-3">
    Manage bookmarks...
  </Card.Footer>
</Card.Root>
