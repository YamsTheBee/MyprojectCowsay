import dotenv from "dotenv";
dotenv.config();

import cowsay from "cowsay";

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
	cowsay.say({
		text: `Hello, I'm ${name} from ${campus}!`,
		e: "^^",
		T: "U ",
	}),
);
