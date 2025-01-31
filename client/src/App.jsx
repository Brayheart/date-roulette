import React, { useState } from "react";

const DateNightGenerator = () => {
  // TODO: Implement your date ideas array

  const getRandomDate = () => {
    // TODO: Implement random date selection logic
  };

  const addDateIdea = () => {
    // TODO: Implement adding new date idea logic
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Date Night Generator
          </h2>

          <button
            onClick={getRandomDate}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-150 font-medium"
          >
            Generate Random Date
          </button>

          <div className="space-y-2">
            <label
              htmlFor="vibe-select"
              className="block text-sm font-medium text-gray-700"
            >
              Choose a Vibe
            </label>
            <select
              id="vibe-select"
              value={selectedVibe}
              onChange={(e) => setSelectedVibe(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            >
              <option value="">Please Choose an Option</option>
              <option value="all">Any Vibe</option>
              <option value="adventurous">Adventurous</option>
              <option value="cozy">Cozy</option>
              <option value="chill">Chill</option>
              <option value="tasty">Tasty</option>
            </select>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-6">
            <div className="space-y-2">
              <label
                htmlFor="dateInput"
                className="block text-sm font-medium text-gray-700"
              >
                Add New Date Idea
              </label>
              <input
                type="text"
                id="dateInput"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                placeholder="Enter your date idea"
                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="vibeInput"
                className="block text-sm font-medium text-gray-700"
              >
                Vibe Category
              </label>
              <input
                type="text"
                id="vibeInput"
                value={vibeInput}
                onChange={(e) => setVibeInput(e.target.value)}
                placeholder="Enter the vibe"
                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <button
              onClick={addDateIdea}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-150 font-medium"
            >
              Add Date
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-100">
            <p className="text-gray-900 min-h-[24px]">
              {currentIdea || "Your date idea will appear here"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateNightGenerator;
