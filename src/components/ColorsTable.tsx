import type { Color } from "../types.ts";
import { For, createSignal, createEffect, Show } from "solid-js";
import { HeroIconsSquare2Stack } from "./HeroIconsSquare2Stack.tsx";

type ColorsTableProps = {
  colors: Color[];
};

// TODO:
// 1. Outline the selected color (likely white)
export function ColorsTable(props: ColorsTableProps) {
  const [selectedColor, setSelectedColor] = createSignal<Color | null>(null);
  const [copiedColor, setCopiedColor] = createSignal<Color | null>(null);

  createEffect(() => {
    if (!selectedColor() && props.colors.length > 0) {
      setSelectedColor(props.colors[0]);
    }
  });

  async function copyToClipboard(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedColor(selectedColor());
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  }

  const infoBar = (
    <Show when={selectedColor()}>
      <div class="flex justify-between items-center gap-2">
        <h1 class="justify-self-start self-center text-xl text-white font-bold">
          {selectedColor()?.name ?? "The Colors"}
        </h1>
        <button
          type="button"
          onClick={() => copyToClipboard(selectedColor()?.id || "")}
          class="flex items-center justify-between justify-self-end gap-2 p-2 max-w-fit text-white text-sm rounded-full font-bold"
        >
          <div
            class="w-8 h-8 rounded-full"
            style={{ "background-color": selectedColor()?.id }}
          ></div>
          {copiedColor() === selectedColor() ? "Copied!" : selectedColor()?.id}
          <HeroIconsSquare2Stack />
        </button>
      </div>
    </Show>
  );

  const colorChart = (
    <div class="grid grid-cols-4 gap-2">
      <For each={props.colors}>
        {(color) => (
          <button
            type="button"
            class="aspect-[1.618/1] rounded-xl focus-outline-blue"
            style={{ "background-color": color.id }}
            onClick={() => setSelectedColor(color)}
          ></button>
        )}
      </For>
    </div>
  );

  return (
    <div class="flex flex-col gap-2 w-full max-w-md">
      {infoBar}
      <hr class="border-white border-dashed pb-2" />
      {colorChart}
    </div>
  );
}
