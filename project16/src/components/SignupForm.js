import React, { useRef } from "react";

function SignupForm() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileNoInputRef = useRef();
  let dateOfBirthInputRef = useRef();
  let maleInputRef = useRef();
  let femaleInputRef = useRef();
  let stateSelectInputRef = useRef();
  let paragraphRef = useRef();

  let selectedGender;
  let maritalStatus;
  let salutation;

  return (
    <div>
      <form>
        <div>
          <h2 style={{ color: " rgb(255, 0, 119)" }}>Sign Up</h2>
          <div>
            <label>Name</label>
            <input placeHolder="First Name" ref={firstNameInputRef}></input>
          </div>
          <div>
            <label></label>
            <input placeHolder="Last Name" ref={lastNameInputRef}></input>
          </div>

          <div>
            <label>Email</label>
            <input type="email" ref={emailInputRef}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={passwordInputRef}></input>
          </div>
          <div>
            <label>Mobile No</label>
            <input type="tel" ref={mobileNoInputRef}></input>
          </div>
          <div>
            <label>Date Of Birth</label>
            <input
              className="dobInput"
              type="date"
              placeHolder=""
              ref={dateOfBirthInputRef}
            ></input>
          </div>
          <div>
            <label> Gender</label>
            <input
              className="genderInput"
              type="radio"
              name="gender"
              ref={maleInputRef}
              onChange={() => {
                if (maleInputRef.current.checked == true) {
                  selectedGender = "male";
                }
              }}
            ></input>
            <label style={{ width: "auto" }}>Male </label>
            <input
              className="genderInput"
              type="radio"
              name="gender"
              ref={femaleInputRef}
              onChange={() => {
                if (femaleInputRef.current.checked == true) {
                  selectedGender = "female";
                }
              }}
            ></input>
            <label style={{ width: "auto" }}>Female</label>
          </div>
          <div>
            <label> Marital Status</label>
            <input
              className="maritalStatusInput"
              type="radio"
              name="ms"
              onChange={(eventObj) => {
                console.log(eventObj);
                if (eventObj.target.checked == true) {
                  maritalStatus = "single";
                }
              }}
            ></input>
            <label style={{ width: "auto" }}>Single </label>
            <input
              className="maritalStatusInput"
              type="radio"
              name="ms"
              onChange={(eventObj) => {
                console.log(eventObj);
                if (eventObj.target.checked == true) {
                  maritalStatus = "married";
                }
              }}
            ></input>
            <label style={{ width: "auto" }}>Married</label>
          </div>
          <div>
            <label>Address</label>
            <input placeHolder="House No"></input>
          </div>
          <div>
            <label></label>
            <input placeHolder="Street"></input>
          </div>
          <div>
            <label></label>
            <input placeHolder="City"></input>
          </div>
          <div>
            <label>State</label>

            <select className="stateSelect" ref={stateSelectInputRef}>
              <option>select state</option>
              <option value="AP">Andhra Pradesh</option>
              <option value="ACP">Arunachal Pradesh</option>
              <option value="ASM">Assam</option>
              <option value="BH">Bihar</option>
              <option value="CHG">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="GR">Gujarat</option>
              <option value="HR">Haryana</option>
              <option value="HP">Himachal Pradesh</option>
              <option value="JK">Jharkhand</option>
              <option value="KA">Karnataka</option>
              <option value="KL">Kerala</option>
              <option value="MP">Madhya Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="MN">Manipur</option>
              <option value="MGL">Meghalaya</option>
              <option value="MZR">Mizoram</option>
              <option value="NG">Nagaland</option>
              <option value="OD">Odisha</option>
              <option value="PJ">Punjab</option>
              <option value="RJ">Rajasthan</option>
              <option value="SK">Sikkim</option>
              <option value="TN">Tamil Nadu</option>
              <option value="TS">Telangana</option>
              <option value="TR">Tripura</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="UK">Uttarakhand</option>
              <option value="WB">West Bengal</option>
            </select>
          </div>
          <div>
            <input className="checkBox" type="checkbox"></input> I Accept the
            Terms&Conditions
          </div>
          <div className="signupButton">
            <button
              type="button"
              onClick={() => {
                if (selectedGender == "male") {
                  salutation = "Mr.";
                } else {
                  if (maritalStatus == "single") {
                    salutation = "Miss.";
                  } else {
                    salutation = "Mrs.";
                  }
                }
                paragraphRef.current.innerHTML = `${salutation}${firstNameInputRef.current.value}
                ${lastNameInputRef.current.value} From ${stateSelectInputRef.current.value}
                your account has been created successfully.`;
              }}
            >
              SIGN UP
            </button>
          </div>
          <div>
            <p ref={paragraphRef}></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
