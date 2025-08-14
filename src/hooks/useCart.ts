'use client';

import { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

// GraphQL Queries and Mutations
const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
      id
      code
      state
      totalWithTax
      subTotal
      lines {
        id
        productVariant {
          id
          name
          sku
          product {
            id
            name
            slug
          }
        }
        unitPriceWithTax
        quantity
        linePriceWithTax
      }
      customer {
        id
        emailAddress
      }
      createdAt
      updatedAt
    }
  }
`;

const ADD_ITEM_TO_ORDER = gql`
  mutation AddCourseToOrder($productId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productId, quantity: $quantity) {
      __typename
      ... on Order {
        id
        code
        state
        totalWithTax
        lines {
          id
          productVariant {
            id
            name
            product {
              id
              name
            }
          }
          unitPriceWithTax
          quantity
          linePriceWithTax
        }
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

const REMOVE_ORDER_LINE = gql`
  mutation RemoveOrderLine($orderLineId: ID!) {
    removeOrderLine(orderLineId: $orderLineId) {
      __typename
      ... on Order {
        id
        code
        state
        totalWithTax
        lines {
          id
          productVariant {
            id
            name
          }
          quantity
          linePriceWithTax
        }
      }
      ... on OrderModificationError {
        errorCode
        message
      }
    }
  }
`;

const REMOVE_ALL_ORDER_LINES = gql`
  mutation RemoveAllOrderLines {
    removeAllOrderLines {
      __typename
      ... on Order {
        id
        code
        state
        totalWithTax
        lines {
          id
          productVariant {
            name
          }
        }
      }
      ... on OrderModificationError {
        errorCode
        message
      }
    }
  }
`;

// Cart hook
export const useCart = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Get active order
  const { data: orderData, loading, error, refetch } = useQuery(GET_ACTIVE_ORDER, {
    errorPolicy: 'all',
    fetchPolicy: 'cache-and-network',
    // ssr: false,
    skip: typeof window === 'undefined',
    notifyOnNetworkStatusChange: true,
  });

  // Add item mutation
  const [addItemToOrder] = useMutation(ADD_ITEM_TO_ORDER, {
    onCompleted: () => {
      refetch();
    },
    onError: (error) => {
      console.error('Error adding item to cart:', error);
    }
  });

  // Remove item mutation
  const [removeOrderLine] = useMutation(REMOVE_ORDER_LINE, {
    onCompleted: () => {
      refetch();
    },
    onError: (error) => {
      console.error('Error removing item from cart:', error);
    }
  });

  // Clear cart mutation
  const [removeAllOrderLines] = useMutation(REMOVE_ALL_ORDER_LINES, {
    onCompleted: () => {
      refetch();
    },
    onError: (error) => {
      console.error('Error clearing cart:', error);
    }
  });

  // Helper functions
  const addToCart = useCallback(async (productId: string, quantity: number = 1) => {
    try {
      const result = await addItemToOrder({
        variables: { productId, quantity }
      });

      if (result.data?.addItemToOrder.__typename === 'Order') {
        setSuccessMessage('Course added to cart successfully!');
        setTimeout(() => setSuccessMessage(null), 3000);
        return true;
      } else {
        console.error('Error adding to cart:', result.data?.addItemToOrder);
        return false;
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      return false;
    }
  }, [addItemToOrder]);

  const removeFromCart = useCallback(async (orderLineId: string) => {
    try {
      const result = await removeOrderLine({
        variables: { orderLineId }
      });

      if (result.data?.removeOrderLine.__typename === 'Order') {
        setSuccessMessage('Course removed from cart successfully!');
        setTimeout(() => setSuccessMessage(null), 3000);
        return true;
      } else {
        console.error('Error removing from cart:', result.data?.removeOrderLine);
        return false;
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
      return false;
    }
  }, [removeOrderLine]);

  const clearCart = useCallback(async () => {
    try {
      const result = await removeAllOrderLines();

      if (result.data?.removeAllOrderLines.__typename === 'Order') {
        setSuccessMessage('Cart cleared successfully!');
        setTimeout(() => setSuccessMessage(null), 3000);
        return true;
      } else {
        console.error('Error clearing cart:', result.data?.removeAllOrderLines);
        return false;
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
      return false;
    }
  }, [removeAllOrderLines]);

  // Computed values
  const activeOrder = orderData?.activeOrder || null;
  const cartItems = activeOrder?.lines || [];
  const cartItemsCount = cartItems.reduce((total: number, line: any) => total + line.quantity, 0);
  const cartTotal = activeOrder?.totalWithTax || 0;
  const cartSubtotal = activeOrder?.subTotal || 0;

  return {
    // Data
    activeOrder,
    cartItems,
    cartItemsCount,
    cartTotal,
    cartSubtotal,
    loading,
    error,
    successMessage,

    // Actions
    addToCart,
    removeFromCart,
    clearCart,
    refetch
  };
};