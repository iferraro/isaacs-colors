import type { Color } from "../types.ts";
import { For } from "solid-js";

type ColorsTableProps = {
  colors: Color[];
};

export function ColorsTable(props: ColorsTableProps) {
  const colorRows = (
    <For each={props.colors}>
      {(color) => (
        <tr>
          <td>{color.name}</td>
          <td>{color.id}</td>
        </tr>
      )}
    </For>
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>{colorRows}</tbody>
    </table>
  );
}
