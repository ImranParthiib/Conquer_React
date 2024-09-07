import PropTypes from "prop-types";

function Community(props) {
  return (
    <div className="bg-gray-800 p-4 text-white  font-bold text-center py-24">
      <h1 className="text-5xl">Join a community</h1>
      <h1 className="text-5xl">of {props.quantity}</h1>
      <pre className="text-lg mt-4 text-gray-300">
        {`You’re not alone. Two million developers from all over the world visit the React docs
     every month. React is something that people and teams can agree on.
        `}
      </pre>
    </div>
  );
}

Community.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Community;
