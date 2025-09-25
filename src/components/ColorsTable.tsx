import type { Color } from "../types.ts";
import { For, createSignal, createEffect, Show } from "solid-js";

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
      <div class="grid grid-cols-[2fr_5fr_2fr] gap-2">
        <div
          class="w-full h-full justify-self-center self-center rounded-full"
          style={{ "background-color": selectedColor()?.id }}
        ></div>
        <h1 class="text-lg text-center text-white font-black">
          {selectedColor()?.name ?? "The Colors"}
        </h1>
        <button
          type="button"
          onClick={() => copyToClipboard(selectedColor()?.id || "")}
          class="px-3 py-1 text-white font-bold text-sm rounded-full border-2 border-white hover:bg-blue-600"
        >
          {copiedColor() === selectedColor() ? "Copied!" : selectedColor()?.id}
        </button>
      </div>
    </Show>
  );

  const colorChart = (
    <For each={props.colors}>
      {(color) => (
        <button
          type="button"
          class="aspect-square rounded-full"
          style={{ "background-color": color.id }}
          onClick={() => setSelectedColor(color)}
        ></button>
      )}
    </For>
  );

  return (
    <div class="flex flex-col gap-2 w-full max-w-md">
      {infoBar}
      <hr />
      <div class="grid grid-cols-4 gap-2">
        {colorChart}
      </div>
    </div>
  );
}
