import Image from 'next/image'

type ImageWrapperProps = {
    src: string 
    alt: string
}

const ImageWrapper = ({src, alt} : ImageWrapperProps) => {
    return (
        <Image src={src} layout="fill" objectFit="cover" quality={100} alt={alt} />
    )
}

export default ImageWrapper