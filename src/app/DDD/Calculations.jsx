'use client';
import React, { useState } from 'react';

export default function Calculations() {
  const [inputValues, setInputValues] = useState({ value1: '', value2: '', value3: '', value4: '' }); // Store input values in an object

  const pricePerPixelsUSD = 0.01;
  const figmaFeeUSD = 15;
  const rateUSD = 380;

  const pricePerPixelsAMD = pricePerPixelsUSD * rateUSD;
  const figmaFeeAMD = rateUSD * figmaFeeUSD;
  const rateAMD = 1;

  // Calculate results
  const resultsUSD = Object.values(inputValues).reduce((acc, value) => {
    const numValue = parseFloat(value) || 0; // Parse input as float, default to 0
    return acc + (numValue * pricePerPixelsUSD);
  }, figmaFeeUSD);

  const resultsAMD = Object.values(inputValues).reduce((acc, value) => {
    const numValue = parseFloat(value) || 0; // Parse input as float, default to 0
    return acc + (numValue * pricePerPixelsAMD);
  }, figmaFeeAMD);

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value // Update the specific input value
    }));
  };

  return (
    <div className='calc'>
      <div className='calc__layouts'>
        <div className="layouts__column">
          <h3>Layouts</h3>
          <ul className="__list">
            <li className="__item"><span>1</span><input type="number" name="value1" value={inputValues.value1} onChange={handleInputChange} /></li>
            <li className="__item"><span>2</span><input type="number" name="value2" value={inputValues.value2} onChange={handleInputChange} /></li>
            <li className="__item"><span>3</span><input type="number" name="value3" value={inputValues.value3} onChange={handleInputChange} /></li>
            <li className="__item"><span>4</span><input type="number" name="value4" value={inputValues.value4} onChange={handleInputChange} /></li>
          </ul>
        </div>
      </div>
      <div className='calc__values'>
        <div className="calc__column">
          <h3>Titles</h3>
          <ul className="calc__list">
            <li className="calc__item item-titles">Price per 1px</li>
            <li className="calc__item item-titles">Figma fee</li>
            <li className="calc__item item-titles">Price</li>
          </ul>
        </div>
        <div className="calc__column">
          <h3>USD {rateUSD}</h3>
          <ul className="calc__list">
            <li className="calc__item usd">{pricePerPixelsUSD}</li>
            <li className="calc__item usd">{figmaFeeUSD}</li>
            <li className="calc__item usd result">{resultsUSD.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</li>
          </ul>
        </div>
        <div className="calc__column">
          <h3>AMD</h3>
          <ul className="calc__list">
            <li className="calc__item amd">{pricePerPixelsAMD.toFixed(1)}</li>
            <li className="calc__item amd">{figmaFeeAMD}</li>
            <li className="calc__item amd result">{resultsAMD.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
