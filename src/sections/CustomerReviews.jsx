import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin font-bold text-4xl">
        What Our <span className="text-coral-red">Customers</span> Says?
      </h3>
      <p className="max-w-lg text-center mt-4 mx-auto info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 max-lg:flex-col gap-14 mt-24 justify-evenly items-center">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            feedback={review.feedback}
            ratings={review.rating}
            customerName={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
