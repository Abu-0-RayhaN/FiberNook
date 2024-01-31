import { useState } from "react";
import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      rating: 4,
      comment: "Great product! Highly recommended.",
      user: "Alice",
    },
    {
      id: 2,
      rating: 5,
      comment: "Excellent quality and fast shipping.",
      user: "Bob",
    },
    {
      id: 3,
      rating: 3,
      comment: "Good, but could be improved.",
      user: "Charlie",
    },
    {
      id: 4,
      rating: 5,
      comment: "Absolutely love it! Will buy again.",
      user: "David",
    },
  ]);

  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: "",
    user: "New User",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleAddReview = () => {
    setReviews((prevReviews) => [
      ...prevReviews,
      {
        ...newReview,
        id: reviews.length + 1,
      },
    ]);
    // Reset the input fields after adding the review
    setNewReview({ rating: 5, comment: "", user: "New User" });
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 font-Roboto">Customer Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 border border-gray-200 rounded-md"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                <img
                  src={`https://i.pravatar.cc/150?u=${review.id}`}
                  alt={`${review.user}'s avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-semibold">{review.user}</span>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-2 text-xl flex gap-2">
                {Array.from({ length: review.rating }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </span>
              <span className="text-gray-600">{`Rated ${review.rating}/5`}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="mt-8 mx-auto md:mx-0 p-6 bg-gray-100 rounded-md max-w-md">
        <h3 className="text-lg font-bold mb-4 text-center">Add Your Review</h3>
        <div className="mb-4">
          <label className="mr-2 block">Rating:</label>
          <span className="text-xl flex gap-2">
            {Array.from({ length: newReview.rating }, (_, index) => (
              <FaStar
                key={index}
                className="text-yellow-500 cursor-pointer"
                onClick={() =>
                  setNewReview((prev) => ({ ...prev, rating: index + 1 }))
                }
              />
            ))}
          </span>
        </div>
        <div className="mb-4">
          <label className="mr-2 block">Comment:</label>
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full resize-none outline-none"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label className="mr-2 block">Your Name:</label>
          <input
            type="text"
            name="user"
            value={newReview.user}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2 w-full outline-none"
          />
        </div>
        <button
          onClick={handleAddReview}
          className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-all duration-200 block mx-auto"
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
