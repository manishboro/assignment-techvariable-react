export const truncateString = (str, num) => {
	if (str.length < num || !num) return str;

	return str.slice(0, num) + " ..";
};
