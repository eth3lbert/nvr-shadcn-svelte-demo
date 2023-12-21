<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };

  const logs = [
    { event: "CAMERA_ONLINE", time: "2023-01-01 12:00:00" },
    { event: "CAMERA_ONLINE", time: "2023-01-01 11:00:00" },
    { event: "CAMERA_ONLINE", time: "2023-01-01 10:00:00" },
    { event: "CAMERA_ONLINE", time: "2023-01-01 09:00:00" },
    { event: "CAMERA_OFFLINE", time: "2023-01-01 08:00:00" },
  ];
</script>

<Card.Root
  class={cn("recent-event-logs-card overflow-hidden", className)}
  {...$$restProps}
>
  <Card.Header class="p-3">
    <Card.Title class="text-green-400">Recent Events Logs</Card.Title>
    <Card.Description class="text-xs text-slate-500"
      >This displays the events our system has encountered while streaming your
      camera.</Card.Description
    >
  </Card.Header>
  <Card.Content class="p-3">
    {#each logs as { event, time }}
      <div class="flex items-center justify-between">
        <p class="text-muted-foreground">{event}</p>
        <p class="text-xs text-slate-600">{new Date(time).toLocaleString()}</p>
      </div>
    {/each}
  </Card.Content>

  <Card.Footer class="flex justify-end text-xs text-slate-500 p-3">
    Manage bookmarks...
  </Card.Footer>
</Card.Root>
