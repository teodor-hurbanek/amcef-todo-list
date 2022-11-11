import React from 'react'
import moment from 'moment'
import TodoType from '../types/todoType'

interface ITodoListItem {
  item: TodoType
  onDeleteTodo: (id: string) => void
  onUpdateTodo: (id: string) => void
}

const TodoListItem: React.FC<ITodoListItem> = (props: ITodoListItem) => {
  const { id, title, description, deadline, done } = props.item
  const { onUpdateTodo, onDeleteTodo } = props

  const today = new Date()
  const expired = new Date(deadline) < new Date(today) ? 'border-solid border-error border-2' : ''

  return (
    <li className={`card md:w-96 bg-base-200 text-neutral-content ${expired}`}>
      <div className="card-body items-center relative">
        <button onClick={() => onDeleteTodo(id)} className="btn btn-xs btn-square btn-ghost absolute top-3 right-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Card content */}
        <h2 className="card-title">{title}</h2>
        <p style={{ maxWidth: '300px', wordWrap: 'break-word' }}>{description}</p>
        <p className={`text-${expired ? 'error' : 'primary'} text-sm`}>{moment(deadline).format('lll')}</p>
        <div className="card-actions justify-end">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text mr-2">Done</span>
              <input
                type="checkbox"
                className="checkbox checkbox-success"
                checked={done === 'done'}
                onChange={() => onUpdateTodo(id)}
              />
            </label>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
