import CardComponent from "./CardComponent";
import aiImage from "../assets/stud.webp";

const CardSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-10 gap-6">
      <h1 className="text-4xl font-bold text-gray-700">Courses</h1>
      <div className="w-full h-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardComponent
          image={aiImage}
          title="AI Powered Digital Marketing"
          description="100% Assured Placement + Stipend"
          onClick={() =>
            console.log("AI Powered Digital Marketing from Card 1")
          }
        />
        <CardComponent
          image={aiImage}
          title="AI Powered Full Stack Development"
          description="100% Assured Placement + Stipend"
        />
        <CardComponent
          image={aiImage}
          title="AI Powered MERN Stack Development"
          description="Placement Assistance"
        />
        <CardComponent
          image={aiImage}
          title="AI Powered Data Science"
          description="Placement Assistance + Stipend"
        />
        <CardComponent
          image={aiImage}
          title="AI Powered Video Editing"
          description="Placement Assistance"
        />
      </div>
    </div>
  );
};

export default CardSection;
