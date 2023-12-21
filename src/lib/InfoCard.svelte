<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
  import { Badge } from "$lib/components/ui/badge";
  import { Home, ExternalLink, PlaySquare, Play, Share2, Settings2 } from "lucide-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<Card.Root class={cn("info-card w-[350px]", className)} {...$$restProps}>
  <Card.Header class="p-3 bg-slate-900">
    <Card.Title class="text-blue-400">Zappias Outside</Card.Title>
    <Card.Description>asdf asdf asdf</Card.Description>
  </Card.Header>
  <Card.Content class="p-0">
    <div class="py-3 px-4">
      <Badge class="rounded-full bg-slate-900 text-muted-foreground px-2">
        <Home class="h-[1em] w-[1em] mr-1" />
        Zappias
      </Badge>
      <Badge class="rounded-full bg-slate-900 text-muted-foreground px-2">
        <ExternalLink class="h-[1em] w-[1em] mr-1" />
        Shared (2)
      </Badge>
    </div>
    <AspectRatio ratio={16 / 9} class="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Gray by Drew Beamer"
        class="object-cover h-full w-full"
      />
    </AspectRatio>
  </Card.Content>
  <Card.Footer
    class="flex space-x-2 bg-slate-900 text-muted-foreground justify-around p-3"
  >
    <Button
      class="bg-transparent border border-solid border-muted-foreground text-muted-foreground"
      ><PlaySquare /></Button
    >
    <Button
      class="bg-transparent border border-solid border-muted-foreground text-muted-foreground"
      ><Play /></Button
    >
    <Button
      class="bg-transparent border border-solid border-muted-foreground text-muted-foreground"
      ><Share2 /></Button
    >
    <Button
      class="bg-transparent border border-solid border-muted-foreground text-muted-foreground"
      ><Settings2 /></Button
    >
  </Card.Footer>
</Card.Root>
