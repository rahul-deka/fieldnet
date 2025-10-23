import React from 'react'

type PortableTextBlock = any

function renderMarks(text: string, marks: any[] = [], markDefs: any[] = []) {
	if (!marks || marks.length === 0) return text
	return marks.reduce((acc: any, mark: any) => {
		if (mark === 'strong') return <strong className="font-semibold">{acc}</strong>
		if (mark === 'em') return <em className="italic">{acc}</em>
		if (mark === 'underline') return <u className="underline">{acc}</u>
		if (mark === 'strike-through') return <s className="line-through">{acc}</s>
		if (mark === 'code') return <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{acc}</code>

		// link or other defs
		const def = markDefs?.find((d: any) => d._key === mark)
		if (def && def._type === 'link' && def.href) {
			return (
				<a key={mark} href={def.href} className="text-cyan-600 underline" rel="noopener noreferrer" target={def.href?.startsWith('http') ? '_blank' : undefined}>
					{acc}
				</a>
			)
		}
		return acc
	}, text)
}

function renderSpan(span: any, markDefs: any[]) {
	if (!span) return null
	const text = span.text
	const marks = span.marks || []
	return <React.Fragment key={span._key ?? text}>{renderMarks(text, marks, markDefs)}</React.Fragment>
}

function renderBlock(block: PortableTextBlock, idx: number) {
	if (!block) return null

	if (block._type === 'block') {
		const style = block.style || 'normal'
		const children = (block.children || []).map((c: any) => renderSpan(c, block.markDefs || []))

		switch (style) {
			case 'h1':
				return (
					<h1 key={block._key ?? idx} className="text-3xl font-extrabold mb-4">
						{children}
					</h1>
				)
			case 'h2':
				return (
					<h2 key={block._key ?? idx} className="text-2xl font-bold mb-3">
						{children}
					</h2>
				)
			case 'h3':
				return (
					<h3 key={block._key ?? idx} className="text-xl font-semibold mb-2">
						{children}
					</h3>
				)
			case 'h4':
				return (
					<h4 key={block._key ?? idx} className="text-lg font-medium mb-2">
						{children}
					</h4>
				)
			case 'h5':
				return (
					<h5 key={block._key ?? idx} className="text-base font-medium mb-2">
						{children}
					</h5>
				)
			case 'h6':
				return (
					<h6 key={block._key ?? idx} className="text-sm font-medium mb-2">
						{children}
					</h6>
				)
			case 'blockquote':
				return (
					<blockquote key={block._key ?? idx} className="border-l-4 border-gray-200 pl-4 italic my-4 text-gray-700">
						{children}
					</blockquote>
				)
			default:
				return (
					<p key={block._key ?? idx} className="mb-4 leading-7 text-gray-800">
						{children}
					</p>
				)
		}
	}

	// lists
	if (block._type === 'list') return null

	if (block._type === 'image') {
		const asset = block.asset || block.asset?._ref || block.asset?._id
		if (block.url) {
			return (
				// eslint-disable-next-line @next/next/no-img-element
				<img key={block._key ?? idx} src={block.url} alt={block.alt || ''} className="my-6 rounded max-w-full" />
			)
		}

			// Table support (Sanity community table or custom table shapes)
			if (block._type === 'table' || block._type === 'tableBlock' || block._type === 'sanity.table') {
				// try common shapes: block.rows -> [{cells: [{children: [...]}, ...]}, ...]
				const rows = block.rows || block.table?.rows || block.rowsArray || []
				if (Array.isArray(rows) && rows.length > 0) {
					const hasHeader = rows[0]?.isHeader || rows[0]?.header || false
					return (
						<div key={block._key ?? idx} className="my-6 overflow-x-auto">
							<table className="w-full table-auto border-collapse">
								{hasHeader && (
									<thead className="bg-gray-50">
										<tr>
											{(rows[0].cells || rows[0].columns || []).map((cell: any, ci: number) => (
												<th key={ci} className="px-4 py-2 text-left text-sm font-medium border">
													{(cell.children || cell.content || []).map((c: any) => renderSpan(c, cell.markDefs || block.markDefs || []))}
												</th>
											))}
										</tr>
									</thead>
								)}
								<tbody>
									{rows.map((row: any, ri: number) => {
										// skip header row if used as header
										if (ri === 0 && hasHeader) return null
										const cells = row.cells || row.columns || row.items || []
										return (
											<tr key={ri} className="odd:bg-white even:bg-gray-50">
												{cells.map((cell: any, ci: number) => (
													<td key={ci} className="px-4 py-2 align-top text-sm border">
														{(cell.children || cell.content || []).map((c: any) => renderSpan(c, cell.markDefs || block.markDefs || []))}
													</td>
												))}
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					)
				}
				// fallback: try block.cells
				if (Array.isArray(block.cells)) {
					return (
						<div key={block._key ?? idx} className="my-6 overflow-x-auto">
							<table className="w-full table-auto border-collapse">
								<tbody>
									{block.cells.map((row: any, ri: number) => (
										<tr key={ri} className="odd:bg-white even:bg-gray-50">
											{(row || []).map((cell: any, ci: number) => (
												<td key={ci} className="px-4 py-2 align-top text-sm border">
													{(cell.children || []).map((c: any) => renderSpan(c, block.markDefs || []))}
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)
				}
			}
		return (
			<div key={block._key ?? idx} className="my-4 border rounded p-3 text-sm text-muted-foreground">
				Image: {block.alt || (typeof asset === 'string' ? asset : 'unknown')}
			</div>
		)
	}

	// fallback
	return (
		<pre key={block._key ?? idx} className="whitespace-pre-wrap text-sm text-muted-foreground">
			{JSON.stringify(block, null, 2)}
		</pre>
	)
}

// Helper to render lists (numbered and bulleted)
function renderList(items: any[], type: 'bullet' | 'number', keyBase: string) {
	if (!items || items.length === 0) return null
	if (type === 'number') {
		return (
			<ol key={keyBase} className="list-decimal ml-6 mb-4 space-y-1">
				{items.map((it: any, i: number) => (
					<li key={`${keyBase}-${i}`}>{(it.children || []).map((c: any) => renderSpan(c, it.markDefs || []))}</li>
				))}
			</ol>
		)
	}
	return (
		<ul key={keyBase} className="list-disc ml-6 mb-4 space-y-1">
			{items.map((it: any, i: number) => (
				<li key={`${keyBase}-${i}`}>{(it.children || []).map((c: any) => renderSpan(c, it.markDefs || []))}</li>
			))}
		</ul>
	)
}

export default function PortableTextRenderer({ value }: { value: PortableTextBlock[] | undefined }) {
	if (!value || !Array.isArray(value) || value.length === 0) return null

	// Sanity Portable Text encodes lists as separate blocks with `_type: 'block'` and `listItem`/`level` props.
	// We'll walk blocks and coalesce consecutive list items into lists.
	const elements: React.ReactNode[] = []
	let listBuffer: any[] | null = null
	let listType: 'bullet' | 'number' | null = null

	value.forEach((block: any, idx: number) => {
		if (block._type === 'block' && block.listItem) {
			// start or continue a list
			const type = block.listItem === 'number' ? 'number' : 'bullet'
			if (!listBuffer) {
				listBuffer = []
				listType = type
			}
			listBuffer.push(block)
		} else {
			if (listBuffer) {
				elements.push(renderList(listBuffer, listType || 'bullet', `list-${elements.length}`))
				listBuffer = null
				listType = null
			}
			elements.push(renderBlock(block, idx))
		}
	})

	if (listBuffer) {
		elements.push(renderList(listBuffer, listType || 'bullet', `list-${elements.length}`))
	}

	return <div className="prose max-w-none">{elements}</div>
}
