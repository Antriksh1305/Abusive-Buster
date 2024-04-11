import { useState } from 'react';
import './testBox.css'; // Import your custom CSS file

const TestBox = () => {
    const [sentence, setSentence] = useState('');
    const [original, setOriginal] = useState('');
    const [result, setResult] = useState('');
    const [warning, setWarning] = useState(false);

    const handleCheck = async () => {
        if (!sentence.trim()) {
            setWarning('Please enter a sentence to check');
            return;
        }
        try {
            const response = await fetch('https://6aw5czotni.execute-api.ap-south-1.amazonaws.com/censor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sentence: sentence })
            });
            if (!response.ok) {
                setWarning('An error occurred. Please try again later.');
            }
            const data = await response.json();
            const text = JSON.parse(data.body).cleaned_sentence;
            setOriginal(sentence);
            setResult(text);
            setSentence('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='test-box'>
            <h2>Test the Chatbot</h2>
            <p>Enter a sentence to check for abusive language:</p>
            <input
                type='text'
                className='form-control'
                placeholder='Enter your sentence here'
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
                onFocus={() => setWarning(false)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleCheck();
                    }
                }}
            />
            {warning && <p className='warning' style={{ color: 'red', fontSize: '14px' }}>{warning}</p>}
            {result && <p className='response'>The original sentence is: {original}</p>}
            {result && <p className='response'>The cleaned sentence is: {result}</p>}
            <button className='btn btn-primary' onClick={handleCheck}>Check</button>
        </div>
    );
};

export default TestBox;
