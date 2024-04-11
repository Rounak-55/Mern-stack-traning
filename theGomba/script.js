let boxPixel = document.getElementById('gomba');
for (let i = 0; i < 500; i++) {
	const div = document.createElement("div");
	// div.innerHTML = i;
	div.classList.add("card");
	div.onclick = () => {
		div.classList.toggle('active');
	}
	gomba.append(div);
};
const boxes = document.querySelectorAll("div.card");
const art = [136, 137, 160, 161, 162, 163, 184, 185, 186, 187, 188, 189, 208, 209, 211, 212, 214, 215, 233, 234, 235, 236, 237, 238, 239, 240, 260, 263, 284, 286, 287, 289, 308, 310, 313, 315];
for (pos of art) {
	boxes [pos].click();
};

