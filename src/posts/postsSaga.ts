import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsUrl } from "../utils/apiUrls";
import { fetchApi } from "../utils/sagaUtils";
import { ENTER_POST_PAGE } from "./postActionsConst";
import { Posts, PostStateItem } from "./postInterfaces";
import { postFetchingComplete } from "./postsActions";

export default function* postsSaga() {
  yield call(enterPostPage);
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* enterPostPage() {
  yield takeEvery(ENTER_POST_PAGE, function* (): Generator<any> {
    const data = yield call(fetchApi, getPostsUrl());
    const reducerData: Posts = {};
    (data as PostStateItem[]).forEach((post) => {
      Object.assign(reducerData, { [post.id]: post });
    });
    yield put(postFetchingComplete(reducerData));
  });
}
