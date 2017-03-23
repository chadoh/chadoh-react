// currently running this from the 'build' dir, with ./deploy script
module.exports = {
  credentials: "../aws-credentials.json",
  bucketName: "maybe.chadoh.com",
  patterns:[
    "**/*",
  ]
}
