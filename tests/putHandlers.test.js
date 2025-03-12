const config = require('../config');
async function handleResponse(response) {
	const contentType = response.headers.get('content-type');
	if (!contentType || !contentType.includes('application/json')) {
	  const text = await response.text();
	  console.error('Received non-JSON response:', text);
	  throw new Error(`Expected JSON response but got: ${contentType}`);
	}
	return response.json();
  }
  
test('should return a status code of 200', async () => {
	const cartId = 5;
	let actualPutStatus;
	const requestBody = {
		productsList: [
			{ id: 1, quantity: 4 },
			{ id: 5, quantity: 2 },
			{ id: 3, quantity: 1 },
			{ id: 4, quantity: 1 },
		  ],
	};
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/${cartId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		console.log('Response Status:', response.status);
      const data = await handleResponse(response);
	  actualPutStatus = await response.status;
      console.log('Parsed Response:', data);
	} catch (error) {
		console.error(error);
	}
	expect(actualPutStatus).toBe(200);
});
test('should add items to the cart and return updated cart details', async () => {
	const cartId = 5; 
	const requestBody = {
		productsList: [
		  { id: 1, quantity: 4 },
		  { id: 5, quantity: 2 },
		  { id: 3, quantity: 1 },
		  { id: 4, quantity: 1 },
		],
	  };
	  let data;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/${cartId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await handleResponse(response);
		console.log('Parsed Response:', data);
	const allowedFields = ['id', 'productsList', 'status', 'deliveryPriceOur', 'deliveryTime', 'courierService', 'deliveryPrice', 'wareHouse', 'userId', 'productsCost', 'finalCCost']; 
	} catch (error) {
	console.error(error);
}
expect(typeof data).toBe('object');
expect(data).toMatchObject({}); 
expect(data).not.toBeNull();
expect(data).toHaveProperty('productsList');
expect(data).toHaveProperty('id');
expect(data.id).toEqual(expect.any(Number));
expect(Array.isArray(data.productsList)).toBe(true);
});
data.productsList.forEach(product => {
	expect(product).toHaveProperty('id');
	expect(product).toHaveProperty('quantity');
	expect(product.id).toEqual(expect.any(Number));
	expect(product.quantity).toEqual(expect.any(Number));
});
expect(allowedFields).toContain(field);