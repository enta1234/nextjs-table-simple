import React from 'react'

type columnsProps = {
  columns: string[]
}

export default function SimpleTableHeader({ columns }: columnsProps) {
  return (
    <tr className='uppercase'>
      {
        columns.map((column, index )=> (<td key={index} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">{column}</td>))
      }
    </tr>
  )
}
