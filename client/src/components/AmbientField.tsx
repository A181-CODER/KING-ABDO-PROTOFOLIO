/** Design: Black Signal Theatre — sparse technical coordinates create depth without competing with editorial typography. */
import type { CSSProperties } from "react";

const nodePositions = [
  [6, 14, 0], [12, 76, 1.3], [18, 38, 2.1], [24, 88, 3.4], [31, 21, .7], [36, 63, 4.2], [42, 7, 2.7], [48, 83, 1.7], [53, 45, 3.1], [59, 14, 4.8], [64, 71, .9], [69, 34, 2.5], [74, 91, 3.9], [78, 54, 1.1], [83, 16, 4.4], [89, 69, 2.9], [94, 38, .4], [97, 86, 3.5],
];

export function AmbientField() {
  return <div aria-hidden="true" className="ambient-field">
    {nodePositions.map(([x, y, delay], index) => (
      <span className="ambient-node" key={index} style={{ "--x": `${x}%`, "--y": `${y}%`, "--delay": `${delay}s` } as CSSProperties} />
    ))}
  </div>;
}
