const multer = require('multer');
const mimetypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
const generateUpload = path => multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => cb(null, path),
        filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
    }),
    fileFilter: (req, file, cb) => {
        if (mimetypes.includes(file.mimetype)) cb(null, true)
        else cb(null, false)
    },
    limits: { fileSize: 2 * 1024 * 1024 }
});

const upload = generateUpload ('./assets/upload');

module.exports ={upload};
