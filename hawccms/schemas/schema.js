// First, we must import the schema creator
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'Documents',
  types: schemaTypes.concat([
    {
      title: "post",
      name: "post",
      type: "document",
      fields: [
        {
          title:"Title",
          name: "title",
          type: "string",
        },
        {
          name: "Tagline",
          title: "tagline",
          type: "string",
        },
        {
          title: "Content",
          name: "content",
          type: "array",
          of: [
            {
              type: 'block'
            }
          ]
        }
      ]
    }
  ])
})