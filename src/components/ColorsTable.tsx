import type { Color } from "../types.ts";
import { For, createSignal, Show } from "solid-js";

type ColorsTableProps = {
  colors: Color[];
};

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
          class="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors"
          onClick={() => setSelectedColor(color)}
        >
          <div
            class="w-6 h-6 rounded-md border border-gray-300"
            style={{ "background-color": color.id }}
          ></div>
        </div>
      )}
    </For>
  );

  const infoBar = (
    <div class="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
      <Show
        when={selectedColor()}
        fallback={
          <div class="text-lg font-medium text-gray-700">The colors</div>
        }
      >
        <div class="flex items-center gap-4">
          <div
            class="w-8 h-8 rounded-md border border-gray-300"
            style={{ "background-color": selectedColor()?.id }}
          ></div>
          <div class="flex-1">
            <div class="font-medium text-gray-900">{selectedColor()?.name}</div>
            <div class="text-sm text-gray-600">{selectedColor()?.id}</div>
          </div>
          <button
            type="button"
            onClick={() => copyToClipboard(selectedColor()?.id || "")}
            class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
          >
            {copiedColor() === selectedColor() ? "Copied!" : "Copy"}
          </button>
        </div>
      </Show>
    </div>
  );

  return (
    <div>
      {infoBar}
      <div class="p-4">
        <div class="flex flex-wrap gap-4">{colorChart}</div>
      </div>
    </div>
  );
}
