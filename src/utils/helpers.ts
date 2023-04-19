export const createRandomData = () => {
	const currentTime = new Date().getTime()
	return Array.from({ length: 15 }, (_, i) => ({
		date: `${new Date(currentTime + i * 864 * 10 ** 5).toISOString().replace(/T.+/g, '')}`,
		amount: Math.floor(Math.random() * 100),
	}));
};
