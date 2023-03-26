import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'

const ImageCloudFixSize = ({ width, height, src }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'inam6530',
    },
  })
  const myImage = cld.image(src)
  myImage.resize(fill().width(width).height(height))

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
}

export default ImageCloudFixSize
