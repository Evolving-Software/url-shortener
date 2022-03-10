


export default function handler(req, res) {
    const { urlCode } = req.query
    db();
    try {
        const url = Url.findOne({ urlCode })
        if (url) {
            return res.redirect(307, url.longUrl)
        }
        return res.status(404).json('No Url found')
    } catch (error) {
        console.log(error)
        res.status(500).json('Server Error')
    }
}