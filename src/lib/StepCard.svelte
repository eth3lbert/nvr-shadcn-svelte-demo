<script lang="ts">
  import { Progress } from "$lib/components/ui/progress";
  import * as Card from "$lib/components/ui/card";
  import { Separator } from "$lib/components/ui/separator";
  import { Check } from "radix-icons-svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  let className: $$Props["class"] = undefined;
  export { className as class };

  const steps = [
    {
      label: "Confirm email",
      status: "done",
    },
    {
      label: "Connect first camera",
      status: "done",
    },
    {
      label: "View camera live",
      status: "pending",
    },
    {
      label: "Save a bookmark",
      status: "pending",
    },
    {
      label: "Share footage",
      status: "pending",
    },
  ];

  // $: progress =
  //   (steps.filter((v) => v.status === "done").length / steps.length) * 100;
  let progress = 8;
</script>

<Card.Root class={cn("step-card w-[350px]", className)} {...$$restProps}>
  <Card.Header class="p-3">
    <Progress
      value={progress}
      max={100}
      class="w-full h-8 rounded-lg progress bg-background"
    />
  </Card.Header>
  <Card.Content class="p-3 pt-0">
    <Card.Root>
      <ul class="space-y-2 py-3">
        {#each steps as { label, status }, i}
          {#if i !== 0}
            <Separator />
          {/if}
          <li class="flex px-3 py-1 space-x-4 text-muted-foreground">
            <div class="w-4">{i}</div>
            <div
              class="flex-1"
              class:line-through={status === "done"}
              class:text-accent-foreground={status !== "done"}
            >
              {label}
            </div>
            <div
              class="circled {status} h-5 w-5 rounded-full border border-solid flex justify-center items-center"
              class:text-background={status === "done"}
              class:bg-green-500={status === "done"}
              class:border-green-500={status === "done"}
              class:border-muted-foreground={status !== "done"}
              class:text-muted-foreground={status !== "done"}
            >
              <Check class="mt-px h-3 w-3" />
            </div>
          </li>
        {/each}
      </ul>
    </Card.Root>
  </Card.Content>
  <Card.Footer
    class="flex space-x-2 text-muted-foreground justify-end p-3 pt-0"
  >
    Need help <a class="ml-1 text-indigo-400" href="#">getting started</a>?
  </Card.Footer>
</Card.Root>

<style lang="postcss">
  :global(.step-card .progress) {
    & > div {
      background: theme(colors.green.500);
    }
    &:after {
      content: "Getting Started";
      color: theme(colors.foreground);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      padding-left: 0.5rem;
    }
  }
</style>
