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
      <div class="flex justify-between gap-2">
        <h1 class="justify-self-start self-center text-xl text-black">
          {selectedColor()?.name ?? "The Colors"}
        </h1>
        <button
          type="button"
          onClick={() => copyToClipboard(selectedColor()?.id || "")}
          class="neumorphic flex items-center justify-between justify-self-end gap-2 p-2 max-w-fit text-black text-sm rounded-full"
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
          class="aspect-[1.618/1] focus-outline-blue neumorphic-shadow"
          style={{ "background-color": color.id }}
          onClick={() => setSelectedColor(color)}
        ></button>
      )}
    </For>
  );

  return (
    <div class="flex flex-col gap-4 w-full max-w-md">
      {infoBar}
      <div class="grid grid-cols-3 gap-2">{colorChart}</div>
    </div>
  );
}
