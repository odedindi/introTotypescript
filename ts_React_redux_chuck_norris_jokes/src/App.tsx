import * as React from 'react';
// ============ store ============
import { Dispatch } from 'redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addJoke, removeJoke } from './store/actions';
import { baseUrl } from './store/constants';
import { getData } from './store/asyncFetch';
// ===============================
// ========= components ==========
import AddJoke from './components/addJokeForm';
import Joke from './components/joke';
// ===============================

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const jokes: readonly JokeInterface[] = useSelector((state: JokeState) => state.jokes, shallowEqual);

  const [ showOrAddJokes, setShowOrAddJokes ] = React.useState<boolean>(true);

  const togglerTitle: string = showOrAddJokes ? 'Add new joke' :  'Show jokes';
  const toggleHandler = () => setShowOrAddJokes(!showOrAddJokes);

  const saveJoke = React.useCallback((joke: JokeInterface)  => dispatch(addJoke(joke)), [dispatch])

  const getNewHandler = async () => {
    await getData(baseUrl).then((data: any) => {
      const newJoke: JokeInterface = {
        id: data.id,
        value: data.value
      }
      saveJoke(newJoke)
    });
  };

  return (
    <div className="App">
      <div className='Header'>
        <h1>Chuck Norris Jokes </h1>
        <button className='toggler' onClick={ toggleHandler }>{ togglerTitle }</button>
        <button className='getNew' onClick={ getNewHandler }>Get a new Joke</button>
      </div>
      {
        !showOrAddJokes && <AddJoke saveJoke={ saveJoke }/>
      }
      {
        showOrAddJokes &&
        jokes.map((joke: JokeInterface) => 
          <Joke 
            joke={ joke }  
            removeJoke={ removeJoke } 
            key={ joke.id }
          />
        )
      }
    </div>
  );
};

export default App;
