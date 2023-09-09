import React, { useState } from 'react';
import './custom-css/skc.css'; 
import { Link } from "react-scroll";

const SKC = () => {
  const [currentSelection, setCurrentSelection] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [selectedPackages, setSelectedPackages] = useState([]);

  const vehicleTypes = [
    // Sedan
    {
      title: 'Sedan',
      icon: {
        package: 'fas',
        name: 'car',
      },
      packages: [
        //Sedan Basic Wash and Wax
        {
          title: 'Basic Wash & Wax',
          eta: '1hr 30min',
          basePrice: 75,
          addonPrice: [],
          microservices: [
            'Hand Wash',
            'Spray Wax',
            'Exterior Glass',
            'Wheel Faces, Barrels & Wells',
          ],
          addOns: [
            {
              id: 'headlight-restoration',
              title: 'Headlight Restoration',
              price: 70,
            },
            {
              id: 'pet-hair-removal',
              title: 'Pet Hair Removal',
              price: 45,
            },
            // ... other add-ons
          ],
          meetingLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2NcAlbIZjC5cjk6opT6Dd1hy9CzfHIb9ZANjhEZ81DxAOLAi_ryFFgGvWDPS1TH_WO9f_T2c59?gv=true',
        },
        
        //Sedan Full Interior Detail
        {
          title: 'Full Interior Detail',
          eta: '2hr 30min',
          basePrice: 150,
          addonPrice: [],
          microservices: [
            'Door Jambs',
            'Interior Glass',
            'Meticulous Vacuuming',
            'Surface Wipe Down & Protectant',
            'Leather Conditioning',
            'One Set of Floor Mats Cleaned',
          ],
          addOns: [
            {
              id: 'headlight-restoration',
              title: 'Headlight Restoration',
              price: 70,
            },
            {
              id: 'pet-hair-removal',
              title: 'Pet Hair Removal',
              price: 45,
            },
            // ... other add-ons
          ],
          meetingLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3mtwRvQ8emaQ5FTZN09CoqMTOTbQyQHI5SdAO1784X9ajcp2d6mpSc71NoqRvDQzvC-3_kDkxJ?gv=true',
        },

        //Sedan Full Exterior Detail
        {
          title: 'Full Exterior Detail',
          eta: '2hr',
          basePrice: 110,
          addonPrice: [],
          microservices: [
            'Hand Wash',
            'Iron Removal',
            'Clay Bar Treatment',
            'Plastic Trim Coat',
            'Wheel Faces, Barrels & Wells',
            'Exterior Glass',
          ],
          addOns: [
            {
              id: 'headlight-restoration',
              title: 'Headlight Restoration',
              price: 70,
            },
            {
              id: 'pet-hair-removal',
              title: 'Pet Hair Removal',
              price: 45,
            },
            // ... other add-ons
          ],
          meetingLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2BYUP7glELVDWD_C8TmRVGcLQCILqYifA1UwtVALKrhGPJCO8L8PY3FDcJxnelqR3SQGJFp-yx?gv=true',
        },

        //Sedan Premium Full Detail
        {
          title: 'Premium Full Detail',
          eta: '3hr 30min',
          basePrice: 250,
          addonPrice: [],
          microservices: [
            'Full Interior + Full Exterior Packages', //
            
          ],
          addOns: [
            {
              id: 'headlight-restoration',
              title: 'Headlight Restoration',
              price: 70,
            },
            {
              id: 'pet-hair-removal',
              title: 'Pet Hair Removal',
              price: 45,
            },
            // ... other add-ons
          ],
          meetingLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ23d4srCrhgYU_6z5RX_Hn0lLW8bTpOmk06U2mMKKOHehznRjQHOsITTwk-GLjTMDlrf_CCaILF?gv=true',
        },

      
      ],
    },

    // SUV
    {
      title: 'Truck / SUV / Van',
      icon: {
        package: 'fas',
        name: 'truck-pickup',
      },
      packages: [
        //SUV Basic Wash and Wax
         {
          title: 'Basic Wash & Wax',
          eta: '1hr 45min',
          basePrice: 90,
          addonPrice: [],
          microservices: [
            'Hand Wash',
            'Spray Wax',
            'Exterior Glass',
            'Wheel Faces, Barrels & Wells',
          ],
          addOns: [
            {
              id: 'headlight-restoration',
              title: 'Headlight Restoration',
              price: 70,
            },
            {
              id: 'pet-hair-removal',
              title: 'Pet Hair Removal',
              price: 45,
            },
            // ... other add-ons
          ],
          meetingLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0iHJt0UKLLPUtx1_3UWI02ffBo_NUZBH3lYKWSXx1B48SRWiCoAHBQWzS5vNuIgQniVcW47vZ7?gv=true',
        },
        
        //SUV Full Interior Detail
        {
          title: 'Full Interior Detail',
          eta: '3hr',
          basePrice: 170,
          addonPrice: [],
          microservices: [
            'Door Jambs',
            'Interior Glass',
            'Meticulous Vacuuming',
            'Surface Wipe Down & Protectant',
            'Leather Conditioning',
            'One Set of Floor Mats Cleaned',
          ],
          addOns: [
            {
              id: 'headlight-restoration',
              title: 'Headlight Restoration',
              price: 70,
            },
            {
              id: 'pet-hair-removal',
              title: 'Pet Hair Removal',
              price: 45,
            },
            // ... other add-ons
          ],
          meetingLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2RQ-WKtDA-F0MEB1RnDETf5clfE9JQ61ixwdypxiCyS9A-aFb2Y0WqcYXOOay6VvwTd_cMnpG7?gv=true',
        },

        //SUV Full Exterior Detail
        {
          title: 'Full Exterior Detail',
          eta: '2hr 30mins',
          basePrice: 135,
          addonPrice: [],
          microservices: [
            'Hand Wash',
            'Iron Removal',
            'Clay Bar Treatment',
            'Plastic Trim Coat',
            'Wheel Faces, Barrels & Wells',
            'Exterior Glass',
          ],
          addOns: [
            {
              id: 'headlight-restoration',
              title: 'Headlight Restoration',
              price: 70,
            },
            {
              id: 'pet-hair-removal',
              title: 'Pet Hair Removal',
              price: 45,
            },
            // ... other add-ons
          ],
          meetingLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2kRkgcLV495uuoZj1vW5jn61NEMqeKEUTlBHI-h8_6sFA_oeHs0zJ3rUgT24sQxVAS5Sn1wqzt?gv=true',
        },

        //SUV Premium Full Detail
        {
          title: 'Premium Full Detail',
          eta: '4hr',
          basePrice: 300,
          addonPrice: [],
          microservices: [
            'Full Interior + Full Exterior Packages', //
            
          ],
          addOns: [
            {
              id: 'headlight-restoration',
              title: 'Headlight Restoration',
              price: 70,
            },
            {
              id: 'pet-hair-removal',
              title: 'Pet Hair Removal',
              price: 45,
            },
            // ... other add-ons
          ],
          meetingLink: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Xnj_fSwY3cnnBYG6fwnzPvCYI9YqJuqFkdrVnSPwQVXiNDZ1fhTbfZ5uUqbm1ApiaBbgYT69r?gv=true',
        },
      ],

    },
    // Larger Vehicles
    {
      title: 'Larger Vehicles',
      icon: {
        package: 'fas',
        name: 'ship',
      },
      packages: [
        //Larger Vehicle Wash and Wax
         
       
      ],
    },
  ];

//Function to update the totalprice
const calculateTotalPrice = (packageIndex) => {
  const selectedPackage = vehicleTypes[currentSelection].packages[packageIndex];
  const basePrice = selectedPackage.basePrice;
  const selectedAddOns = selectedPackages[packageIndex] || []; // Get selected add-ons for this package
  const totalAddOnPrice = selectedAddOns.reduce((total, addonId) => {
    const addon = selectedPackage.addOns.find((addon) => addon.id === addonId);
    if (addon) {
      return total + addon.price;
    }
    return total;
  }, 0); 
  console.log('Total price is', totalAddOnPrice + basePrice);
  console.log('packageindex', packageIndex)
  return basePrice + totalAddOnPrice;
};

// Function to handle add-on selection for a package
const handleAddOnChange = (packageIndex, addonId) => {
  setSelectedPackages((prevSelectedPackages) => {
    const newSelectedPackages = [...prevSelectedPackages];

    if (!newSelectedPackages[packageIndex]) {
      newSelectedPackages[packageIndex] = [];
    }

    const packageAddOns = newSelectedPackages[packageIndex];

    if (packageAddOns.includes(addonId)) {
      // If the addon is already selected, remove it
      const index = packageAddOns.indexOf(addonId);
      if (index !== -1) {
        packageAddOns.splice(index, 1); // Corrected the splice method usage
      }
    } else {
      // If the addon is not selected, add it
      packageAddOns.push(addonId);
    }

    return [...newSelectedPackages]; // Return a new array to trigger a state update
  });
};



//Begin return (page print)

  return (
    <div className="skc-container">
      {/* Selection Group */}
      <div className="selection-group">
        <h2 className="selection-title">What kind of vehicle do you have?</h2>

        {/* Button Group */}
        <div className="button-group">
          {vehicleTypes.map((vehicleType, index) => (
            <div
              key={index}
              onClick={() => setCurrentSelection(index)}
              className={`vehicle-type ${currentSelection === index ? 'selected' : ''}`}>
              
              {/* Icon */}
              <div className="vehicle-icon">
                <i className={`${vehicleType.icon.package} fa-${vehicleType.icon.name}`} />
              </div>
              <div className="vehicle-title">{vehicleType.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Package Group - All Cards*/}
      <h2 className='selection-title'>Select your Package</h2>
      
      <div className="package-group">
        {vehicleTypes[currentSelection].packages.map((vehiclePackage, packageIndex) => (

          //Each Package Card
          <div key={packageIndex} onClick={() => setSelectedPackage(packageIndex)}
          className={`package-card ${selectedPackage === packageIndex ? 'selected' : ''}`}>
          
            <div className="package-price-container">
              <span className="package-price-value">
                ${calculateTotalPrice(packageIndex)}
              </span>
            </div>
            <h2 className="package-title">{vehiclePackage.title}</h2>
            <div className="package-eta">{vehiclePackage.eta}</div>

             {/* Contains Microservices and Addons */}
            <div className='microservices-addon-container'>

             {/* Microservices - package-microservices is left styling and package-microservices-centered is solo center styling */}
             <div>
            <ul className="package-microservices"><h3>Includes</h3>
              {vehiclePackage.microservices.map((microservice, microserviceIndex) => (
                <li key={microserviceIndex}>{microservice}</li>
              ))}
            </ul>
            </div>

             {/* Add-ons */}
            <div className="add-ons">
              <h3 className="add-ons-title">Add-ons:</h3>
              <div className="add-ons-list"> 
                {vehiclePackage.addOns.map((addOn, addOnIndex) => (
                <div key={addOnIndex}>
                <label>
                        <input
                          type="checkbox"
                          className='add-on-checkbox'
                          value={addOn.id}
                          onChange={() => handleAddOnChange(packageIndex, addOn.id)}
                          checked={selectedPackages[packageIndex] ? selectedPackages[packageIndex].includes(addOn.id) : false}
                         />
                        {addOn.title} (+${addOn.price})
                      </label>
              </div>
             ))}
             </div>
                </div>
        </div>  
      </div>
         ))} 
  </div> {/* Closing div for package-group */}

          {/* Larger Vehicle - conditional Card */}   
          {currentSelection === 2 && ( 
              <div className='conditional-card'>
                <div className="contact-package-card">

                   
                   <div className='alternative-card-info'>
                      <h2 className="package-title">Larger Vehicles are by quote only</h2>
                      <div className="package-eta">Please Contact Us for more information</div>
                   </div>

                   <div className='alternative-card-info'>
                      <h2 className="package-title">Paint Correction available by specialty appointment</h2>
                      <div className="package-eta">If you're interested in Paint Correction, feel free to get in contact with us</div>
                   </div>
                   
                   <div className="book-appointment-container">
                   <Link to='contact-us' smooth={true} duration={500}><button className='contact-us-button'>Contact Us</button></Link> 
                   </div>
                </div>
              </div>  
            )}


            {/* Paint Correction Card */}   
            {(currentSelection === 0 || currentSelection === 1) && ( 
              <div className='conditional-card'>
                <div className="contact-package-card">
                   
                   <div className='alternative-card-info'>
                      <h2 className="package-title">Paint Correction available by specialty appointment</h2>
                      <div className="package-eta">If you're interested in Paint Correction, feel free to get in contact with us</div>
                   </div>
                   
                   <div className="book-appointment-container">
                   <Link to='contact-us' smooth={true} duration={500}><button className='contact-us-button'>Contact Us</button></Link> 
                   </div>
                </div>
              </div>  
            )}



           {/* Select Button */}
           {(currentSelection === 0 || currentSelection === 1) && ( 
          <div className='book-appointment-container'>
            <button className='book-appointment-button' onClick={() => window.open(vehicleTypes[currentSelection].packages[selectedPackage].meetingLink, '_blank')}>Schedule Appointment</button>  
          </div>
           )}
          
        </div> /* Closing Div for skc-container */
  );
};

export default SKC;
