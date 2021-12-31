import { ENTER_POST_PAGE, POST_FETCH_COMPLETE } from "./postActionsConst";
import { Posts } from "./postInterfaces";

export type PostsAction =
  | { type: "ENTER_POST_PAGE" }
  | { type: "POST_FETCH_COMPLETE"; entities: Posts };

export const enterPostPage = (): PostsAction => {
  return {
    type: ENTER_POST_PAGE,
  };
};

export const postFetchingComplete = (entities: Posts): PostsAction => {
  return {
    type: POST_FETCH_COMPLETE,
    entities,
  };
};
