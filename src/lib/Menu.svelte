<script lang="ts">
  import * as Menubar from "$lib/components/ui/menubar";
  import { Home, Cctv, Users, Settings2, BadgeCheck, Info, LogOut } from "lucide-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };
</script>

<Menubar.Root class={cn(
  "menu flex-col h-full w-auto space-y-4 py-4 border-purple-400 bg-purple-400 bg-opacity-10",
  className
)} {...$$restProps}>
  <Menubar.Menu>
    <Menubar.Trigger><Home /></Menubar.Trigger>
    <Menubar.Trigger><Cctv /></Menubar.Trigger>
    <Menubar.Trigger><Users /></Menubar.Trigger>
    <Menubar.Trigger><Settings2 /></Menubar.Trigger>
    <div class="flex-1" />
    <Menubar.Trigger><BadgeCheck /></Menubar.Trigger>
    <Menubar.Trigger><Info /></Menubar.Trigger>
    <Menubar.Trigger><LogOut /></Menubar.Trigger>
  </Menubar.Menu>
</Menubar.Root>
