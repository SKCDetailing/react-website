import React, { useState } from 'react';
import './custom-css/packages.css';

const Packages = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const isButtonDisabled = !selectedVehicle || !selectedPackage;

  const handleScheduleClick = () => {
    if (isButtonDisabled) {
      alert('Please select a vehicle type and a package');
    } else {
      // Redirect to the appropriate link based on selectedVehicle and selectedPackage
      window.location.href = `/schedule?vehicle=${selectedVehicle}&package=${selectedPackage}`;
    }
  };

  return (
    <div className="packages-container">
      {/* First Section: Vehicle Types */}
      <div className="vehicle-type">
        {/* Sedan */}
        <div
          className={`vehicle-option ${selectedVehicle === 'Sedan' ? 'selected' : ''}`}
          onClick={() => handleVehicleSelect('Sedan')}
        >
          {/* Icon */}
          <div className="vehicle-icon"></div>
          <div className="vehicle-title">Sedan</div>
        </div>
        {/* Truck/SUV/Van */}
        <div
          className={`vehicle-option ${selectedVehicle === 'Truck/SUV/Van' ? 'selected' : ''}`}
          onClick={() => handleVehicleSelect('Truck/SUV/Van')}
        >
          {/* Icon */}
          <div className="vehicle-icon"></div>
          <div className="vehicle-title">Truck/SUV/Van</div>
        </div>
        {/* Larger Vehicles */}
        <div
          className={`vehicle-option ${selectedVehicle === 'Larger Vehicles' ? 'selected' : ''}`}
          onClick={() => handleVehicleSelect('Larger Vehicles')}
        >
          {/* Icon */}
          <div className="vehicle-icon"></div>
          <div className="vehicle-title">Larger Vehicles</div>
        </div>
      </div>

      {/* Second Section: Package Selection */}
      <div className="package-selection">
        {/* Wash and Wax */}
        <div
          className={`package-box ${selectedPackage === 'Wash and Wax' ? 'selected' : ''}`}
          onClick={() => handlePackageSelect('Wash and Wax')}
        >
          <div className="package-title">Wash and Wax</div>
          <div className="package-price">Starting from $29.99</div>
          <div className="package-time">Estimated Time: 1-2 hours</div>
          <ul className="package-info">
            <li>Exterior wash</li>
            <li>Wax application</li>
            {/* ... */}
          </ul>
        </div>
        {/* Premium Internal Detail */}
        {/* Premium Detail */}
        {/* Stage 1 Correction */}
        {/* ... */}
      </div>

      {/* Schedule a Time Button */}
      <button className="schedule-button" onClick={handleScheduleClick} disabled={isButtonDisabled}>
        Schedule a Time
      </button>
    </div>
  );
};

export default Packages;
