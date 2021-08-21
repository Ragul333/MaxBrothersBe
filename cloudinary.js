import cloudinary from "cloudinary";
import dotenv from 'dotenv'
dotenv.config()


cloudinary.config({
    cloud_name: 'drpwuzvax',
    api_key: '639564898932956',
    api_secret: 'ErJ8fJbn3WY2nanTo8nrLFJoFes',
});

const uploads = (file,folder) => {
    return new Promise(resolve=>{
        cloudinary.uploader.upload(file,(result)=>{
            resolve({
                url: result.url,
                id: result.public_id
            })
        },{
            resource_type: "auto",
            folder:folder
        })
    })
}

export default uploads;