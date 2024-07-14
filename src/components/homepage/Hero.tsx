import img1 from "../../img/homeImg1.png";
import img2 from "../../img/homeImg2.png";

function Hero() {
  return (
    <div className="grid grid-cols-1 py-6 lg:grid-cols-2 gap-5 justify-between h-auto ">
      <div className="flex justify-center items-center p-4 lg:p-10 ">
        <div className="div relative  w-[120px] lg:w-[200px]">
          <img
            src={img1}
            alt="movie image"
            className="w-full"
          />
          <img
            src={img2}
            alt="movie image"
            className="w-full absolute top-[20%] -right-[30%] "
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start p-7">
        <h1 className="text-3xl gradient ">
          Stream Your Favorites Anytime, Anywhere
        </h1>
        <h2 className="text-2xl font-medium my-6">
          Discover movies, TV shows, and original content tailored just for you.
        </h2>
        <ul className=" list-disc">
          <h3 className="text-lg capitalize font-medium">
            Feature Highlights:
          </h3>
          <li className="m-3">
            Unlimited Access: Stream unlimited movies and TV shows without
            interruptions.
          </li>
          <li className="m-3">
            Multi-Device Support: Enjoy your content on your TV, smartphone,
            tablet, and computer.
          </li>
          <li className="m-3">
            Personalized Recommendations: Get suggestions based on your viewing
            history and preferences.
          </li>
          <li className="m-3">
            Ad-Free Experience: Enjoy your favorite shows without any ads.
          </li>
          <li className="m-3">
            Download and Watch Offline: Take your favorite shows with you
            wherever you go.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
