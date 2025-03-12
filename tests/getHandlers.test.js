const config = require('../config');
test('should return a status code of 200', async () => {
	let actualGetStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualGetStatus = await response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualGetStatus).toBe(200);
});
test('should return a response data with expected data', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		const data = await response.json();
	} catch (error) {
		console.error(error);
	}
	    expect(Array.isArray(data)).toBe(true); 
        expect(data.length).toBeGreaterThan(0); 
        expect(data[0]).toHaveProperty('workingHours'); 
        expect(data[0]).toHaveProperty('name'); 
});