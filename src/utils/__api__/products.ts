import axios from "@lib/axios";
import Product from "@models/product.model";
import Shop from "@models/shop.model";

import { productApiEndpoints } from "../../__server__/__db__/products/index";

// Default mapping function (ensure it is imported from where it's defined)
const mapToProductModel = (productData: any): Product => {
  const defaultProductData = {
    id: 'default-id',
    slug: 'default-slug',
    title: 'Default Product',
    price: 0,
    brand: 'Default Brand',
    size: 'Default Size',
    colors: ['black', 'white'],
    discount: 0,
    thumbnail: '/assets/images/default-thumbnail.png',
    images: ['/assets/images/default-image.png'],
    categories: ['Default Category'],
    status: 'active',
    reviews: [],
    shop: {
      id: 'default-shop-id',
      slug: 'default-shop',
      name: 'Default Shop',
      email: 'default@shop.com',
      phone: '000-000-0000',
      address: '123 Default St, City, Country',
      profilePicture: '/assets/images/default-profile.png',
      coverPicture: '/assets/images/default-cover.png',
      socialLinks: {
        facebook: null,
        twitter: null,
        youtube: null,
        instagram: null,
      },
    },
    for: {
      demo: 'default-demo',
      type: 'default-type',
    },
  };

  return {
    id: productData.id || defaultProductData.id,
    slug: productData.slug || defaultProductData.slug,
    title: productData.title || defaultProductData.title,
    price: productData.price || defaultProductData.price,
    brand: productData.brand || defaultProductData.brand,
    size: productData.size || defaultProductData.size,
    colors: productData.colors?.length ? productData.colors : defaultProductData.colors,
    discount: productData.discount || defaultProductData.discount,
    thumbnail: productData.thumbnail || defaultProductData.thumbnail,
    images: productData.images?.length ? productData.images : defaultProductData.images,
    categories: productData.categories?.length ? productData.categories : defaultProductData.categories,
    status: productData.status || defaultProductData.status,
    reviews: productData.reviews?.length ? productData.reviews : defaultProductData.reviews,
    shop: {
      id: productData.shop?.id || defaultProductData.shop.id,
      slug: productData.shop?.slug || defaultProductData.shop.slug,
      name: productData.shop?.name || defaultProductData.shop.name,
      email: productData.shop?.email || defaultProductData.shop.email,
      phone: productData.shop?.phone || defaultProductData.shop.phone,
      address: productData.shop?.address || defaultProductData.shop.address,
      profilePicture: productData.shop?.profilePicture || defaultProductData.shop.profilePicture,
      coverPicture: productData.shop?.coverPicture || defaultProductData.shop.coverPicture,
      socialLinks: {
        facebook: productData.shop?.socialLinks?.facebook || defaultProductData.shop.socialLinks.facebook,
        twitter: productData.shop?.socialLinks?.twitter || defaultProductData.shop.socialLinks.twitter,
        youtube: productData.shop?.socialLinks?.youtube || defaultProductData.shop.socialLinks.youtube,
        instagram: productData.shop?.socialLinks?.instagram || defaultProductData.shop.socialLinks.instagram,
      },
    },
    // for: productData.for || defaultProductData.for,
  };
};

const getSlugs = async (): Promise<{ slug: string }[]> => {
  const slugs = await productApiEndpoints().getProductSlugs();
  return slugs.map((item) => ({ slug: item.params.slug }));
};

// Fetch a product by its slug
const getProductBySlug = async (slug: string): Promise<Product> => {
  try {
    // Use the existing `getProductBySlug` method from the productApiEndpoints
    const productData = await productApiEndpoints().getProductBySlug(slug);
    
    // Map the response to the Product model
    return mapToProductModel(productData);
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    throw new Error("Error fetching product details");
  }
};

// Fetch and map product data
const getProduct = async (page: number = 1, pageSize: number = 28): Promise<Product[]> => {
  const response = await productApiEndpoints().getProducts(page, pageSize);
  console.log(response.result)
  // Apply the mapping function to the result
  const mappedProducts = response.result.map((product) => mapToProductModel(product));
  console.log(mappedProducts)
  return mappedProducts;
};




// get all product slug
// const getSlugs = async (): Promise<{ slug: string }[]> => {
//   const response = await axios.get("/api/products/slug-list");
//   return response.data;
// };

// // get product based on slug
// const getProduct = async (slug: string): Promise<Product> => {
//   const response = await axios.get("/api/products/slug", { params: { slug } });
//   return response.data;
// };

const getFrequentlyBought = async (): Promise<Product[]> => {
  const response = await axios.get("/api/frequently-bought-products");
  return response.data;
};

const getRelatedProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/related-products");
  return response.data;
};

const getAvailableShop = async (): Promise<Shop[]> => {
  const response = await axios.get("/api/product/shops");
  return response.data;
};

export default { getProductBySlug, getSlugs, getProduct, getFrequentlyBought, getRelatedProducts, getAvailableShop };
