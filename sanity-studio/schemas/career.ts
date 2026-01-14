import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'About the Role',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ideal',
      title: 'Ideal Candidate Profile',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'why',
      title: 'Why FieldNet?',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    }),
  ],
});
