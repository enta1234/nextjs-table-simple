type rowsProps = {
  rows: string[][]
}

export default function SimpleTableBody({ rows }: rowsProps) {
  return (
    <>
      {
        rows.map((item, itemIndex) => (
          <tr key={itemIndex}>
            {
              item.map((r, index) => (
                <td key={index} className='px-5 py-3 border-b border-gray-200 bg-white'>{r}</td>
              ))
            }
          </tr>
        ))
      }
    </>
  )
}
