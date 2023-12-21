<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Separator } from "$lib/components/ui/separator";
  import { Badge } from "$lib/components/ui/badge";
  import { ArrowUp, ArrowDown } from "lucide-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<Card.Root class={cn("summary-card w-full", className)} {...$$restProps}>
  <Card.Content class="p-0">
    <div class="flex items-center h-32">
      <Card.Root class="border-none flex-1 h-full">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 p-3"
        >
          <Card.Title class="text-sm font-normal text-muted-foreground"
            >Recorded Minutes</Card.Title
          >
        </Card.Header>
        <Card.Content class="flex items-center justify-between px-3">
          <div class="text-2xl font-semibold text-indigo-500">71,897</div>
          <Badge class="text-xs font-normal bg-green-200 rounded-full h-[2em]"
            ><ArrowUp class="h-[1em] w-[1em] mr-1 text-green-600" /> 12% last month</Badge
          >
        </Card.Content>
      </Card.Root>
      <Separator orientation="vertical" />
      <Card.Root class="border-none flex-1 h-full">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 p-3"
        >
          <Card.Title class="text-sm font-normal text-muted-foreground"
            >Recording Disk Usage</Card.Title
          >
        </Card.Header>
        <Card.Content class="flex items-center justify-between px-3">
          <div class="flex">
            <div class="text-2xl font-semibold text-indigo-500">71GB</div>
            <div
              class="text-xs text-normal leading-[inherit] ml-1 self-end text-slate-500"
            >
              out of 100GB
            </div>
          </div>
          <Badge class="text-xs font-normal bg-green-200 rounded-full h-[2em]"
            ><ArrowUp class="h-[1em] w-[1em] mr-1 text-green-600" /> 12%</Badge
          >
        </Card.Content>
      </Card.Root>
      <Separator orientation="vertical" />
      <Card.Root class="border-none flex-1 h-full">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 p-3"
        >
          <Card.Title class="text-sm font-normal text-muted-foreground"
            >Total Downtime</Card.Title
          >
        </Card.Header>

        <Card.Content class="flex items-center justify-between px-3">
          <div class="flex">
            <div class="text-2xl font-semibold text-pink-400 h-[1em]">
              2 hours 3 minutes
            </div>
            <div
              class="text-xs text-normal leading-[inherit] ml-1 self-end text-slate-500"
            >
              in the past 31 days
            </div>
          </div>
          <Badge class="text-xs font-normal bg-pink-200 rounded-full h-[2em]"
            ><ArrowDown class="h-[1em] w-[1em] mr-1 text-pink-600" /> 12%</Badge
          >
        </Card.Content>
      </Card.Root>
    </div>
  </Card.Content>
</Card.Root>
