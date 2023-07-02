// eslint-disable-next-line @typescript-eslint/no-unused-vars
const post = async (/** @type {{ body: { email: any; }; }} */ request) => {
	const { email } = request.body;

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return {
			status: 400,
			body: { success: false, message: 'Invalid email address' }
		};
	}

	return {
		status: 200,
		body: { success: true, message: 'Data submitted successfully' }
	};
};
