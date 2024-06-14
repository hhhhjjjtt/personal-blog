// import sanityClient from '@sanity/client'

// export default sanityClient({
//   projectId: 'xiwyehi7', // find this at manage.sanity.io or in your sanity.json
//   dataset: 'production',  // or the name of your dataset
//   apiVersion: '2024-05-30',
//   useCdn: true  // `false` if you want to ensure fresh data
// })


import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'xiwyehi7',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}