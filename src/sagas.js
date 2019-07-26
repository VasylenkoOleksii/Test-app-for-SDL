import { put, takeLatest, all } from 'redux-saga/effects'

export function* watchFetchPlanets() {
  yield takeLatest('INPUT_CHANGE', fetchPlanets)
}

async function fetchMultiplePages(searchQuery) {
  let result = [],
  isNextPageAvailable = true,
  nextSearchQuery = searchQuery;

  // Here we can decide how much requests for one input we do.
  // Now we get every planet, but if we engage heavier API's - consider changing this to for loop with set count
  while (isNextPageAvailable) {
    let fetchedData = await fetchHelper(nextSearchQuery)
    result.push(fetchedData.results);

    if (fetchedData.next) {
      nextSearchQuery = fetchedData.next
    } else {
      isNextPageAvailable = false;
    }
  }
  return result.flat()
}

async function fetchHelper(searchQuery) {
  return fetch(searchQuery)
    .then(res => res.json())
}

export function* fetchPlanets(action) {
  yield put({ type: 'INPUT_CHANGED', searchInputValue: action.searchInputValue });

  if (!action.searchInputValue) return
  let planetArray = yield fetchMultiplePages(`https://swapi.co/api/planets/?search=${action.searchInputValue}`)
  yield put({ type: 'PLANETS_FETCHED', results: planetArray })
}

export default function* rootSaga() {
  yield all([
    watchFetchPlanets()
  ])
}