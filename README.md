# Upload Images on AWS S3 Using Node.js
  ## [multer](https://www.npmjs.com/package/multer)
    Necessary for handling data files. It’s basically middleware and mainly use for uploading files.

  ## [multer-s3](https://www.npmjs.com/package/multer-s3)

    It will help to upload files to AWS S3.


  ## [aws-sdk ](https://www.npmjs.com/package/aws-sdk)
    Needed for configuration, when to work with AWS



# Install all via a single command:
`npm install --save multer multer-s3 aws-sdk`

Or

` 
npm install express body-parser aws-sdk multer multer-s3.
`

# AWS Access Keys
```
aws.config.update({
  secretAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  accessKeyId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  region: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx'
});

```

```
bucket: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXx'

```