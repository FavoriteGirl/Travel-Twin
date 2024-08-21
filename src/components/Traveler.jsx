import React from "react";

export const Traveler = ({ travelers, setLike, setInvite }) => {
  return (
    <>
      {travelers.map((traveler, index) => {
        return (
          <div key={traveler.id} className="flex items-center flex-col">
            <div>
              <img
                src={traveler.profileImage}
                alt={traveler.name}
                className=" h-52 rounded-xl object-cover"
              />
              <div className="flex gap-3 items-center">
                <h2 className="font-semibold">{traveler.name}</h2>
                <p className="text-sm text-gray-500">{traveler.age}</p>
              </div>
            </div>
            <div className="flex justify-start gap-4 w-full m-0">
              <button
                className=" bg-primary text-white text-sm px-2 py-1 rounded-lg font-bold"
                onClick={() => setLike(index, "invited", !traveler.invited)}
              >
                {traveler.invited ? "Uninvite" : "Invite"}
              </button>
              <button
                className="rounded-lg"
                onClick={() => setLike(index, "like", !traveler.like)}
              >
                {traveler.like ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11544 8.02607C3.20159 7.50361 3.37795 6.98115 3.6104 6.47461C5.00201 3.44215 8.95827 3.37934 11.6675 5.29632C11.8671 5.43753 12.1327 5.43753 12.3323 5.29632C15.0416 3.37934 18.9979 3.44215 20.3895 6.47461C20.6219 6.98115 20.7983 7.50361 20.8844 8.02607C22.0204 14.9158 14.4678 20 11.9999 20C9.53202 20 1.98019 14.9111 3.11544 8.02607Z"
                      stroke="#363538"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11544 8.02607C3.20159 7.50361 3.37795 6.98115 3.6104 6.47461C5.00201 3.44215 8.95827 3.37934 11.6675 5.29632C11.8671 5.43753 12.1327 5.43753 12.3323 5.29632C15.0416 3.37934 18.9979 3.44215 20.3895 6.47461C20.6219 6.98115 20.7983 7.50361 20.8844 8.02607C22.0204 14.9158 14.4678 20 11.9999 20C9.53202 20 1.98019 14.9111 3.11544 8.02607Z"
                      fill="#F97316"
                      stroke="#F97316"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};