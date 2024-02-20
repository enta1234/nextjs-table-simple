import React from 'react'
import SimpleTableHeader from './simple-table-header'
import SimpleTableBody from './simple-table-body'

type SimpleTableProps = {
  columns: string[]
  rows: string[][]
}

export default function SimpleTable(simpleTableProps: SimpleTableProps) {
  return (
    <div className='flex min-w-full shadow rounded-lg overflow-x-auto p-1'>
      <table className="leading-normal">
        <thead className='sticky top-0'>
          <SimpleTableHeader columns={simpleTableProps.columns} />
        </thead>
        <tbody>
          <SimpleTableBody rows={simpleTableProps.rows} />
        </tbody>
      </table>
    </div>
  )
}