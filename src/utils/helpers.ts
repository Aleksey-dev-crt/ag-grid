export const createRandomData = () => {
	const year = new Date().getFullYear();
	const month = new Date().getMonth() + 1;
	const day = new Date().getDate();
	return Array.from({ length: 15 }, (_, i) => ({
		date: `${year}-${month}-${day + i + 1}`,
		amount: Math.floor(Math.random() * 100),
	}));
};
