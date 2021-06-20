import {useCallback} from 'react';

export default function Input({add}) {
    const onKeyUp = useCallback((event) => {
        if (event.code !== 'Enter') return;

        const value = event.target.value.trim();
        if (value !== '') add(value);

        event.target.value = '';
    }, [add]);

    return (
        <div className="flex flex-row items-center px-6 rounded" style={{backgroundColor: 'var(--item__bg)', height: '4rem'}}>
            <div className="h-6 w-6 border border-solid rounded-full mr-6 flex-shrink-0 flex-grow-0" style={{borderColor: '#383b57'}}></div>

            <input
                className="flex-grow flex-shrink bg-transparent border-none outline-none"
                placeholder="Create a new todo"
                style={{color: 'var(--item__text-color)', caretColor: '#5c77b0'}}
                onKeyUp={onKeyUp}
            />
        </div>
    );
}
