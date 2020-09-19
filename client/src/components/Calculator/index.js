import React, { Component } from "react";
import "./calc.css";
import Range from "./Range";
import ToggleSwitch from "./ToggleSwitch";
import Output from "./Output";
import { Grid } from "@material-ui/core";
import "../Pages/Styles.css";

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 28,
      genderClass: "Male or Female",
      height: 171,
      weight: 73,
      activity: 10,
      bmi: 22.49,
      bfp: 0,
      bmiClass: "Normal",
      bmr: 0,
      tdee: 0,
    };
  }

  ageChange = (age) => {
    this.setState({ age: age }, this.setBFP);
  };

  genderChange = (gender) => {
    this.setState(
      { gender: gender, genderClass: this.getGender(gender) },
      this.setBFP
    );
    console.log("Gender: " + this.state.gender);
  };

  getGender = (gender) => {
    if (gender < 1) return "Female";
    if (gender >= 1) return "Male";
  };

  heightChange = (height) => {
    this.setState({ height: height }, this.setBmi);
  };

  weightChange = (weight) => {
    this.setState({ weight: weight }, this.setBmi);
  };

  activityChange = (activity) => {
    this.setState({ activity: activity }, this.tdee);
  };

  // calc of BMI (weight_kg)/(Height_meters ^2)
  setBmi = () => {
    let bmi = (
      (this.state.weight / this.state.height / this.state.height) *
      10000
    ).toFixed(2);
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) });
  };

  getBmiClass = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
    if (bmi >= 25 && bmi <= 29.9) return "Overweight";
    if (bmi >= 30) return "Obese";
  };

  // calc of BFP (per Jackson 2002)
  setBFP = () => {
    let bfp = Math.round(
      ((1.39 * this.state.bmi +
        0.16 * this.state.age -
        10.34 * this.state.gender -
        9) *
        100) /
        100
    );
    this.setState({ bfp: bfp }, this.setBMR);
  };

  // calc of BMR (per Katch-McArdle 2006)
  setBMR = () => {
    let bmr =
      Math.round(21.6 * (this.state.weight * (1 - this.state.bfp / 100))) + 370;
    this.setState({ bmr: bmr }, this.setTDEE);
    console.log("BFP:" + this.state.bfp);
    console.log("BMR:" + this.state.bmr);
    console.log(this.state.weight + "kg");
  };

  setTDEE = () => {
    var activityLevel = 1.2;

    if (this.state.activity > 14) {
      activityLevel = 1.9;
    } else if (this.state.activity > 8) {
      var activityLevel = 1.725;
    } else if (this.state.activity > 6) {
      var activityLevel = 1.55;
    } else if (this.state.activity > 3) {
      var activityLevel = 1.375;
    }

    const tdee = Math.round(this.state.bmr * activityLevel);
    this.setState({ tdee: tdee });
    console.log(activityLevel);
  };

  render() {
    return (
      <div className="bgShadow">
          <div className="calc">
            <div className="calcTitle">
              <h3><b>BODY CALCULATOR</b></h3>
              <p>
                Slide to your details to find track if you should be smacked or
                smacking!
              </p>
            </div>
              <form className="calcForm">
                <div>
                  <label>Age</label>
                  <Range value={this.state.age} onChange={this.ageChange} />
                </div>
                <div>
                  <label>Gender</label>
                  <ToggleSwitch
                    value={this.state.gender}
                    onChange={this.genderChange}
                  />
                </div>
                <div>
                  <label>Height</label>
                  <Range value={this.state.height} onChange={this.heightChange} />
                </div>
                <div>
                  <label>Weight</label>
                  <Range value={this.state.weight} onChange={this.weightChange} />
                </div>
                <div>
                  <label>Activity</label>
                  <Range
                    value={this.state.activity}
                    onChange={this.activityChange}
                  />
                  <span>
                    {this.state.activity}
                    {"+"} hrs/week
                  </span>
                </div>
              </form>
            <Output className="calcResults" data={this.state} />
          </div>
      </div>
    );
  }
}

export default Calc;
