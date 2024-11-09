import PropTypes from "prop-types";
import Carousel from "./Corousel";

function Community(props) {
  return (
    <div className="bg-gray-800 p-4 text-white font-bold text-center py-24">
      <h1 className="text-7xl">Join a community</h1>
      <h1 className="text-5xl">of {props.quantity}</h1>
      <pre className="text-lg mt-4 text-gray-300">
        {`You’re not alone. Two million developers from all over the world visit the React docs
every month. React is something that people and teams can agree on.`}
      </pre>
      <Carousel />

      <p className="max-w-3xl mx-auto text-lg lg:text-xl   ">
        This is why React is more than a library, an architecture, or even an
        ecosystem. React is a community. It’s a place where you can ask for
        help, find opportunities, and meet new friends. You will meet both
        developers and designers, beginners and experts, researchers and
        artists, teachers and students. Our backgrounds may be very different,
        but React lets us all create user interfaces together.
      </p>
    </div>
  );
}

Community.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Community;
