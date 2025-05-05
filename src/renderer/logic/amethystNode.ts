/** A 2-Dimensional vector. */
export type Vec2 = [number, number];

/** A 3-Dimensional vector. */
export type Vec3 = [number, number, number];

/** A 4-Dimensional vector. */
export type Vec4 = [number, number, number, number];

/** A simple texture with an array of Vec4 (argb) as pixels and a given width (height as length / width). */
export type Texture = { data: Vec4[], width: number };

/** A composite type to constraint a socket to commonly used types. */
export type AmethystNodeSocketType = number | number[] | Vec2 | Vec3 | Vec4 | Texture | AudioNode;

/** A socket of a node, either input or output, which can connect to other sockets. */
export interface AmethystNodeSocket<T extends AmethystNodeSocketType> {
  /** Value of the socket. */
  value: T;

  /** UUID of the socket. */
  uuid: string;

  /** If this socket only allows a single input connection. */
  singleInput: boolean;

  /** The input connections to the socket (in UUIDs). */
  input: string[];

  /* NOTE:
   * The reason as to why there is a list only for inputs, and none for outputs, is because it is unnecessary
   * (redundant) to define a list for outputs (saving space).
   * The reason for it being redundant is, because the node system will propagate from last to first.
   *
   * Why last to first? Imagine you have a master output node at the end, which has no outputs and is used to finally
   * write the audio to an audio device. What does the node depend on? It depends only on the input from its sockets.
   * Now imagine putting some filter nodes in front of the master output.
   *
   * Master Input -> Filter -> Filter -> Filter -> Master Output
   *
   * The Master Output depends only on the output of the node before it, and this node on the one before it and so on.
   * To make a functional system to calculate the end result, does a node need to care where its outputs are going?
   * Absolutely not, just take the inputs and compute the outputs, no need to care which nodes are actually using it.
   * This saves space and complexity, and only calculates what is actually needed in the end by a consuming (end) node.
   */
}

export default interface AmethystNode {
  /** The name of the node. */
  title: string;

  /** The description of the node. */
  description: string;

  /** The UUID of the node. */
  id: string;

  /** The type of this node. */
  type: string;

  /** The available input sockets. */
  inputs: AmethystNodeSocket<any>[];

  /** The available output sockets. */
  outputs: AmethystNodeSocket<any>[];

  /** The x-position of the node. */
  x: number;

  /** The y-position of teh node. */
  y: number;
}