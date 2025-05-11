// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

import { Pages } from './collections/Pages'
import { Footer } from './app/globals/Footer'
import { Header } from './app/globals/Header'
import { Products } from './collections/Products'
import { Orders } from './collections/Orders'
import { Categories } from './collections/Categories'
import { Subcategories } from './collections/Subcategories'
import { Customers } from './collections/Customers'
import { Brands } from './collections/Brands'
import { Reviews } from './collections/Reviews'
import { Styles } from './collections/Styles'
// import { Stocks } from './collections/Stocks'
import { Colors } from './collections/Colors'
import { Sizes } from './collections/Sizes'
import { Attributes } from './collections/Attributes'
import { AttributeOptions } from './collections/AttributesOptions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media,Pages,Products,Orders,Categories,Subcategories,Customers,Brands,Reviews,Styles,
    Colors,Sizes,Attributes,AttributeOptions
  ],
  globals:[
    Header,Footer,
  ],
  localization: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        'media': {
          prefix: 'media',
        }
      },
      bucket: process.env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true
      }
    })
  ],
  hooks:
    {afterError:[
      (err)=>{
        console.log('from config!!=',err)
      }
    ]}
  
})

