import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'

// Resize to 250 x 250 pixels using the 'fill' crop mode.

const CloudinaryUpload = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'inam6530',
    },
  })
  const myImage = cld.image('test/Fresh_INAMWEBSOLUTIONS_vg8sbd')
  myImage.resize(fill().width(250).height(250))
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
}

export default CloudinaryUpload
