
interface JokeInterface {
  id: string;
  value: string;
};
  
type JokeState = {
  jokes: JokeInterface[];
};
  
type JokeAction = {
  type: string;
  joke: JokeInterface;
};
  
type DispatchType = (args: JokeAction) => JokeAction;
