const mongoose = require("mongoose");
const Blog = require("./models/blog");

const blogs = [
  {
    title: "Raigad Fort",
    img:
      "https://images.unsplash.com/photo-1560756769-068d6638b559?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80",
    author: "Kishan",
    body: `Raigad is a hill fort situated in Mahad, Raigad district of Maharashtra, India. It is one of the strongest fortresses on the Deccan Plateau.[1]
Many constructions and structures on Raigad were built by Shivaji when he made it his capital in 1674 upon being crowned the king of the Maratha kingdom, which later developed into the Maratha Empire, eventually covering much of western and central India.[2] In 1765, the fort was the location of an armed campaign by the British East India Company. Finally, on 9 May 1818, the fort was looted and destroyed by the British.
The fort rises 820 metres (2,700 ft) above sea level in the Sahyadri mountain range. There are approximately 1,737 steps leading to the fort. The Raigad Ropeway, an aerial tramway, reaches 400 meters in height and 750 meters in length, and allows visitors to reach the fort from the ground in only four Minutes`,
  },
  {
    title: "Sindhudurg fort",
    img:
      "https://www.fortsmaharashtra.com/wp-content/uploads/2018/12/Sindhudurg_fort5.jpg",
    author: "GFG",
    body: `Have you ever seen a mighty fort floating in the blue buzzing sea? Sindhudurg fort in Maharashtra, one among the many forts built by the great Chhatrapati Shivaji, is a fusion of elegance and antiquity. We all have fondness towards one or the other thing in life, it could be movies, games or anything as such. But what the Great Shivaji held dear was the forts. He was well known for his fondness for forts and he was in possession of some 370 forts at the time of his death.Sindhudurg fort, located at a small islet surrounded by the boundless Arabian sea, was the main Maratha headquarters to prepare for wars, battles and also to provide security to Maratha people. The fort built on the orders of Shivaji took three years to complete with almost 100 architects from Portugal and a manpower of 3000. The fort is spread over an area of 48 acres with fortified walls, 12 ft thick and 29 ft high, stretch for 2 miles. Over 4000 mounds of iron were used in the casting and foundation stones were firmly laid down in lead `,
  },
  {
    title: "Harihar fort",
    img:
      "https://images.unsplash.com/photo-1589652987732-353df72a1a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
    author: "wiki",
    body: `Harihar Fort Information
Harihar fort, also known as Harshagad, is a fort located 48 km from Igatpuri, Nashik District Maharashtra. Harihar lies at an altitude of 3,676 feet. The intrinsic rock-cut steps of the fort attract visitors the most. The phenomenal thing about Harihar fort trek is that it appears to be rectangular in shape from the base village, built on a triangular prism of rock the edges of this spectacular fort are precisely vertical, adding to the idiosyncratic of this striking ancient fort.
How to Reach Harihar Fort Base Village
There are two base villages of the fort, Harshewadi, and Nirgudpada. From Harshewadi the way to the fort is easy and can be climbed within an hour. You can reach Kasurli by boarding the ST bus of Igatpuri – Trimbakeshwar – Khodala. From Kasurli one has to climb a small hill where Harshewadi is located.

For Nirgudpada one can get down at Kasara or Nasik which is the nearest railway station and then can take an ST bus for Trimbakeshwar or a private vehicle to Nirgudpada. From here the route leads up to the rock-sheet from where the steps begin. One can reach the fort-top within about two-three hours from this route.

`,
  },
  {
    title: "Shaniwar Wada",
    img:
      "https://images.unsplash.com/photo-1589629041152-fb71b9c5dbcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    author: "dev",
    body: `Shaniwar Wada in Pune is a historical palace and fort that chronicles the glory and grandeur of the Maratha Empire. This old mansion boasts of a history of 287 years and was the seat of the Peshwas, who were the Prime Ministers to the Maratha rulers. It served as a melting pot of culture and politics until the Peshwas lost the Wada to the British in 1818.

Today, it stands as one of the finest architectural legacies and a prime tourist attraction in the city of Pune. If you are a history buff or enjoy art and architecture, this monument must be on your itinerary when you book your hotels in Pune.

Want to know more about this heritage monument riddled with tales of valor, grandeur, and treachery? Here is everything you should know about the Shaniwar Wada in Pune, including its history, timings, entry fee, architecture, and other interesting facts.`,
  },
];

const seedDb = async () => {
  await Blog.insertMany(blogs)
    .then(() => {
      console.log("Db seeded successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = seedDb;
