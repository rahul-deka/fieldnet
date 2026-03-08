import { defineField, defineType } from 'sanity'
import { TableInput } from '../components/TableInput'

export const tableRow = defineType({
  name: 'tableRow',
  title: 'Table Row',
  type: 'object',
  fields: [
    defineField({
      name: 'cells',
      title: 'Cells',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})

export const table = defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  components: {
    input: TableInput,
  },
  fields: [
    defineField({
      name: 'firstRowIsHeader',
      title: 'First row is header',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [{ type: 'tableRow' }],
    }),
  ],
})
