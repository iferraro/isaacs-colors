import { createSignal, onMount } from "solid-js";
import type { Color } from "../types.ts";
import { ColorsTable } from "../components/ColorsTable.tsx";

export default function Index() {
  const [colors, setColors] = createSignal<Color[]>([]);

  onMount(async () => {
    try {
      const response = await fetch("/api/colors");
      const allColors = (await response.json()) as Color[];
      setColors(allColors);
    } catch (error) {
      console.error("Failed to fetch colors:", error);
    }
  });

  return (
    <main id="content" class="flex flex-col items-center justify-center">
      <ColorsTable colors={colors()} />
    </main>
  );
}
