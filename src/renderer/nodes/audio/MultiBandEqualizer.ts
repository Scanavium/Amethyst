import {defineAmethystNode} from "@/nodes/AmethystNode";

const node =  {
  id: "multi-band-equalizer",
  name: "Multi-Band Equalizer",
  description: "A Equalizer with multiple frequency bands and types",
  uuid: "",
  properties: {
    x: 0,
    y: 0,
    bypassed: false,
  },
  state: {
    nodes: [] as AudioNode[],
  },
  parameters: {},
  inputs: {
    node: [] as AudioNode[],
    bands: [] as {
      type: BiquadFilterType,
      frequency: number,
      gain: number,
      q: number,
    }[]
  },
  outputs: {
    node: () => undefined,
  },
  connections: [],
  init: function () {},
};

export default defineAmethystNode<typeof node>(node);