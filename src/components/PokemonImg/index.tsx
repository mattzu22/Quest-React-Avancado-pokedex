import { Img } from "./style"

interface PropsImg{
    src: string
    alt: string
}

export const ImgPokemon = ({src, alt}: PropsImg) => {
  return (
    <Img src={src} alt={alt} />
  )
}
