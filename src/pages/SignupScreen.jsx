import React from "react";

import FloatingInput from "../components/FloatingInput";



export default function SignupScreen({ formData, onInputChange, onNavigate }) {

  // Clean structure to keep elements placed perfectly sequentially in your canvas

  const inputFields = [

    {

      label: "Full Name",

      name: "fullName",

      type: "text",

      labelTop: 131,

      inputTop: 140,

    },

    {

      label: "Phone number",

      name: "phone",

      type: "text",

      labelTop: 196,

      inputTop: 205,

    },

    {

      label: "Email address",

      name: "email",

      type: "email",

      labelTop: 261,

      inputTop: 270,

    },

    {

      label: "Password",

      name: "password",

      type: "password",

      labelTop: 326,

      inputTop: 335,

    },

    {

      label: "Company name",

      name: "company",

      type: "text",

      labelTop: 391,

      inputTop: 400,

    },

  ];



  return (

    <div className="signup-container shadow-sm">

      {/* Account Title Header */}

      <h2 className="signup-header">

        Create your

        <br />

        PopX account

      </h2>



      {/* Input Loop */}

      {inputFields.map((field) => (

        <div key={field.name}>

          <label

            className="floating-box-label"

            style={{ top: `${field.labelTop}px` }}

          >

            {field.label}

          </label>

          <input

            type={field.type}

            name={field.name}

            value={formData[field.name] || ""}

            onChange={onInputChange}

            className="custom-form-input"

            style={{ top: `${field.inputTop}px` }}

          />

        </div>

      ))}

      {/* Agency Verification Block */}

      <div className="agency-container">

        {/* Question title with the asterisk right next to the question mark */}

        <label className="agency-title">

          Are you an Agency?<span className="text-danger">*</span>

        </label>



        <div className="agency-options-row">

          <div className="d-flex align-items-center gap-2">

            <input

              type="radio"

              name="isAgency"

              id="agencyYes"

              value="yes"

              checked={formData.isAgency === "yes"}

              onChange={onInputChange}

              className="custom-radio-circle"

            />

            <label htmlFor="agencyYes" className="custom-radio-label">

              Yes

            </label>

          </div>



          <div className="d-flex align-items-center gap-2">

            <input

              type="radio"

              name="isAgency"

              id="agencyNo"

              value="no"

              checked={formData.isAgency === "no"}

              onChange={onInputChange}

              className="custom-radio-circle"

            />

            <label htmlFor="agencyNo" className="custom-radio-label">

              No

            </label>

          </div>

        </div>

      </div>



     {/* Submission Trigger Button */}

<button className="btn-submit-account d-flex align-items-center justify-content-center" onClick={() => onNavigate('profile')}>

  <span className="btn-submit-text">Create Account</span>

</button>

    </div>

  );

}