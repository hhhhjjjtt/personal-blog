import {defineField, defineType} from 'sanity'

export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule
                .required()
                .error(`Required`),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source:'title' },
            validation: (rule) => rule
                .required()
                .error(`Required to generate a page on the website`),
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'text',
            validation: (rule) => rule
                .required()
                .error(`Required`),
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
              hotspot: true  // Allows for better image cropping
            }
        }),
        defineField({
            name: 'codes',
            title: 'Codes',
            type: 'code',
        }),
        {
            name: 'time',
            title: 'Time',
            type: 'datetime'
        }
    ],
})