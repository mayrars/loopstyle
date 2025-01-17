import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart.jsx";
import { useState, useEffect } from "react";

export default function CardProduct({ product }) {
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const { addToCart, removeFromCart, cart } = useCart();

  useEffect(() => {
    // Simula el tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const productCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  const isProductInCart = productCart(product);

  if (isLoading) {
    return (
      <Card className="mt-10 animate-pulse">
        <div className="h-64 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="mt-4 h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="mt-2 h-6 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="flex justify-between mt-6">
          <div className="h-10 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-12 w-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </Card>
    );
  }

  // Limpia los datos de la imagen del producto
  let image = product.images[0].replaceAll('["', '').replaceAll('"]', '');

  return (
    <>
      <Card
        className="mt-10"
        renderImage={() => (
          <Link to={`/product/${product.id}`}>
            <img
              width={500}
              height={500}
              src={image}
              alt={product.title}
              className="rounded"
            />
          </Link>
        )}
      >
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h2>
        <div className="grid grid-cols-2 gap-4 justify-center align-middle">
          <div>
            <p>
              <span className="text-sm">Price:</span>
            </p>
            <p className="mt-2 text-4xl font-bold text-gray-700 dark:text-gray-300">
              ${product.price}
            </p>
          </div>
          <button
            onClick={() =>
              isProductInCart ? removeFromCart(product) : addToCart(product)
            }
            className={
              isProductInCart
                ? "bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-12 h-12"
                : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-12 h-12"
            }
          >
            {isProductInCart ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M1.41 1.13L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41L1.41 1.13zM7 15l1.1-2h2.36l2 2H7zM20 4H7.12l2 2h9.19l-2.76 5h-1.44l1.94 1.94c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24V24H0z" fill="none" />
                <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z" />
              </svg>
            )}
          </button>
          <Button
            as={Link}
            to={`/product/${product.id}`}
            color="blue"
            pill
            size="lg"
            className="h-12"
          >
            View
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </Card>
    </>
  );
}
