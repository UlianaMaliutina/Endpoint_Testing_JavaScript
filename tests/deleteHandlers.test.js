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
	let actualDeleteStatus;
	const kitId = 6;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	  });
	  const data = await handleResponse(response);
	  actualDeleteStatus = await response.status;
	 } catch (error) {
	  console.error('Error during test execution:', error);
	} 
	expect(actualDeleteStatus).toBe(200);
  });
  
test('should successfully delete the kit and return expected result', async () => {
	const kitId = 7;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			}
		});
		const data = await handleResponse(response);
  } catch (error) {
	console.error('Error during test execution:', error);
}
expect(data).toHaveProperty('ok', true);
});