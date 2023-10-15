import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

const ImageWithFallback = (
  props: ImageProps & { fallbackSrc?: ImageProps['src'] }
) => {
  const { src, fallbackSrc, ...rest } = props
  const [imgSrc, setImgSrc] = useState<ImageProps['src']>(src)

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        if (fallbackSrc) setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default ImageWithFallback
