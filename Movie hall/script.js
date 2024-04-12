let totalBooking = 0;
let remain = 40;
const movieHall = document.getElementById('movieHall');
const totalbook = document.getElementById('in');
const totalRemain = document.getElementById('out');
totalbook.innerHTML = `Booked seat is ${totalBooking}`;
totalRemain.innerHTML = `Remain seat is ${remain}`;
for (let m = 0; m < 40; m++) {
	let div = document.createElement("div");
	div.classList.add('seat');
	div.onclick = () => {
		if (div.classList.contains('booked')) {
			totalBooking--;
			remain++;
		} else {
			totalBooking++;
			remain--;
		}
		div.classList.toggle('booked');
		totalbook.innerHTML = `Booked seat is ${totalBooking}`;
		totalRemain.innerHTML = `Remain seat is ${remain}`;
	}
	movieHall.append(div);
};
