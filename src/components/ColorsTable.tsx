import type { Color } from "../types.ts";
import { For } from "solid-js";

type ColorsTableProps = {
  colors: Color[];
};

export function ColorsTable(props: ColorsTableProps) {
  const colorRows = (
    <For each={props.colors}>
      {(color) => (
        <tr class="border-b border-gray-200 hover:bg-gray-50">
          <td class="px-6 py-4 font-medium text-gray-900">
            <div class="flex items-center gap-3">
              <div 
                class="w-6 h-6 rounded-md" 
                style={{"background-color": color.id}}
              ></div>
              {color.name}
            </div>
          </td>
          <td class="px-6 py-4 text-gray-500">{color.id}</td>
        </tr>
      )}
    </For>
  );

  return (
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border-2 border-black rounded-lg shadow-sm">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hex</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">{colorRows}</tbody>
      </table>
    </div>
  );
}
