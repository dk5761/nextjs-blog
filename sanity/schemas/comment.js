import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: "Comments won't show on the site without approval"
        }),

        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',

        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'text'
        }),
        defineField({
            name: 'post',
            type: 'reference',
            to: [{ type: 'post' }]
        }),


    ],

    //   preview: {
    //     select: {
    //       title: 'title',
    //       author: 'author.name',
    //       media: 'mainImage',
    //     },
    //     prepare(selection) {
    //       const { author } = selection
    //       return { ...selection, subtitle: author && `by ${author}` }
    //     },
    //   },
})
