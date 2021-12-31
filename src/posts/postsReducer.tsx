import { PostState } from "./postInterfaces";
import { PostsAction } from "./postsActions";

const initialState: PostState = {
  entities: {},
};

export const postReducer = (state = initialState, action: PostsAction) => {
  switch (action.type) {
    case "POST_FETCH_COMPLETE":
      return {
        ...state,
        entities: action.entities,
      };
    default:
      return state;
  }
};
