import React from 'react'
import TodoListItem from './TodoListItem'
import styles from '../styles/Todo.module.css'
import NoTodoListItem from './NoTodoListItem'
import TodoType from '../types/todoType'

interface ITodoList {
  list: Array<TodoType>
  searchValue: string
  filterValue: string
  onDeleteTodo: (id: string) => void
  onUpdateTodo: (id: string) => void
}

const TodoList: React.FC<ITodoList> = (props: ITodoList) => {
  const { list, searchValue, filterValue, onUpdateTodo, onDeleteTodo } = props

  let filtered = null
  switch (filterValue) {
    case 'done':
      filtered = list.filter(item => item.done === 'done')
      break
    case 'notyet':
      filtered = list.filter(item => item.done === 'notyet')
      break
    default:
      filtered = [...list]
  }

  const result = filtered.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <ul className={`flex flex-col gap-2 md:overflow-scroll ${styles.maxContainerHeight} ${styles.container}`}>
      {!list.length || !result.length ? (
        <NoTodoListItem />
      ) : (
        result
          .map(item => (
            <TodoListItem item={item} key={item.id} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
          ))
          .reverse()
      )}
    </ul>
  )
}

export default TodoList
