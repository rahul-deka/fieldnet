import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
      ],
    }),
  ],
})
