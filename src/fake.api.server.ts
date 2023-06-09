import {Product} from "./app/models/product";
import {CartItem} from "./app/models/cart-item";

const express = require('express');

export const fakeApi = express();

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

fakeApi.get('/products/:productId', async (req: any, res: any, next: any) => {
  await delay(1000)
  const {productId} = req.params;
  if (!['1', '2', '3'].includes(productId)) {
    return res.status(404).json({status: 'error', message: 'Product not found!'});
  }
  await delay(1000)
  return res.json({
    status: 'success',
    data: {
      id: productId,
      name: `Product ${productId}`,
    } as Product
  });
});

fakeApi.get('/products/:productId/related', async (req: any, res: any, next: any) => {
  await delay(1000)
  const {productId} = req.params;
  if (!['1', '2', '3'].includes(productId)) {
    return res.status(404).json({status: 'error', message: 'Product not found!'});
  }
  await delay(2000)
  return res.json({
    status: 'success',
    data: [
      {
        id: '10',
        name: `Related to ${productId} - 1`,
      },
      {
        id: '11',
        name: `Related to ${productId} - 2`,
      },
      {
        id: '12',
        name: `Related to ${productId} - 3`,
      },
      {
        id: '13',
        name: `Related to ${productId} - 4`,
      },
      {
        id: '14',
        name: `Related to ${productId} - 5`,
      }
    ] as Product[]
  });
});

fakeApi.get('/cart', async (req: any, res: any, next: any) => {
  await delay(1000)
  res.json({
    status: 'success',
    data: [
      {id: '1', name: 'Product 1', quantity: 1},
      {id: '2', name: 'Product 2', quantity: 2},
      {id: '3', name: 'Product 3', quantity: 3},
      {id: '4', name: 'Product 4', quantity: 1},
      {id: '5', name: 'Product 5', quantity: 2},
    ] as CartItem[]
  });
});
