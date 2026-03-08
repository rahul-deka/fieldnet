import React from 'react'
import { set } from 'sanity'
import type { ObjectInputProps } from 'sanity'

function generateKey() {
  return Math.random().toString(36).slice(2, 9)
}

interface TableRow {
  _key: string
  cells: string[]
}

interface TableValue {
  _type?: string
  firstRowIsHeader?: boolean
  rows?: TableRow[]
}

export function TableInput(props: ObjectInputProps) {
  const { value, onChange } = props
  const tableValue = value as TableValue | undefined
  const rows: TableRow[] = tableValue?.rows ?? []
  const firstRowIsHeader: boolean = tableValue?.firstRowIsHeader ?? true
  const numCols = rows.reduce((max, r) => Math.max(max, r.cells?.length ?? 0), 0)

  const update = (newVal: TableValue) => onChange(set(newVal))

  const addRow = () =>
    update({ ...tableValue, rows: [...rows, { _key: generateKey(), cells: Array(Math.max(numCols, 1)).fill('') }] })

  const addCol = () =>
    update({ ...tableValue, rows: rows.map(r => ({ ...r, cells: [...(r.cells ?? []), ''] })) })

  const removeRow = (ri: number) =>
    update({ ...tableValue, rows: rows.filter((_, i) => i !== ri) })

  const removeCol = (ci: number) =>
    update({ ...tableValue, rows: rows.map(r => ({ ...r, cells: (r.cells ?? []).filter((_, i) => i !== ci) })) })

  const updateCell = (ri: number, ci: number, text: string) => {
    const newRows = rows.map((r, i) => {
      if (i !== ri) return r
      const cells = [...(r.cells ?? [])]
      cells[ci] = text
      return { ...r, cells }
    })
    update({ ...tableValue, rows: newRows })
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: 13, color: '#1e293b' }}>

      {/* Header toggle */}
      <label style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        marginBottom: 14, cursor: 'pointer', userSelect: 'none',
      }}>
        <input
          type="checkbox"
          checked={firstRowIsHeader}
          onChange={e => update({ ...tableValue, firstRowIsHeader: e.currentTarget.checked })}
          style={{ width: 15, height: 15, accentColor: '#2563eb', cursor: 'pointer' }}
        />
        <span style={{ fontWeight: 500, fontSize: 13 }}>First row is header</span>
      </label>

      {/* Table grid */}
      {rows.length > 0 ? (
        <div style={{ overflowX: 'auto', borderRadius: 6, border: '1px solid #e2e8f0', marginBottom: 12 }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: numCols * 140 }}>
            <tbody>
              {rows.map((row, ri) => {
                const isHeader = ri === 0 && firstRowIsHeader
                return (
                  <tr key={row._key ?? ri} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    {(row.cells ?? []).map((cell, ci) => (
                      <td
                        key={ci}
                        style={{
                          padding: 0,
                          borderRight: '1px solid #e2e8f0',
                          background: isHeader ? '#f8fafc' : '#ffffff',
                          minWidth: 140,
                        }}
                      >
                        <input
                          type="text"
                          value={cell}
                          placeholder={isHeader ? `Header ${ci + 1}` : `Row ${ri}, Col ${ci + 1}`}
                          onChange={e => updateCell(ri, ci, e.currentTarget.value)}
                          style={{
                            display: 'block',
                            width: '100%',
                            boxSizing: 'border-box',
                            border: 'none',
                            outline: 'none',
                            background: 'transparent',
                            padding: '9px 12px',
                            fontWeight: isHeader ? 600 : 400,
                            fontSize: 13,
                            color: '#1e293b',
                          }}
                        />
                      </td>
                    ))}
                    {/* Row delete */}
                    <td style={{ padding: '6px 8px', background: isHeader ? '#f8fafc' : '#ffffff', verticalAlign: 'middle', width: 36 }}>
                      <button
                        onClick={() => removeRow(ri)}
                        title="Remove row"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 26, height: 26, borderRadius: 4,
                          border: 'none', background: 'transparent',
                          cursor: 'pointer', color: '#94a3b8', fontSize: 14, lineHeight: 1,
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#fee2e2'; (e.currentTarget as HTMLButtonElement).style.color = '#dc2626' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8' }}
                      >✕</button>
                    </td>
                  </tr>
                )
              })}

              {/* Column delete row */}
              {numCols > 0 && (
                <tr style={{ background: '#f8fafc' }}>
                  {Array.from({ length: numCols }, (_, ci) => (
                    <td key={ci} style={{ padding: '5px 8px', textAlign: 'center', borderRight: '1px solid #e2e8f0' }}>
                      <button
                        onClick={() => removeCol(ci)}
                        title={`Remove column ${ci + 1}`}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 3,
                          padding: '3px 8px', borderRadius: 4,
                          border: '1px solid #e2e8f0', background: '#fff',
                          cursor: 'pointer', color: '#94a3b8', fontSize: 11,
                        }}
                        onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#fee2e2'; b.style.borderColor = '#fca5a5'; b.style.color = '#dc2626' }}
                        onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#fff'; b.style.borderColor = '#e2e8f0'; b.style.color = '#94a3b8' }}
                      >✕ col {ci + 1}</button>
                    </td>
                  ))}
                  <td style={{ width: 36 }} />
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{
          padding: '20px 16px', borderRadius: 6, border: '1px dashed #cbd5e1',
          textAlign: 'center', color: '#94a3b8', marginBottom: 12, fontSize: 13,
        }}>
          No rows yet — click <strong>Add Row</strong> to get started.
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8 }}>
        {[{ label: '+ Add Row', fn: addRow }, { label: '+ Add Column', fn: addCol }].map(({ label, fn }) => (
          <button
            key={label}
            onClick={fn}
            style={{
              padding: '6px 14px', borderRadius: 5,
              border: '1px solid #cbd5e1', background: '#f8fafc',
              cursor: 'pointer', fontSize: 12, fontWeight: 500, color: '#334155',
            }}
            onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#f1f5f9'; b.style.borderColor = '#94a3b8' }}
            onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.background = '#f8fafc'; b.style.borderColor = '#cbd5e1' }}
          >{label}</button>
        ))}
      </div>
    </div>
  )
}
