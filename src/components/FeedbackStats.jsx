import PropTypes from "prop-types";

function FeedbackStats({ feedbacks }) {
  //Calculate average ratings
  let averageRatings = feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / feedbacks.length;
  averageRatings = averageRatings.toFixed(1).replace(/\.0$/, "");

  //   const regex = /[0-9]?\.0$/;
  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} reviews</h4>
      <h4>Average Rating: {isNaN(averageRatings) ? 0 : averageRatings}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired,
};

export default FeedbackStats;
