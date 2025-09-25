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
      <div class="grid grid-cols-[2fr_1fr] gap-2">
        <h1 class="justify-self-start self-center text-xl text-white">
          {selectedColor()?.name ?? "The Colors"}
        </h1>
        <button
          type="button"
          onClick={() => copyToClipboard(selectedColor()?.id || "")}
          class="flex items-center justify-between justify-self-end gap-2 p-2 max-w-fit text-white text-sm rounded-full hover:bg-blue-600"
        >
          <div
            class="w-8 h-8 rounded-full"
            style={{ "background-color": selectedColor()?.id }}
          ></div>
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
          class="h-8"
          style={{ "background-color": color.id }}
          onClick={() => setSelectedColor(color)}
        ></button>
      )}
    </For>
  );

  return (
    <div class="flex flex-col gap-4 w-full max-w-md">
      {infoBar}
      <div class="grid grid-cols-3 gap-4">{colorChart}</div>
    </div>
  );
}
