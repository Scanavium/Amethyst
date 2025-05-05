export interface NodeSocket<T> {
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