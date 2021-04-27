import * as constants from '../constants';

const initialState: JokeState = {
    jokes: [
        {
            id: '5f80ccd641785ba7c7d27c18',
            value: 'Chuck Norris can actually "hold up" a bank...with one finger.',

        },
        {
            id: '5f80ccd641785ba7c7d27b6c',
            value: "Black-eyed peas were normal peas before Chuck Norris decided he didn't like peas.",

        },
        {
            id: '5f80ccd641785ba7c7d27b58',
            value: "Chuck Norris can kill godzilla by saying roar",

        }
    ],
};

export const jokeReducer = (state: JokeState = initialState, action: JokeAction): JokeState => {
    if (action.type === constants.ADDJOKE) {
        const { joke } = action
        const newJoke: JokeInterface = {
            id: joke.id ? joke.id : Math.random().toString(24),
            value: joke.value,
        };
        return {
            ...state,
            jokes: state.jokes.concat(newJoke)
        };
    } else if (action.type === constants.REMOVEJOKE) {
        const updatedJokes: JokeInterface[] = state.jokes.filter(joke => joke.id !== action.joke.id);
        return {
            ...state,
            jokes: updatedJokes
        }
    };
    return state;
};