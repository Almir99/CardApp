
import HomePage from "./component/HomePage/HomePage";
import Nav from "./component/Nav/Nav";
import {useState} from "react";

function App() {

  const dummyData = [
    {
      title:"Tranquility",
      description:"A photograph of a serene forest with a small stream flowing through it, showcasing the peaceful and calming atmosphere of nature. The forest is full of tall trees, lush greenery, and sunlight filtering through the leaves. The sound of the flowing stream creates a soothing ambiance, and the gentle rustling of leaves in the breeze adds to the tranquility. The photo captures a moment of stillness, allowing the viewer to take a moment and appreciate the beauty of nature.",
      imgURL:"./images/Tranquility.png",
      alt:"Tranquility"
    },{
      title:"Urban Energy",
      description:"A photograph of a busy city street during rush hour, showcasing the energy and hustle of urban life. People are walking, cars are moving, and buildings tower above everything else. The bright lights of shops and billboards add to the vibrant atmosphere. The photo captures the constant motion and activity of a bustling city, conveying the sense of excitement and liveliness that comes with urban living.",
      imgURL:"./images/Urban Energy.png",
      alt:"Urban Energy"
    },{
      title:"The Great Outdoors",
      description:"A photograph of a magnificent mountain range, showcasing the beauty and grandeur of the natural world. The peaks are covered in snow, and the valleys below are filled with lush greenery. The photo captures the majesty of the mountains, conveying a sense of awe and wonder at the power of nature. The viewer can almost feel the crisp mountain air and the peace that comes with being surrounded by such breathtaking scenery.",
      imgURL:"./images/The Great Outdoors.png",
      alt:"The Great Outdoors"
    },{
      title:"Underwater Paradise",
      description:"A photograph of a colorful coral reef, showcasing the beauty and diversity of marine life. The coral is a riot of colors, and the fish swimming around it are equally vibrant. The photo captures the serenity of the underwater world, allowing the viewer to imagine themselves diving into the clear blue waters and exploring the wonders below. The reef is a reminder of the importance of preserving our oceans and the incredible life they sustain.",
      imgURL:"./images/Underwater Paradise.png",
      alt:"Underwater Paradise"
    },{
      title:"Enchanted Dawn",
      description:" A photograph of a tranquil countryside on a misty morning, showcasing the serene and mystical beauty of the early morning hours. The mist adds an ethereal quality to the landscape, and the soft morning light creates a gentle glow. The photo captures the peacefulness and stillness of the countryside, allowing the viewer to imagine themselves taking a moment to breathe in the fresh air and appreciate the simple pleasures of life.",
      imgURL:"./images/Enchanted Dawn.png",
      alt:"Enchanted Dawn"
    },{
      title:"Escape to Another World",
      description:"A photograph of a comfortable reading nook, showcasing the cozy and inviting atmosphere of a good book. The nook is filled with soft pillows, blankets, and warm lighting, creating a space that's perfect for getting lost in a novel. The photo captures the sense of escape and relaxation that comes with reading, allowing the viewer to imagine themselves curling up with their favorite book and forgetting about the world for a while.",
      imgURL:"./images/Escape to Another World.png",
      alt:"Escape to Another World"
    },{
      title:"Seaside Bliss",
      description:"A photograph of a sandy beach bathed in warm sunlight, showcasing the simple joy and happiness of a day at the seaside. The waves gently lap against the shore, and seagulls circle overhead. The photo captures the carefree and relaxed atmosphere of a beach vacation, allowing the viewer to imagine themselves kicking off their shoes and enjoying the sunshine.",
      imgURL:"./images/SeasideBliss.png",
      alt:"Seaside Bliss"
    },{
      title:"Nature's Power",
      description:"A photograph of a powerful waterfall, showcasing the raw energy and strength of nature.",
      imgURL:"./images/Nature's Power.png",
      alt:"Nature's Power"
    },
  ]

  const [data, setData] = useState(dummyData)

  return(
    <div>
      <Nav addData={setData}/>
      <HomePage data={data}/>
    </div>
  )
}

export default App;
