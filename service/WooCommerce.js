import WooCommerceAPI from 'react-native-woocommerce-api';
 
const api = new WooCommerceAPI({
  url: 'https://rocketeer.simplon-roanne.com', // Your store URL
  ssl: true,
  consumerKey: 'ck_3c914d2597381f3e7ba8e4bdb33d5c25b4a6b97c', // Your consumer secret
  consumerSecret: 'cs_d346f5cf4b26af1ef6ce28e69c9734efea2842a8', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v3', // WooCommerce WP REST API version
  queryStringAuth: true
});

export const getProducts = api.get('products',{})
.then(data => {
  return (data)
})
.catch(error => {
   // error will return any errors that occur
  })
;



