import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './uploads/')
    },
    filename: (req,file,cb) => {
        cb(null,Date.now() + '-' + file.originalname)
    }
});

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null,true)
    }else{
        cb({msg:'Unsupported file'},false)
    }
}

export const upload = multer({storage:storage, fileFilter:fileFilter})

