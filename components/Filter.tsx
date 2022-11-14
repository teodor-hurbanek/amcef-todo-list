import React from 'react'

interface IFilter {
  isList: number
  onFilterItems: (event: React.FormEvent<HTMLDivElement>) => void
}

const Filter: React.FC<IFilter> = (props: IFilter) => {
  const { isList, onFilterItems } = props

  return (
    <div className="flex justify-between items-center gap-2" onChange={event => onFilterItems(event)}>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-2">All</span>
          <input
            type="radio"
            name="filter"
            className="radio radio-primary"
            value="all"
            disabled={!isList}
            defaultChecked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-2">Incomplete</span>
          <input type="radio" name="filter" className="radio radio-primary" value="notyet" disabled={!isList} />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-2">Done</span>
          <input type="radio" name="filter" className="radio radio-primary" value="done" disabled={!isList} />
        </label>
      </div>
    </div>
  )
}

export default Filter
