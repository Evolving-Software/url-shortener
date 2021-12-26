// https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js

import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI
console.log(`Mongo URI : ${MONGO_URI}`)
console.log(`Mongo URL from Server: ${process.env.MONGO_URI}`)
if (!MONGO_URI) {
  throw new Error(
    'Please define the MONGO_URI environment variable inside .env'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function db() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default db;
