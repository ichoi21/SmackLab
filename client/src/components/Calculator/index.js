import React, { Component } from "react";
import "./calc.css";
import Range from "./Range";
import ToggleSwitch from "./ToggleSwitch";
import Output from "./Output";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 28,
      genderClass: "Male or Female",
      height: 171,
      weight: 73,
      bmi: 22.49,
      bfp: 0,
      bmiClass: "Normal",
      bmr: 0,
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
    this.setState({ bmr: bmr });
    console.log("BFP:" + this.state.bfp);
    console.log("BMR:" + this.state.bmr);
    console.log(this.state.weight + "kg");
  };

  render() {
    return (
      <div className="container">
        <h2>Body Calculator</h2>
        <form>
          <div>
            <label>Age</label>
            <Range value={this.state.age} onChange={this.ageChange} />
          </div>
          <div>
            <label>Gender</label>
            <p>Female | Male</p>
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
        </form>
        <Output data={this.state} />
      </div>
    );
  }
}

export default App;
