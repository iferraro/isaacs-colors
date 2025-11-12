import type { Color } from "../types.ts";
import { For, createSignal, createEffect, Show } from "solid-js";
import { HeroIconsSquare2Stack } from "./HeroIconsSquare2Stack.tsx";

type ColorsTableProps = {
  colors: Color[];
};

export function ColorsTable(props: ColorsTableProps) {
  const [selectedColor, setSelectedColor] = createSignal<Color | null>(null);
  const [copiedColor, setCopiedColor] = createSignal<Color | null>(null);
  const [isTransitioning, setIsTransitioning] = createSignal(false);
  const [copyButtonDisplayText, setCopyButtonDisplayText] =
    createSignal<string>("");

  createEffect(() => {
    if (!selectedColor() && props.colors.length > 0) {
      setSelectedColor(props.colors[0]);
    }
  });

  // Update display text when copiedColor changes
  createEffect(() => {
    const newText =
      copiedColor() === selectedColor() ? "Copied!" : selectedColor()?.id || "";
    if (newText !== copyButtonDisplayText()) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCopyButtonDisplayText(newText);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 150);
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
      <div class="flex flex-col items-start gap-2">
        <h1 class="pt-8 text-2xl text-white font-bold">
          {selectedColor()?.name ?? "The Colors"}
        </h1>
        <div class="flex items-center">
          <div
            class="w-8 h-8 rounded-full"
            style={{ "background-color": selectedColor()?.id }}
          ></div>
          <button
            type="button"
            onClick={() => copyToClipboard(selectedColor()?.id || "")}
            class="flex items-center justify-between justify-self-end gap-2 p-2 max-w-fit text-white text-md rounded-full font-bold"
          >
            <span
              class={`transition-opacity duration-150 ease-in-out ${
                isTransitioning() ? "opacity-0" : "opacity-100"
              }`}
            >
              {copyButtonDisplayText()}
            </span>
            <HeroIconsSquare2Stack />
          </button>
        </div>
      </div>
    </Show>
  );

  const colorChart = (
    <div class="grid grid-cols-4 gap-2">
      <For each={props.colors}>
        {(color) => (
          <button
            type="button"
            class="aspect-[1.618/1] rounded-xl focus-outline-blue transition-transform transform active:scale-90"
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
