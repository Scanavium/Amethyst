export interface AmethystNode<T extends {
  state: { [key: string]: any },
  parameters: { [key: string]: any },
  inputs: { [key: string]: <K extends keyof T["inputs"]>(this: AmethystNode<T>) => T["inputs"][K] },
  outputs: { [key: string]: <K extends keyof T["outputs"]>(this: AmethystNode<T>) => T["outputs"][K] },
}> {
  id: string;
  name: string;
  description: string;
  uuid: string;
  properties: {
    x: number,
    y: number,
    bypassed: boolean,
  };
  state: T["state"];
  parameters: T["parameters"];
  inputs: T["inputs"];
  outputs: T["outputs"];
  connections: [T, keyof T["outputs"]][];
  init: (this: AmethystNode<T>) => void;
}