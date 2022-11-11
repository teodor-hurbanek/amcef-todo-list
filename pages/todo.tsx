import React, { useEffect, useState } from 'react'
import TodoType from '../types/todoType'
import moment from 'moment'
import Layout from '../components/Layout'
import Form from '../components/Form'
import TodoList from '../components/TodoList'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'

const Todo = () => {
  const [list, setList] = useState<TodoType[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [radioValue, setRadioValue] = useState('all')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [errors, setErrors] = useState({})

  const handleGetAllTodos = async () => {
    const result = await fetch('https://636bdeeead62451f9fbe04d7.mockapi.io/todo-list')
    const data = await result.json()
    setList(data)
  }

  const Joi = require('joi-browser')
  const schema = {
    title: Joi.string().min(2).max(30).required().label('Title'),
    description: Joi.string().max(100).required().label('Description'),
    startDate: Joi.date().greater('now').required().label('Date and time'),
  }

  const validate = () => {
    const obj = {
      title: title,
      description: description,
      startDate: startDate,
    }
    const result = Joi.validate(obj, schema, { abortEarly: false })

    if (!result.error) return null
    const errors: any = {}
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
    }
    return errors
  }

  const handleCreateTodo = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    const errors = validate()
    setErrors(errors || {})
    if (errors) return

    const lastId = list.length ? String(Number([...list].pop()?.id) + 1) : '1'
    const formattedDate = moment(startDate).format()
    const newItem = {
      id: lastId,
      createdAt: new Date(),
      title,
      description,
      deadline: new Date(formattedDate),
      done: 'notyet',
    }
    const todos = [...list, newItem]
    setList(todos)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, description: description, deadline: formattedDate, done: 'notyet' }),
    }
    await fetch('https://636bdeeead62451f9fbe04d7.mockapi.io/todo-list', requestOptions)
      .then(response => response.json())
      .catch(error => console.log(error))

    setTitle('')
    setDescription('')
    setStartDate(new Date())
    setErrors({})
  }

  const handleUpdateTodo = async (id: string) => {
    let todoDone = 'notyet'
    const newList = list.map(item => {
      if (item.id === id) {
        if (item.done === 'notyet') {
          todoDone = 'done'
          return {
            ...item,
            done: 'done',
          }
        } else {
          todoDone = 'notyet'
          return {
            ...item,
            done: 'notyet',
          }
        }
      } else {
        return item
      }
    })
    setList(newList)

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: todoDone }),
    }
    await fetch(`https://636bdeeead62451f9fbe04d7.mockapi.io/todo-list/${id}`, requestOptions)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  const handleDeleteTodo = async (id: string) => {
    const newList = list.filter(item => item.id !== id)
    await fetch(`https://636bdeeead62451f9fbe04d7.mockapi.io/todo-list/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .catch(error => console.log(error))
    setList(newList)
  }

  const handleSearchItem = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value
    setSearchValue(value)
  }

  const handleFilterItems = ({ target }: React.FormEvent<HTMLDivElement>) => {
    const radio = target as HTMLInputElement
    setRadioValue(radio.value)
  }

  useEffect(() => {
    handleGetAllTodos()
  }, [])

  return (
    <Layout title="List | Todo list">
      <div className="min-h-screen">
        <div className="flex items-center gap-3 mb-5">
          <SearchBar isList={list.length} value={searchValue} onSearchItem={handleSearchItem} />
          <Filter isList={list.length} onFilterItems={handleFilterItems} />
        </div>
        <div className="flex flex-col-reverse md:flex-row md:gap-5">
          <TodoList
            list={list}
            searchValue={searchValue}
            filterValue={radioValue}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
          />
          <Form
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            startDate={startDate}
            setStartDate={setStartDate}
            onCreateTodo={handleCreateTodo}
            errors={errors}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Todo
