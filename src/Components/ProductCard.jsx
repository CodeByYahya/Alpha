import { db } from "@/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from Firestore
  async function fetchProducts() {
    const localProducts = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      localProducts.push({ producId: doc.id, ...doc.data() });
    });
    setProducts(localProducts);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {products.slice(0, 6).map(
        (
          product // Display only 6 products
        ) => (
          <div
            key={product.producId}
            className="relative p-10 border shadow-md"
          >
            <div className="absolute top-2 right-2 flex flex-col gap-3">
              <CiHeart />
              <FaRegEye />
            </div>

            <img
              src={product.image || "src/assets/images/default.png"}
              alt={product.name}
            />
            <div>
              <h2>{product.name}</h2>
              <h4>${product.price}</h4>
            </div>
            <img src="src/assets/images/Five star.png" alt="Rating" />
          </div>
        )
      )}
    </div>
  );
};

export default ProductCard;
