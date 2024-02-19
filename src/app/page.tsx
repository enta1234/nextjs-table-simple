import SimpleTable from "@/components/simple-table/simple-table"

export default function Home() {
  const columns = ['id', 'name', 'surname']
  const rows = [['id', 'name', 'surname'], ['id', 'name', 'surname'], ['id', 'name', 'surname']]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SimpleTable rows={rows} columns={columns} />
    </main>
  )
}
