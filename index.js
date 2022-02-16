/**
 * @author janak
 * @2022
 */
const HTTPStatus = require('http-status');
const express = require('express'),
    aws = require('aws-sdk'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  accessKeyId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  region: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx'
});

const app = express(),
    s3 = new aws.S3();

app.use(bodyParser.json());


const uploadFileHelper = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXx',
        key: (req, file, cb) => {
            console.log(file);
            cb(null, Date.now()+'_'+file.originalname);
        }
    })
});

app.post('/upload-file', uploadFileHelper.single('file'), (req, res, next) => {
    try{
        let responseData = null;
        let response = null;
        if(req){
            response = res.send(req.file);
            responseData = {
                fileUrl : fileUrl
            }
            if(responseData){
                return res.status(HTTPStatus.OK).json({
                    status: HTTPStatus.Ok,
                    err: false,
                    success: true,
                    message: "File Upload Successfully",
                    data : responseData
                  })
            }
            return res.status(HTTPStatus.BAD_REQUEST).json({
                err: true,
                success: false,
                status: HTTPStatus.BAD_REQUEST,
                message: 'File was not uploaded'
              })
        }
    }catch (error) {
     return next(error);
   }
});

app.listen(3001)
console.log('Server is running on port: 3001');