import Image from "next/image";
import project1 from "../../images/kal-project1.jpg";
import project2 from "../../images/kal-project2.jpg";

export default function Kalyanpage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Kalyan Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pt-8">
        <div className="relative w-full h-80">
          {" "}
          {/* Set a fixed height */}
          <Image
            src={project1}
            alt="Luxury Apartment Complex in Kalyan"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold mb-2 text-black">
            Luxury Apartment Complex
          </h2>
          <p className="text-black">
            Experience modern living in our state-of-the-art luxury apartment
            complex. Featuring spacious 2 and 3 BHK apartments, this project
            offers amenities like a swimming pool, gym, and landscaped gardens.
            Located in the heart of Kalyan, it provides easy access to
            schools, shopping centers, and transportation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative w-full h-80">
          {" "}
          {/* Set a fixed height */}
          <Image
            src={project2}
            alt="Eco-Friendly Townhouses in Kalyan"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold mb-2 text-black">
            Eco-Friendly Townhouses
          </h2>
          <p className="text-black">
            Our eco-friendly townhouse project combines sustainable living with
            comfort. These energy-efficient homes feature solar panels,
            rainwater harvesting, and green spaces. With a focus on community
            living, this project includes shared facilities like a community
            hall and children play area, all within a secure, gated community.
          </p>
        </div>
      </div>

      <p className="text-lg text-center mt-8">
        Discover these and more exciting real estate opportunities in Kalyan.
        Contact us for more information or to schedule a visit.
      </p>
    </div>
  );
}
