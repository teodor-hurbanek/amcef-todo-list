import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface IForm {
  title: string
  setTitle: (title: string) => void
  description: string
  setDescription: (description: string) => void
  startDate: Date
  setStartDate: (startDate: Date) => void
  onCreateTodo: (event: React.SyntheticEvent) => void
  errors: any
}

const Form: React.FC<IForm> = (props: IForm) => {
  const { title, setTitle, description, setDescription, startDate, setStartDate, onCreateTodo, errors } = props

  return (
    <form onSubmit={onCreateTodo} className="pt-1 flex flex-col gap-3 mb-10 md:mb-0 md:w-80">
      <input
        type="text"
        placeholder="Title"
        name="title"
        className="input input-bordered w-full"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      {errors.title && <p className="text-error">{errors.title}</p>}
      <textarea
        className="textarea textarea-bordered h-28 text-base"
        placeholder="Description"
        name="description"
        value={description}
        onChange={event => setDescription(event.target.value)}
      ></textarea>
      {errors.description && <p className="text-error">{errors.description}</p>}
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="MMMM d, yyyy hh:mm aa"
        timeIntervals={5}
        showTimeSelect
        name="date"
        className="input input-bordered w-full"
      />
      {errors.startDate && <p className="text-error">{errors.startDate}</p>}

      <button type="submit" className="btn btn-primary w-full md:w-80">
        Add to the List
      </button>
    </form>
  )
}

export default Form
