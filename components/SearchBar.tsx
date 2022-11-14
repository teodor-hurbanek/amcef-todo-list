import React from 'react'

interface ISearchBar {
  isList: number
  value: string
  onSearchItem: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: React.FC<ISearchBar> = (props: ISearchBar) => {
  const { isList, value, onSearchItem } = props
  return (
    <input
      type="text"
      placeholder="Search by title"
      className="input input-bordered w-full sm:max-w-xs"
      value={value}
      onChange={event => onSearchItem(event)}
      disabled={!isList}
    />
  )
}

export default SearchBar
