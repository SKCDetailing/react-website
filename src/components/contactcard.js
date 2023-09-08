import React, { useState } from 'react';
import './custom-css/contactcard.css'; 
import emailjs from '@emailjs/browser';


const ContactCard = () => {
    const OpenTime = "8:am to 6:00pm";

    const [successNotification, setSuccessNotification] = useState('');
    const [failNotification, setFailNotification] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });

      //EmailJS handleInput
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Use EmailJS to send the email
        emailjs
          .sendForm(
            'service_cuqwgna', // Replace with your service ID
            'template_xbto0le', // Replace with your template ID
            e.target, // Use the form element as the third parameter
            'W48YWCUKEg8DqQdB6' // Replace with your user ID
          )
          .then(
            (result) => {
              console.log('Email sent successfully:', result.text);
              setSuccessNotification('Email sent Successfully!')
              // You can add code here to show a success message to the user
            },
            (error) => {
              console.error('Error sending email:', error.text);
              setFailNotification('Failed to send. Please contact us directly, or try again another time.')
              // You can add code here to show an error message to the user
            }
          );
    
        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
        
        return (
            <div className="contact-card">
            
            {/* Contact Form */}
            <div><form onSubmit={handleSubmit}>
            <div className="form-container"><span className='form-title'>Send us a Message!</span>
              <label htmlFor="name"></label>
              <input className='submit-box-name'
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
          
           
              <label htmlFor="email"></label>
              <input className='submit-box-email'
                type="email"
                id="email"
                name="email"
                placeholder='Email Address'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            
           
              <label htmlFor="message"></label>
              <textarea className='submit-box-message'
                id="message"
                name="message"
                placeholder='Your Message...'
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
              ></textarea>
           </div>
            <button className='submit-message-button' type="submit">Send Email</button>
            <div className='success-notification'>{successNotification}</div>
            <div className='fail-notification'>{failNotification}</div>
          </form>
        </div>
     

        {/* Details Section */}
        <div className='details-container'>
            <div className='contact-details'>
                <div>
                <h2>SKC Detailing</h2>
                <p>Email: <a href='mailto:skcdetailing@gmail.com'>skcdetailing@gmail.com</a></p>
                <p>Phone: <a href='tel:(916)612-5253'>(916) 612-5253</a></p>
              </div>

                </div>
              
              
                <div><h2 className='problem-h2'>Hours</h2></div>
              <div className="avaliable-container">
              

                <div className='avaliable-days'>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                </div>
                
                <div className='avaliable-times'>
                <p>{OpenTime}</p>
                <p>{OpenTime}</p>
                <p>{OpenTime}</p>
                <p>{OpenTime}</p>
                </div>
            
              </div>
              </div>
        </div>
      );
    };
    
    export default ContactCard;