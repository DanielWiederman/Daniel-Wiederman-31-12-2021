import { call } from "redux-saga/effects";

async function fetchJson(url: string) {
  let resp;
  try {
    let data = await fetch(url);
    resp = { data: await data.json() };
  } catch (e: any) {
    resp = { err: e.message };
  }
  return resp;
}

export function* fetchApi(url: string) {
  try {
    const { data } = yield call(fetchJson, url);
    return data;
  } catch (e: any) {}
}
