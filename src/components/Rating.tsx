import { useState } from "react";
import Thanks from "./Thanks";

export function Rating() {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating: number) {
    setSelectedRating(rating);
  }

  function hadleFormSubmitted(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div>
      <Thanks selectedRating={selectedRating} />
    </div>
  ) : (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <form
        onSubmit={hadleFormSubmitted}
        className="text-white bg-gray-800 p-6 sm:p-10 w-full sm:w-3/4 lg:w-3/12 rounded-xl"
      >
        <img
          src="../src/assets/images/icon-star.svg"
          alt="star"
          className="bg-gray-700 p-2 rounded-full mb-6"
        />
        <h1 className="text-2xl sm:text-3xl font-bold">How did we do?</h1>
        <p className="text-gray-400 text-sm sm:text-base mt-2">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering.
        </p>

        <div className="flex justify-center space-x-2 mt-4 sm:mt-5">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              type="button"
              onClick={() => handleRatingClicked(rating)}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full bg-gray-700 w-8 sm:w-10 h-8 sm:h-10 ${
                selectedRating === rating
                  ? "bg-orange-500 text-white"
                  : "text-gray-300"
              }`}
              key={rating}
            >
              {rating}
            </button>
          ))}
        </div>

        <button
          disabled={selectedRating === undefined}
          className="w-full mt-4 sm:mt-5 px-4 py-2 bg-white text-orange-500 rounded-3xl hover:bg-orange-500 hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Rating;
