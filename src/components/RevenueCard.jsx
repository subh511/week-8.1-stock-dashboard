//import React from 'react'

function RevenueCard({ titel, amount, orderCount }) {
  return (
    <div className="bg-grey rounded shadow-md p-2">
      <div className="flex text-gray-500 justify-start">
        <div className="flex">
          <div className="font-normal">{titel}</div>
          <div className="mt-1 pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <div className="font-medium">₹ {amount}</div>

        {orderCount ? (
          <div className="flex cursor-pointer underline text-blue-500">
            <div className="flex">
              <div className="text-blue-500">
              {orderCount} orders(s)
              </div>
              <div className="mt-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-3.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default RevenueCard;
