import db from '../../config/db'
import Url from '../../models/Url'
export default async function handler(req, res) {
    const {urlCode} = req.query
    await db();
    try {
		const url = await Url.findOne({ urlCode });

		if (url) {
			return res.redirect(307, url.longUrl);
		} else {
			return res.status(404).json('No Url found');
		}
	} catch (error) {
		console.log(error);
		res.status(500).json('Server Error');
	}
} 