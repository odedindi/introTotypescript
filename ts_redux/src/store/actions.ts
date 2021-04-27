import * as constants from "./constants"


export const dispatchRequest = (action: JokeAction) => {
  return (dispatch: DispatchType) => {
      dispatch(action)
  };
};

export const addJoke = (joke: JokeInterface) => {
  const action: JokeAction = {
    type: constants.ADDJOKE,
    joke,
  };

  return dispatchRequest(action)
};

export const removeJoke = (joke: JokeInterface) => {
  const action: JokeAction = {
    type: constants.REMOVEJOKE,
    joke,
  };
  return dispatchRequest(action)
};


