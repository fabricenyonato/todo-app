import {useCallback, useEffect, useMemo, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import classNames from 'classnames';

import Input from './input';
import Todo from './todo';

const states = [
    {label: 'All', value: null},
    {label: 'Active', value: false},
    {label: 'Completed', value: true},
];

export default function App() {
    const [todos, setTodos] = useState([
        {id: uuidv4(), label: 'Lorem ipsum dolor sit amet', completed: true},
        {id: uuidv4(), label: 'In nisl nisi scelerisque', completed: false},
        {id: uuidv4(), label: 'Faucibus purus in massa tempor', completed: false},
        {id: uuidv4(), label: 'Phasellus faucibus', completed: false},
        {id: uuidv4(), label: 'Neque aliquam vestibulum', completed: false},
        {id: uuidv4(), label: 'Risus at ultrices mi', completed: false},
    ]);

    const [filter, setFilter] = useState(null);

    const add = useCallback((value) => {
        const todo = {
            id: uuidv4(),
            label: value,
            active: false,
        };

        setTodos([...todos, todo]);
    }, [todos]);

    const remove = useCallback((id) => {
        const index = todos.findIndex((todo) => todo.id === id);
        if (index === -1) return;

        const _todos = [...todos];
        _todos.splice(index, 1);

        setTodos(_todos);
    }, [todos]);

    const toggle = useCallback((todo) => {
        const index = todos.findIndex((item) => item.id === todo.id);
        if (index === -1) return;

        const _todos = [...todos];
        _todos[index] = {
            ...todo,
            completed: !todo.completed,
        };

        setTodos(_todos);
    }, [todos]);

    const clearCompleted = useCallback(() => {
        const _todos = todos.filter((todo) => !todo.completed);
        setTodos(_todos);
    }, [todos]);

    const swithTheme = useCallback(() => {
        const isLight = document.body.classList.contains('theme--light');

        if (isLight) {
            document.body.classList.add('theme--dark');
            document.body.classList.remove('theme--light');
        }
        else {
            document.body.classList.add('theme--light');
            document.body.classList.remove('theme--dark');
        }
    }, []);

    useEffect(() => {
        if (!('matchMedia' in window)) return;

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('theme--dark');
            document.body.classList.remove('theme--light');
        }
        else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.body.classList.add('theme--light');
            document.body.classList.remove('theme--dark');
        }
    }, []);

    const onDragEnd = useCallback((result) => {
        const _todos = [...todos];

        const [removed] = _todos.splice(result.source.index, 1);
        _todos.splice(result.destination.index, 0, removed);

        setTodos(_todos);
    }, [todos]);

    const uncompletedTodoCount = useMemo(
        () => todos.filter((todo) => !todo.completed).length,
        [todos]
    );

    const filterRender = (
        <div className="flex flex-row gap-4 font-bold text-base" style={{color: 'var(--filter-color)'}}>
            {states.map((state, index) => (
                <div
                    className="cursor-pointer filter"
                    onClick={() => setFilter(state.value)}
                    key={index}
                    style={filter === state.value ? {color: '#446fd4'} : {}}>
                        {state.label}
                </div>
            ))}
        </div>
    );

    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full flex flex-col">
                <div style={{height: '30%', backgroundImage: 'var(--bg-image)'}} className="bg-no-repeat bg-center bg-cover"></div>
                <div className="flex-shrink flex-grow" style={{backgroundColor: 'var(--bg)'}}></div>
            </div>

            <div className="absolute top-0 left-0 h-full w-full">
                <div className="mx-auto h-full flex flex-col app__container">
                    <div className="flex flex-col" style={{height: 'calc(30% - 3.5rem)'}}>
                        <div className="flex flex-row justify-between items-center flex-shrink flex-grow">
                            <h1 className="text-white m-0" style={{letterSpacing: '1rem'}}>TODO</h1>

                            <div className="cursor-pointer" style={{backgroundImage: 'var(--theme-icon)', height: '26px', width: '26px'}} onClick={swithTheme}></div>
                        </div>

                        <div className="flex-shrink-0 flex-grow-0">
                            <Input add={add} />
                        </div>
                    </div>

                    <div className="rounded mt-6 app__item-bg-color" style={{boxShadow: 'var(--list-shadow)'}}>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="items">
                                {(provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                        {todos.filter((todo) => filter === null ? true : (filter === todo.completed)).map((todo, index) => (
                                            <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={classNames('border-solid', {
                                                            'border-l-0': !snapshot.isDragging,
                                                            'border-t-0': !snapshot.isDragging,
                                                            'border-r-0': !snapshot.isDragging,
                                                            'border-b': !snapshot.isDragging,

                                                            'border': snapshot.isDragging,
                                                            'rounded': snapshot.isDragging,
                                                            'app__item-bg-color': snapshot.isDragging,
                                                        })}
                                                        style={{
                                                            ...provided.draggableProps.style,
                                                            borderColor: 'var(--divider-color)',
                                                        }}
                                                    >
                                                        <Todo todo={todo} remove={remove} onClick={toggle} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}

                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                        
                        <div className="flex flex-row justify-between p-6 text-base" style={{color: 'var(--filter-color)'}}>
                            <div>{uncompletedTodoCount} items left</div>

                            <div className="app__filter-desktop">
                                {filterRender}
                            </div>

                            <div className="cursor-pointer filter" onClick={() => clearCompleted()}>Clear Completed</div>
                        </div>
                    </div>

                    <div className="mt-6 app__filter-mobile rounded hidden justify-center items-center" style={{backgroundColor: 'var(--item__bg)', boxShadow: 'var(--list-shadow)', height: '4rem'}}>{filterRender}</div>

                    <div className="text-center my-8 text-base flex-shrink-0 flex-grow-0" style={{color: 'var(--filter-color)'}}>Drag and drop to reorder list</div>
                </div>
            </div>
        </>
    );
}
