import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import TodoType from '../types/todoType'

const ProgressPage = () => {
  const [progress, setProgress] = useState(0)

  const handleGetProgress = async () => {
    const result = await fetch('https://636bdeeead62451f9fbe04d7.mockapi.io/todo-list')
    const data: Array<TodoType> = await result.json()

    if (!data.length) return
    const dones = data.map(item => item.done === 'done').filter(item => item === true)
    const value = (dones.length / data.length) * 100
    setProgress(value)
  }

  useEffect(() => {
    handleGetProgress()
  }, [])

  return (
    <Layout title="Progress | Todo list">
      <div className="h-screen">
        <p>Progress of your Todos</p>
        <progress className="progress progress-primary w-auto-" value={progress} max="100"></progress>
        {progress === 100 && (
          <h1 className="text-xl mt-20 text-center">
            <span className="text-success">Congratulations!</span> You've completed all of your Todos.
          </h1>
        )}
      </div>
    </Layout>
  )
}

export default ProgressPage
