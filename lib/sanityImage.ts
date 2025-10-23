import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

function getBuilder() {
  if (!projectId) return null
  try {
    return imageUrlBuilder({ projectId, dataset })
  } catch (e) {
    return null
  }
}

export function imageUrlFor(asset: any, opts?: { w?: number }) {
  const builder = getBuilder()
  if (!builder) return undefined

  // asset may be an object like { _ref: 'image-<id>-jpg' } or an object with asset._ref
  let ref = undefined
  if (!asset) return undefined
  if (typeof asset === 'string') ref = asset
  else if (asset._ref) ref = asset._ref
  else if (asset.asset && (asset.asset._ref || asset.asset._id)) ref = asset.asset._ref || asset.asset._id

  if (!ref) return undefined

  let url = builder.image(ref)
  if (opts?.w) url = url.width(opts.w)
  try {
    return url.url()
  } catch (e) {
    return undefined
  }
}

export default imageUrlFor
