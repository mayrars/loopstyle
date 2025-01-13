import ReactImageGallery from "react-image-gallery";
import { Products } from "../components/Products";

export default function Home() {
  const items = [
    {
      original: "./assets/young-women-celebrating-together.jpg",
      thumbnail: "./assets/young-women-celebrating-together.jpg",
    },
    {
      original: "./assets/women-positive-models.jpg",
      thumbnail: "./assets/women-positive-models.jpg",
    },
    {
      original: "./assets/medium-shot-woman-wearing-jacket.jpg",
      thumbnail: "./assets/medium-shot-woman-wearing-jacket.jpg",
    }
  ]
  return(
    <>
      <ReactImageGallery items={items} autoPlay="true" />
      <Products />
    </>
  )
}