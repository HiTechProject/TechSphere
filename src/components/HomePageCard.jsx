// import "Frame 16(1)" from "./"
import Card from './Card'
const HomePageCard = () => {
  const arrobj = [
    {
      src: "Frame 16 (1).png",
      title: "Tech Pioneers Hackathon 2025",
      mode: "Online",
      content: "Shape the future of tech! Collaborate, innovate, and create in this 48-hour coding marathon.",
      start: "March 15, 2025",
      duration: "48 hours",
      prize: " $10,000"
    },
    {
      src: "Frame 16 (2).png",
      title: "Tech Innovators Hackathon",
      mode: "Online",
      content: "Join innovators worldwide to solve real-world challenges and create impactful solutions.",
      start: "Feb 10, 2025",
      duration: "48 hours",
      prize: " $15,000 + Startup Mentorship"

    },
    {
      src: "13405020_5211976 1.png",
      title: "GreenFuture Hackathon",
      mode: "Online",
      content: "Code for a sustainable future! Create eco-friendly solutions to global environmental problems.",
      start: "March 5, 2025",
      duration: "3 Days",
      prize: " $10,000 + Internship Opportunities"

    },
    {
      src: "Frame 16 (3).png",
      title: "AI NextWave Hackathon",
      mode: "Online",
      content: "Push the boundaries of AI! Solve complex problems and build cutting-edge machine learning solutions.",
      start: "April 20, 2025",
      duration: "36 hours",
      prize: " $12,000 + Certification"

    },
    {
      src: "Frame 16 (4).png",
      title: "FinTech Innovators Hackathon",
      mode: "Online",
      content: "Revolutionize finance with innovative solutions! Create apps, tools, and platforms for the FinTech industry.",
      start: "May 1, 2025",
      duration: "48 hours",
      prize: " $8,000"

    },
    {
      src: "Frame 16 (5).png",
      title: "AI NextWave Hackathon",
      mode: "Online",
      content: "Push the boundaries of AI! Solve complex problems and build cutting-edge machine learning solutions.",
      start: "April 20, 2025",
      duration: "36 hours",
      prize: " $12,000 + Certification"

    },
  ]
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center">
        {arrobj.map((event, index) => (
          <Card key={index} event={event} />
        ))}
      </div>
    </>
  )
}
export default HomePageCard;