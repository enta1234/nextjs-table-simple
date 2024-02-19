'use client'

import SimpleTable from "@/components/simple-table/simple-table"
import { Suspense, useEffect, useState } from "react"
import Loading from "./loading"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [columns, setColumns] = useState<string[]>([])
  const [rows, setRows] = useState<string[][]>([[]])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => {
      setColumns(mappingColumns(data.users[0]))
      setRows(mappingRows(data.users))
      setIsLoading(false)
    })
  }, [])

  const mappingColumns = (data: any) => {
    const cols = []
    for (const key in data) {
      cols.push(key)
    }
    return cols
  }

  const mappingRows = (data: any[]) => {
    // console.log('data: ', data)
    const cols = []
    for (const obj of data) {
      const inRow = []
      for(const key in obj) {
        inRow.push(JSON.stringify(obj[key]))
      }
      cols.push(inRow)
    }
    console.log('cols: ', cols)
    return cols
  }

  return (
    <main className="items-center justify-center m-20">
      {
        isLoading ? 
        <Loading /> : 
        <SimpleTable rows={rows} columns={columns} />
      }
    </main>
  )
}
