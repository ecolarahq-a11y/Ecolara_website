import { defineType, defineField } from 'sanity'

const base = [
  defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
  defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
  defineField({ name: 'summary', type: 'text', rows: 3 }),
  defineField({ name: 'cover', type: 'image', options: { hotspot: true } }),
  defineField({ name: 'publishedAt', type: 'datetime', initialValue: () => new Date().toISOString() }),
]
const body = defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] })
const file = defineField({ name: 'file', title: 'PDF or downloadable file', type: 'file' })
const make = (name: string, title: string, extra: any[] = []) =>
  defineType({ name, title, type: 'document', fields: [...base, ...extra], preview: { select: { title: 'title', media: 'cover' } } })

export const schemaTypes = [
  make('post', 'Blog post', [body]),
  make('report', 'Research report or paper', [
    defineField({ name: 'kind', type: 'string', options: { list: ['Report', 'Paper', 'Brief'] } }), body, file]),
  make('outreachReport', 'Outreach report (one per school)', [
    defineField({ name: 'school', type: 'string' }), defineField({ name: 'date', type: 'date' }),
    defineField({ name: 'studentsReached', type: 'number' }),
    defineField({ name: 'gallery', title: 'Photo gallery (drag in many at once)', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'caption', type: 'string' }] }], options: { layout: 'grid' } }), body, file]),
  make('book', 'Book', [
    defineField({ name: 'buyUrl', type: 'url' }), body, file]),
  make('comic', 'Comic issue', [
    defineField({ name: 'issueNumber', type: 'number' }),
    defineField({ name: 'pages', title: 'Pages in reading order', type: 'array', of: [{ type: 'image' }] }), file]),
  make('release', 'New release', [
    defineField({ name: 'kind', type: 'string', options: { list: ['Card game', 'Toolkit', 'Activity book', 'Merch', 'Other'] } }),
    defineField({ name: 'link', type: 'url' }), body, file]),
  make('game', 'Game', [
    defineField({ name: 'mode', type: 'string', options: { list: [{ title: 'Hosted by Ecolara (build in /public/games/slug)', value: 'hosted' }, { title: 'External URL', value: 'external' }] }, initialValue: 'hosted' }),
    defineField({ name: 'playUrl', type: 'url', hidden: ({ document }: any) => document?.mode !== 'external' }),
    defineField({ name: 'instructions', type: 'text', rows: 3 })]),
  defineType({ name: 'siteSettings', title: 'Site settings', type: 'document', fields: [
    defineField({ name: 'stats', title: 'Homepage numbers', type: 'array', of: [{ type: 'object', fields: [
      defineField({ name: 'value', type: 'string' }), defineField({ name: 'label', type: 'string' })] }] })] }),
]
