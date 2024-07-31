import React, {useState} from 'react';
import Userinput from './userinput.tsx';
import ShortenButton from './shortenbutton.tsx';

const HandleState = () => {
    const[userInput, setUserInput] = useState<string>('');
    const[link, setLink] = useState<string>('');

    const handleUserInput = (input: string) => {
        setUserInput(input);
        console.log(input);
    };


    const GetData = async() => {
        const url = 'https://api-ssl.bitly.com/v4/shorten';
        const key = '8db433cc8aa79b617d06c869940af47d79300d23';
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                long_url: userInput,
                domain: 'bit.ly'
            })
        }

        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setLink(data.id);
        console.log(link);
    }

    return (
        <div>
            <Userinput inputChange={handleUserInput}/>
            <ShortenButton onClick={GetData}/>
        </div>
    );
}

export default HandleState;