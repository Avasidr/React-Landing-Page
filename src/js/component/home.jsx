import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	const characters = [
		{
			name: "Joel",
			age: "56 years old",
			status: "Death",
			img: "https://static.wikia.nocookie.net/thelastofus/images/2/27/The_Last_of_Us_Part_I_Joel.png/revision/latest?cb=20220905023610&path-prefix=es",
			text: `Joel is the main protagonist in The Last of Us. A man in his early 50s, hardened by the atrocities and devastation left by the fungal infection, 
			Joel works as a black market dealer within the quarantine zone, selling drugs and weapons of all sorts. 
			He's given the job to smuggle Ellie out of Boston to the Fireflies.`
		},
		{
			name: "Ellie",
			age: "19 years old",
			status: "Inmune",
			img: "https://static.wikia.nocookie.net/thelastofus/images/6/63/The_Last_of_Us_Part_2_Ellie_2036.png/revision/latest?cb=20230410210008&path-prefix=es",
			text: `Ellie is described as "mature beyond her years" as a result of the circumstances of her environment. 
			She is characterized as strong, witty, and "a little rough around the edges". 
			Her emotional trauma is accentuated after her encounter with David.`
		},
		{
			name: "Dina", 
			age: "21 years old", 
			status: "Pregnant",
			img: "https://static.wikia.nocookie.net/thelastofus/images/f/f4/Part_II_Dina_infobox.png/revision/latest?cb=20230215214241",
			text: `Dina is a key character in The Last of Us Part II. She is Ellie's partner and assists her in her quest for revenge. 
			Dina was orphaned at a young age and was raised by her older sister, Talia. 
			Before the events of the game, Dina moved to Jackson, Wyoming, and joined the community there.`
		},
		{
			name: "Abby", 
			age: "20 years old", 
			status: "Healthy",
			img: "https://static.wikia.nocookie.net/the-last-of-us/images/8/84/Abby_2038.png/revision/latest?cb=20221120094842&path-prefix=it",
			text: `A member of the Fireflies broken by tragedy when Joel Miller killed her father Jerry Anderson, Abby made it her mission to avenge Jerry's demise. 
			However, it is only after her vengeance that she embarks on a journey with companion Lev and rediscovers purpose in her life.`
		}
	]

	return (
		<div>
			<Navbar />
			<Jumbotron title="The Last of Us Part II" />

			<div className="d-flex justify-content-center flex-wrap mb-5">
				{characters.map(character => <Card title={character.name} image={character.img} description={character.age} status={character.status} general={character.text} />)}
			</div>

			<Footer />
		</div>

	);
};

export default Home;
