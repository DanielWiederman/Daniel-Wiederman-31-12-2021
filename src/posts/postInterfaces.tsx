export interface PostStateItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type Posts = Record<number, PostStateItem>;

export interface PostState {
  entities: Posts;
}
