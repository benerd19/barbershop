const path = require('path')

class imagesController {
    async getImage(req, res, next) {
        try {
            const filePath = path.join(__dirname, '..', 'uploads', req.params.id)
            res.sendFile(filePath)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new imagesController()
