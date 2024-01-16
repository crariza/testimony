import "./App.css";
import Testimonial from "./Testimonial.jsx";
import TestimonialList from "./TestimonialList.jsx";

function App() {
  let testimonies = [
    {
      name: "Shawn Wang",
      location: "Singapore",
      position: "Software Engineer",
      company: "Amazon",
      url: "../dist/asian.jpg",
      description: "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
    },
    {
      name: "Sarah Chima",
      location: "Nigeria",
      position: "Software Engineer",
      company: "ChatDesk",
      url: "../dist/african.jpg",
      description: "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
    },
    {
      name: "Emma Bostian",
      location: "Sweden",
      position: "Software Engineer",
      company: "Spotify",
      url: "../dist/american.jpg",
      description: "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
    },
  ];
  return (
    <div className="testimonial">
      <h1 className="title">Here is what our alumni say about freeCodeCamp:</h1>
      <TestimonialList>
        {testimonies.map((test) => (
          <Testimonial
            key={test.name}
            name={test.name}
            location={test.location}
            position={test.position}
            company={test.company}
            description={test.description}
            url={test.url}
          />
        ))}
      </TestimonialList>
    </div>
  );
}

export default App;
