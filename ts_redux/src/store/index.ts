import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import { jokeReducer } from './reducers/jokeReducer';

export const store: Store<JokeState, JokeAction> & { dispatch: DispatchType } = createStore(jokeReducer, applyMiddleware(thunk));
