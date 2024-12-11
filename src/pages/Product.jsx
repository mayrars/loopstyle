import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useFetch } from '../hooks/useFetch';
import { Button, Spinner, Badge,TextInput} from "flowbite-react";
import ImageGallery from "react-image-gallery";
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import { useState } from "react";

export default function Product(){
    const [quantity, setQuantity] = useState(1);
    const incrementHandler = () => setQuantity((prevCount) => prevCount + 1);  
    const decrementHandler = () => setQuantity((prevCount) => prevCount>=2 ? prevCount - 1 : 1); 
    const params = useParams();
    const {data, loading} = useFetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
    const images = (data && data.images ? data.images : []).map(image => {
        let newImage = image.replaceAll('["','').replaceAll('"]','')
        return {
            original: newImage,
            thumbnail: newImage
        };
    });

    const formattedPrice = data?.price
    ? data.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    : '$0.00';
    return <>
        <div className="container mx-auto mt-20 mb-20">
            {loading && <div className="flex justify-center items-center"><Spinner aria-label="Loading" size="xl" color="purple"/></div>}
            {data && 
                <div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            { images.length==0 ? <img src="../assets/Image_not_available.png" /> : <ImageGallery items={images} infinite="true" autoPlay="true" showBullets="true"/> }
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">{data.title}</h1>
                            <div className="mb-5">
                                <Link to={`/categories/${data.category.id}`}><Badge color="purple" className="w-min">{data.category.name}</Badge></Link>
                            </div>
                            <p className="text-black dark:text-gray-400 mb-2">{data.description}</p>
                            <p className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">Price: {formattedPrice}</p>
                            <div className="flex items-center mb-10">
                                <Button color="blue" className="rounded-none buttons" onClick={decrementHandler}>-</Button>
                                <TextInput className="inputText rounded-none" id="quantity" type="text" required value={quantity}/>
                                <Button color="blue" className="rounded-none buttons" onClick={incrementHandler}>+</Button>
                            </div>
                            <Button color="blue" pill size="lg">
                                <svg className="w-6 h-6 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                                </svg>
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>  
}
