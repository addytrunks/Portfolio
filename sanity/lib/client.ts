import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const urlFor = (source:any) => createImageUrlBuilder(client).image(source)
