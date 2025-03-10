"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import Box from "@component/Box";
import Image from "@component/Image";
import Rating from "@component/rating";
import Avatar from "@component/avatar";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { H1, H2, H3, H6, SemiSpan } from "@component/Typography";
import { useAppContext } from "@context/app-context";
import { currency } from "@utils/utils";
import Product from "@models/product.model";

// ========================================
interface Props {
  product: Product;  // Accepting full product object
}
// ========================================

export default function ProductIntro({ product }: Props) {
  const param = useParams();
  const { state, dispatch } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(0);
  const safeImages = product.images || [];

  const routerId = param.slug as string;
  const cartItem = state.cart.find((item) => item.id === product.id || item.id === routerId);

  const handleImageClick = (ind: number) => () => setSelectedImage(ind);

  const handleCartAmountChange = (amount: number) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        price: product.price,
        qty: amount,
        name: product.title,
        imgUrl: safeImages[0] || "/assets/images/products/default-product.png",
        id: product.id || routerId
      }
    });
  };

  return (
    <Box overflow="hidden">
      <Grid container justifyContent="center" alignItems="center" spacing={16}>
        <Grid item md={6} xs={12} alignItems="center">
          <div>
            <FlexBox mb="50px" overflow="hidden" borderRadius={16} justifyContent="center">
              {safeImages.length > 0 ? (
                <Image
                  width={300}
                  height={300}
                  src={safeImages[selectedImage]}
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              ) : (
                <Box width={300} height={300} bg="gray.100" />
              )}
            </FlexBox>

            <FlexBox overflow="auto">
              {safeImages.map((url, ind) => (
                <Box
                  key={ind}
                  size={70}
                  bg="white"
                  minWidth={70}
                  display="flex"
                  cursor="pointer"
                  border="1px solid"
                  borderRadius="10px"
                  alignItems="center"
                  justifyContent="center"
                  ml={ind === 0 ? "auto" : ""}
                  mr={ind === safeImages.length - 1 ? "auto" : "10px"}
                  borderColor={selectedImage === ind ? "primary.main" : "gray.400"}
                  onClick={handleImageClick(ind)}>
                  <Avatar src={url} borderRadius="10px" size={65} />
                </Box>
              ))}
            </FlexBox>
          </div>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb="1rem">{product.title}</H1>

          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Brand:</SemiSpan>
            <H6 ml="8px">{product.brand}</H6>
          </FlexBox>

          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Rated:</SemiSpan>
            <Box ml="8px" mr="8px">
              <Rating color="warn" value={4} outof={5} />
            </Box>
            <H6>(50)</H6>
          </FlexBox>

          <Box mb="24px">
            <H2 color="primary.main" mb="4px" lineHeight="1">
              {currency(product.price)}
            </H2>

            <SemiSpan color="inherit">Stock Available</SemiSpan>
          </Box>

          {!cartItem?.qty ? (
            <Button
              mb="36px"
              size="small"
              color="primary"
              variant="contained"
              onClick={handleCartAmountChange(1)}>
              Add to Cart
            </Button>
          ) : (
            <FlexBox alignItems="center" mb="36px">
              <Button
                p="9px"
                size="small"
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty - 1)}>
                <Icon variant="small">minus</Icon>
              </Button>

              <H3 fontWeight="600" mx="20px">
                {cartItem?.qty.toString().padStart(2, "0")}
              </H3>

              <Button
                p="9px"
                size="small"
                color="primary"
                variant="outlined"
                onClick={handleCartAmountChange(cartItem?.qty + 1)}>
                <Icon variant="small">plus</Icon>
              </Button>
            </FlexBox>
          )}

          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Sold By:</SemiSpan>
            <Link href={`/shops/${product.shop.slug}`}>
              <H6 lineHeight="1" ml="8px">
                {product.shop.name}
              </H6>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
}
