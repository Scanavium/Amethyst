export type Vec2 = [number, number];
export type Vec3 = [number, number, number];
export type Vec4 = [number, number, number, number];
export type Texture = { data: Vec4[], width: number };
export type NodeSocketType = number | number[] | Vec2 | Vec3 | Vec4 | Texture | AudioNode;

export interface NodeSocket<T extends NodeSocketType> {
  /** Value of the socket. */
  value: T;
  /** UUID of the socket. */
  uuid: string;
  /** If this socket only allows a single input connection. */
  singleInput: boolean;
  /** The input connections to the socket (in UUIDs). */
  input: string[];
}

export default class Node {

  /** The available input sockets */
  private inputs: NodeSocket<any>[];
  /** The available output sockets */
  private outputs: NodeSocket<any>[];

  public constructor(inputs?: NodeSocket<any>[], outputs?: NodeSocket<any>[]) {
    this.inputs = inputs || [];
    this.outputs = outputs || [];
  }
}