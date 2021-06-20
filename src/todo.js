import classNames from 'classnames';
import iconClear from './icon-cross.svg';
import iconCheck from './icon-check.svg';

export default function Todo({todo, remove, onClick}) {
    function onCrossClick(event) {
        event.stopPropagation();
        remove(todo.id);
    }

    return (
        <div
            className={classNames('flex flex-row items-center px-6 todo cursor-pointer', {completed: todo.completed})}
            style={{height: '4rem'}}
            onClick={() => onClick(todo)}>

            <div className="h-6 w-6 rounded-full mr-6 flex-shrink-0 flex-grow-0 todo__checkbox">
                <div className="h-full w-full rounded-full flex justify-center items-center">
                    <img src={iconCheck} alt="icon-check.svg" className="hidden" />
                </div>
            </div>

            <div className="flex-grow flex-shrink todo__label">{todo.label}</div>

            <img src={iconClear} alt="icon-cross.svg" className="todo__icon-right app__lg-invisible app__sm-visible" onClick={onCrossClick} />
        </div>
    );
}
