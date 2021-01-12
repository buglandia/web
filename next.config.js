const withImages = require('next-images')

module.exports = withImages({
  images:{
    deviceSizes: [320,640,768,1024,1200],
  },
  esModule: true,
})
