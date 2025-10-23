import React from 'react'

type PortableTextBlock = any

function renderSpanChildren(children: any[]) {
	return children.map((c: any, i: number) => {
		if (c._type === 'span') return <span key={c._key ?? i}>{c.text}</span>
		return null
	})
}

function blockToElement(block: PortableTextBlock, idx: number) {
	if (!block) return null

	if (block._type === 'block') {
		const text = renderSpanChildren(block.children || [])
		const style = block.style || 'normal'
		if (style === 'h1') return <h1 key={block._key ?? idx}>{text}</h1>
		if (style === 'h2') return <h2 key={block._key ?? idx}>{text}</h2>
		if (style === 'h3') return <h3 key={block._key ?? idx}>{text}</h3>
		if (style === 'blockquote') return <blockquote key={block._key ?? idx}>{text}</blockquote>
		return <p key={block._key ?? idx}>{text}</p>
	}

	if (block._type === 'image') {
		const asset = block.asset || block.asset?._ref || block.asset?._id
		if (block.url) {
			return (
				// eslint-disable-next-line @next/next/no-img-element
				<img key={block._key ?? idx} src={block.url} alt={block.alt || ''} className="my-4 max-w-full" />
			)
		}
		return (
			<div key={block._key ?? idx} className="my-4 border rounded p-3 text-sm text-muted-foreground">
				Image: {block.alt || asset || 'unknown'}
			</div>
		)
	}

	return (
		<pre key={block._key ?? idx} className="whitespace-pre-wrap text-sm text-muted-foreground">
			{JSON.stringify(block, null, 2)}
		</pre>
	)
}

export default function PortableTextRenderer({ value }: { value: PortableTextBlock[] | undefined }) {
	if (!value || !Array.isArray(value) || value.length === 0) return null
	return <div>{value.map((b, i) => blockToElement(b, i))}</div>
}
