// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const DecisionTree = () => {
  const [preference, setPreference] = useState('');
  const [activity, setActivity] = useState('');
  const [budget, setBudget] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const generateRecommendation = () => {
    let result = '';

    if (preference === 'Beach') {
      if (activity === 'Adventure') {
        if (budget === 'Low') {
          result = 'We recommend a budget-friendly surfing trip to Costa Rica! Enjoy thrilling waves and beautiful beaches without breaking the bank.';
        } else if (budget === 'Medium') {
          result = 'Explore Bali, Indonesia! Engage in water sports and cultural adventures on a moderate budget.';
        } else if (budget === 'High') {
          result = 'Enjoy luxury adventures in the Maldives! Dive into pristine waters and indulge in top-tier beach resorts.';
        }
      } else if (activity === 'Relaxation') {
        if (budget === 'Low') {
          result = 'Visit Goa, India, for affordable beach relaxation and serene sunsets.';
        } else if (budget === 'Medium') {
          result = 'Take a relaxing trip to the Bahamas! Enjoy stunning beaches and a laid-back atmosphere.';
        } else if (budget === 'High') {
          result = 'Experience ultimate luxury in Bora Bora! Pamper yourself in overwater bungalows and tranquil surroundings.';
        }
      }
    } else if (preference === 'Mountains') {
      if (activity === 'Adventure') {
        if (budget === 'Low') {
          result = 'Go on a thrilling trek in the Himalayas, perfect for adventure seekers on a budget!';
        } else if (budget === 'Medium') {
          result = 'Explore the Rockies in Canada! Enjoy hiking and adventurous activities with moderate expenses.';
        } else if (budget === 'High') {
          result = 'Take a luxury mountaineering trip to the Swiss Alps! Enjoy skiing and high-end amenities.';
        }
      } else if (activity === 'Relaxation') {
        if (budget === 'Low') {
          result = 'Visit the peaceful hill stations in Nepal for affordable mountain relaxation.';
        } else if (budget === 'Medium') {
          result = 'Unwind in Aspen, Colorado! Enjoy scenic views and cozy lodges with moderate spending.';
        } else if (budget === 'High') {
          result = 'Stay at a luxurious mountain resort in the French Alps! Perfect for relaxation and fine dining.';
        }
      }
    }

    setRecommendation(result);
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Interactive Decision Tree</h1>
      <div className="mb-4">
        <label className="block text-lg mb-2">Do you prefer the mountains or the beach?</label>
        <select 
          className="w-full p-2 border rounded-lg" 
          value={preference} 
          onChange={(e) => setPreference(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Mountains">Mountains</option>
          <option value="Beach">Beach</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg mb-2">Are you looking for adventure or relaxation?</label>
        <select 
          className="w-full p-2 border rounded-lg" 
          value={activity} 
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Adventure">Adventure</option>
          <option value="Relaxation">Relaxation</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg mb-2">What’s your budget?</label>
        <select 
          className="w-full p-2 border rounded-lg" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button 
        onClick={generateRecommendation} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Get Recommendation
      </button>

      {recommendation && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
          <h2 className="text-xl font-semibold mb-2">Recommendation:</h2>
          <p>{recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default DecisionTree;