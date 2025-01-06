import { useState } from 'react';
import './RegistrationStyle.css';

export default function Registration() {
  const [educationLevel, setEducationLevel] = useState('');
  const [educationDetails, setEducationDetails] = useState('');
  const [currentJob, setCurrentJob] = useState('');
  const [gender, setGender] = useState('');

  const handleEducationChange = (e) => {
    setEducationLevel(e.target.value);
  };

  return (
    <>
      <header>Registration</header>
      <main>
        <form action="">
          {/* Full Name and Username side by side */}
          <div className="input-group">
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>
          </div>

          {/* Email and ID side by side */}
          <div className="input-group-email-id">
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="id">ID</label>
              <input type="text" id="id" placeholder="Enter your ID" />
            </div>
          </div>

          {/* Password and Confirm Password side by side */}
          <div className="input-group-password">
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Create your password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm your password" />
            </div>
          </div>

          <label htmlFor="educationLevel">Education Level</label>
          <select
            id="educationLevel"
            value={educationLevel}
            onChange={handleEducationChange}
          >
            <option value="">Select Education Level</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
          </select>

          {/* Education Details (always visible) */}
          <div>
            <label htmlFor="educationDetails">Education Details</label>
            <textarea
              id="educationDetails"
              placeholder="Enter your education details"
              value={educationDetails}
              onChange={(e) => setEducationDetails(e.target.value)}
            ></textarea>
          </div>

          {/* Current Job (visible only if Graduate is selected) */}
          {educationLevel === 'graduate' && (
            <div>
              <label htmlFor="currentJob">Current Job</label>
              <input
                type="text"
                id="currentJob"
                placeholder="Enter your current job"
                value={currentJob}
                onChange={(e) => setCurrentJob(e.target.value)}
              />
            </div>
          )}

          {/* Gender Section */}
          <label className="gender-label">Gender</label>
          <div className="gender-group">
            <label htmlFor="male">
            Male
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
            </label>
            <label htmlFor="female">
            Female
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
            </label>
          </div>

          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="#">Login</a></p>
      </main>
    </>
  );
}


