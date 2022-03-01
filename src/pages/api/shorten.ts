// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../config/db'
import Url from '../../models/Url'
import validUrl from 'valid-url'
import { NextApiRequest, NextApiResponse } from 'next'
import shortid from 'shortid'
import mongoose from 'mongoose'

export default async function handler(req, res) {
  await db()
  if (req.method === 'POST') {
    const { longUrl } = await req.body
    const baseUrl = process.env.BASE_URL
    console.log(req.body)
    // // Check base url

    // // create url code
    const urlCode = shortid.generate()
    // Check long url
    if (validUrl.isHttpsUri(longUrl)) {
      try {
        let url = await Url.findOne({ longUrl })
        console.log(url)
        if (url) {
          res.json(url)
          res.end()
        } else {
          const shortUrl = baseUrl + '/api/' + urlCode

          let url = new Url({
            longUrl,
            shortUrl,
            urlCode,
            date: new Date(),
          })
          await url.save()
          res.status(200).json({
            message: 'success',
            data: {
              url,
            },
          })
          res.end()
        }
      } catch (error) {
        res.status(400).json({
          message: 'Error saving the URL',
          data: error,
        })
      }
    } else if (!validUrl.isUri(baseUrl)) {
      res.status(401).json({ message: 'Invalid Base URI' })
    } else if (!validUrl.isWebUri(longUrl)) {
      res.status(401).json({ message: 'Invalid Web URI' })
    } else if (!validUrl.isHttpUri(longUrl)) {
      res.status(403).json({ message: 'This URI is not secure.' })
    } else {
      res.status(400).json({ message: 'Invalid URL' })
    }
  }
  //   res.status(200).json({
  // 	  message:"stuff"
  //   })
  res.end()
}
