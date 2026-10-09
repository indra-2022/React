import Card from "./components/Card";

const cards = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/bookmark.svg",
    company: "Amazon",
    posted: "5 Days ago",
    role: "Senior Software Engineer",
    position: "Full time",
    level: "Senior",
    salary: "$120/hr",
    location: "Kolkata, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/bookmark.svg",
    company: "Google",
    posted: "2 Days ago",
    role: "Frontend Developer",
    position: "Full time",
    level: "Mid",
    salary: "$100/hr",
    location: "Bangalore, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/bookmark.svg",
    company: "Microsoft",
    posted: "1 Day ago",
    role: "Backend Developer",
    position: "Full time",
    level: "Senior",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/bookmark.svg",
    company: "Meta",
    posted: "7 Days ago",
    role: "React Developer",
    position: "Part time",
    level: "Junior",
    salary: "$80/hr",
    location: "Mumbai, India"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/bookmark.svg",
    company: "Apple",
    posted: "3 Days ago",
    role: "Full Stack Developer",
    position: "Full time",
    level: "Mid",
    salary: "$105/hr",
    location: "Pune, India"
  }
];

const App = () => {
  return (
    <div className="parent">
      {cards.map((card, index) => (
        <Card
          key={index}
          logo={card.logo}
          icon={card.icon}
          company={card.company}
          posted={card.posted}
          role={card.role}
          position={card.position}
          level={card.level}
          salary={card.salary}
          location={card.location}
        />
      ))}
    </div>
  );
};

export default App;