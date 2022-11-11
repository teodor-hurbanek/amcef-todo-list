import React from 'react'

const NoTodoListItem = () => {
  return (
    <li className="card sm:w-96 bg-base-200 text-neutral-content">
      <div className="card-body items-center relative">
        {/* Card content */}
        <h2 className="card-title"></h2>
        <p>No Todos for now.</p>
        <div className="card-actions justify-end"></div>
      </div>
    </li>
  )
}

export default NoTodoListItem
