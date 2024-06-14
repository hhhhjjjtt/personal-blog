import sanityClient from '../client.js';

sanityClient.fetch('*[_type == "post"]{title, slug, body}')
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(err => {
    console.error('Error fetching posts:', err);
  });
