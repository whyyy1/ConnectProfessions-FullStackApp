import React, {useState} from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import EventCard from "./EventCard";

function EventCar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Logic to go to the next event
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    // Logic to go to the previous event
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };
  const events = [
    {
      name: "TechCon 2023",
      image:'https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149333668.jpg?size=626&ext=jpg',
      type: "Coding Event",
      time: "October 15, 2023, 9:00 AM - 5:00 PM",
      location: "TechHub Convention Center, San Francisco, CA",
      description:
        "Join us for TechCon 2023, the premier coding conference featuring workshops, hackathons, and talks by industry experts.",
    },
    {
      name: "Business Networking Mixer",
      image:'https://img.freepik.com/free-photo/group-people-volunteering-foodbank-poor-people_23-2149012194.jpg?size=626&ext=jpg&ga=GA1.2.918028652.1693697524&semt=ais',
      type: "Networking Event",
      time: "November 5, 2023, 6:30 PM - 8:30 PM",
      location: "City View Rooftop Lounge, New York, NY",
      description:
        "Connect with professionals from various industries at our exclusive networking mixer. Bring your business cards!",
    },
    {
      name: "AI in Healthcare Symposium",
      image:'https://img.freepik.com/premium-photo/business-people-meeting-eating-discussion-cuisine-party-concept_53876-36097.jpg?size=626&ext=jpg',
      type: "Tech Event",
      time: "December 12, 2023, 10:00 AM - 4:00 PM",
      location: "Medical Innovation Center, Boston, MA",
      description:
        "Explore the latest advancements in AI and its applications in healthcare. Hear from experts and see live demonstrations.",
    },
    {
      name: "Entrepreneurship Workshop",
      image:'https://img.freepik.com/free-photo/diverse-business-people-dinner-party_53876-98341.jpg?w=1380&t=st=1693697526~exp=1693698126~hmac=3297ce10ad96924743b3517fea271d7df7d9b4c2838c2b0f373fccba25dc1c17',
      type: "Business Event",
      time: "January 8, 2024, 2:00 PM - 6:00 PM",
      location: "Startup Incubator, Austin, TX",
      description:
        "Learn the essentials of starting and growing a successful business. Ideal for aspiring entrepreneurs.",
    },
    {
      name: "Web Development Bootcamp",
      image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2608517%2Fpexels-photo-2608517.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-matheus-bertelli-2608517.jpg%26fm%3Djpg&tbnid=gBLr9eD5FPSe6M&vet=12ahUKEwjUiKvIio2BAxXWIN4AHY1uA1IQMygPegUIARCaAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fevent%2F&docid=Y6kJleTBVNDbLM&w=5392&h=3595&q=free%20event%20image&client=firefox-b-1-d&ved=2ahUKEwjUiKvIio2BAxXWIN4AHY1uA1IQMygPegUIARCaAQ',
      type: "Coding Event",
      time: "February 20, 2024 - February 24, 2024",
      location: "Code Academy, Seattle, WA",
      description:
        "A week-long intensive web development bootcamp covering HTML, CSS, JavaScript, and more.",
    },
    {
      name: "Leadership Summit",
      image:'https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149333668.jpg?size=626&ext=jpg',
      type: "Business Event",
      time: "March 7, 2024, 9:00 AM - 4:30 PM",
      location: "Executive Conference Center, Chicago, IL",
      description:
        "Gain insights into effective leadership strategies and management practices. Keynote speakers and panel discussions.",
    },
    {
      name: "Tech Startup Pitch Competition",
      image:'https://img.freepik.com/free-photo/diverse-group-friends-summer-shoot_53876-47015.jpg?size=626&ext=jpg',
      type: "Tech Event",
      time: "April 14, 2024, 6:00 PM - 9:00 PM",
      location: "Innovation Hub, San Jose, CA",
      description:
        "Watch innovative tech startups pitch their ideas to a panel of judges. Discover the next big thing in tech.",
    },
    {
      name: "Digital Marketing Conference",
      type: "Business Event",
      image:'https://img.freepik.com/free-photo/group-different-people-volunteering-foodbank_23-2149012213.jpg?size=626&ext=jpg',
      time: "May 22, 2024 - May 24, 2024",
      location: "Digital Marketing Center, Miami, FL",
      description:
        "Stay updated on the latest trends in digital marketing. Workshops, case studies, and networking opportunities.",
    },
    {
      name: "Machine Learning Workshop",
      image:'https://img.freepik.com/free-photo/diverse-business-people-dinner-party_53876-98341.jpg?w=1380&t=st=1693697526~exp=1693698126~hmac=3297ce10ad96924743b3517fea271d7df7d9b4c2838c2b0f373fccba25dc1c17',
      type: "Tech Event",
      time: "June 5, 2024, 10:30 AM - 3:30 PM",
      location: "AI Institute, Los Angeles, CA",
      description:
        "Explore the world of machine learning with hands-on workshops and practical applications.",
    },
    {
      name: "Business Ethics Seminar",
      image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2608517%2Fpexels-photo-2608517.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-matheus-bertelli-2608517.jpg%26fm%3Djpg&tbnid=gBLr9eD5FPSe6M&vet=12ahUKEwjUiKvIio2BAxXWIN4AHY1uA1IQMygPegUIARCaAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fevent%2F&docid=Y6kJleTBVNDbLM&w=5392&h=3595&q=free%20event%20image&client=firefox-b-1-d&ved=2ahUKEwjUiKvIio2BAxXWIN4AHY1uA1IQMygPegUIARCaAQ',
      type: "Business Event",
      time: "July 18, 2024, 3:00 PM - 5:00 PM",
      location: "Ethical Business Center, Denver, CO",
      description:
        "Discuss the importance of ethics in business and how it impacts decision-making. Open forum for ethical discussions.",
        
    },
  ];

  return (
    
    <div className="overflow-hidden h-96 w-full   overflow-y-scroll">
      {events.map((event, index) => (
          <div key={index} className="m-5 ">
            <EventCard
              name={event.name}
              type={event.type}
              time={event.time}
              location={event.location}
              image={event.image}
            />
          </div>
        ))}
        </div>
  );
}

export default EventCar;
