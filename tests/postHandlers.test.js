const config = require('../config');
const requestBody = {
}
test('should return a status code of 201', async () => {
	let actualPostStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		},
		actualPostStatus = await response.status);
	} catch (error) {
		console.error(error);
	}
	expect(actualPostStatus).toBe(201);
});
test('should return a response data with expected data', async () => {
	const requestBody = {
		firstName: 'Max',
		phone: '+10005553535',
		address: '8042 Lancaster Ave.Hamburg, NY'
	  };
    try {
		const response = await fetch(`${config.API_URL}/api/v1/users`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
  } catch (error) {
	console.error('Error during test execution:', error);
}
expect(data).toHaveProperty('authToken'); 
expect(typeof data.authToken).toBe('string');
});