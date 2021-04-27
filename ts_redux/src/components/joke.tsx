import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

type JokeProps = {
    joke: JokeInterface;
    removeJoke: (joke: JokeInterface) => void;
};

const Joke: React.FC<JokeProps> = ({ joke, removeJoke }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const deleteJoke = React.useCallback((joke: JokeInterface) => // useCallback is used to avoid unneeded re-rendering by memoizing the values as dependencies
    dispatch(removeJoke(joke)), [dispatch, removeJoke])



    return (
        <div 
            style={{ display: 'flex', flexDirection: 'row', 
            justifyContent: 'center', padding: '.5em', alignItems: 'center' }}
        >
            <p style={{ width: '70%', textAlign: 'center' }}>{ joke.value }</p>
            <button 
                className='deleteJokeButton'
                onClick={ () => deleteJoke(joke) }>Delete</button>
        </div>
    );
};

export default Joke;
