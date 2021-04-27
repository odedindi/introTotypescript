import * as React from 'react';

type Props = {
    saveJoke: (joke: JokeInterface | any) => void;
}

const AddJokeForm: React.FC<Props> = ({ saveJoke }) => {
    const [ joke, setJoke ] = React.useState<JokeInterface | {}>();
    const [ showPlaceHolder, setShowPlaceHolder ] = React.useState<boolean>(true)

    const jokeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setJoke({
            value: event.currentTarget.value 
        })
    };

    const addNewJoke = (event: React.FormEvent) => {
        event.preventDefault();
        if (!joke){
            console.log('ew')
            return setShowPlaceHolder(false);
        }
        saveJoke(joke);
        setJoke(undefined);
    };
    const buttonrContent: string = showPlaceHolder ? 'Submit' : 'first write your joke please';

    return (
        <form onSubmit={ addNewJoke } className='add-joke'>
            <input
                type='text'
                id='value'
                placeholder='add your joke here'
                onChange={ jokeHandler }
            />
            <button type='submit' >{ buttonrContent }</button>
        </form>
    )
}

export default AddJokeForm;

