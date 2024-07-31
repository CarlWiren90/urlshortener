import './shortenbutton.css';

const ShortenButton = ({onClick}) => {
    return (
        <button className='button' onClick={onClick}>Shorten!</button>
    );
}

export default ShortenButton;