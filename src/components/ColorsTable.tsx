import type { Color } from "../types.ts";
import { For, createSignal, Show } from "solid-js";

type ColorsTableProps = {
  colors: Color[];
};

// TODO:
// 1. Outline the selected color (likely white)
// 2. No title in info bar upon page load
export function ColorsTable(props: ColorsTableProps) {
  const [selectedColor, setSelectedColor] = createSignal<Color | null>(null);
  const [copiedColor, setCopiedColor] = createSignal<Color | null>(null);

  const copyToClipboard = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedColor(selectedColor());
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const colorChart = (
    <For each={props.colors}>
      {(color) => (
        <div
          class="w-12 h-12 rounded-md"
          style={{ "background-color": color.id }}
          onClick={() => setSelectedColor(color)}
        ></div>
      )}
    </For>
  );

  const infoBar = (
    <Show
      when={selectedColor()}
      fallback={<div class="text-xl text-white font-black text-gray-700">The Colors</div>}
    >
      <div class="pt-4 grid grid-cols-[5rem_1fr_5rem] gap-2">
        <div
          class="w-12 h-12 justify-self-center self-center rounded-full"
          style={{ "background-color": selectedColor()?.id }}
        ></div>
        <h1 class="text-lg text-center text-white font-black">{selectedColor()?.name}</h1>
        <button
          type="button"
          onClick={() => copyToClipboard(selectedColor()?.id || "")}
          class="px-3 py-1 text-white font-bold text-sm rounded border-2 border-white hover:bg-blue-600"
        >
          {copiedColor() === selectedColor() ? "Copied!" : selectedColor()?.id}
        </button>
      </div>
    </Show>
  );

  return (
    <div class="flex flex-col gap-2 max-w-md">
      {infoBar}
      <hr />
      <div class="flex flex-wrap gap-2 justify-center items-center">
        {colorChart}
      </div>
    </div>
  );
}
