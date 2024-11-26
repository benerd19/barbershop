const path = require('path')

class imagesController {
    async getImage(req, res) {
        try {
            // console.log(__dirname, '..')
            const filePath = path.join(__dirname, '..', 'uploads', req.params.id)
            res.sendFile(filePath)
            // res.json('Images')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new imagesController()
