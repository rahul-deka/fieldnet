import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsroom',
  title: 'Newsroom',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Press Releases', value: 'Press Releases'},
          {title: 'Media Coverage', value: 'Media Coverage'},
          {title: 'Awards', value: 'Awards'},
          {title: 'Announcements', value: 'Announcements'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
  ],
})
