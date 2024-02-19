import React from 'react'
import SimpleTableHeader from './simple-table-header'
import SimpleTableBody from './simple-table-body'

type SimpleTableProps = {
  columns: string[]
  rows: string[][]
}

export default function SimpleTable(simpleTableProps: SimpleTableProps) {
  return (
    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
      <table className="min-w-full leading-normal">
        <thead>
          <SimpleTableHeader columns={simpleTableProps.columns} />
        </thead>
        <tbody>
          <SimpleTableBody rows={simpleTableProps.rows} />
        </tbody>
      </table>
    </div>
  )
}
