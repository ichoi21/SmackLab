import React, { Component } from "react";
import ReactDom from "react-dom";
import "./question.css";
import questionAPI from "./question";
import Result from "../ResultBox";
import QuestionBox from "../QuestionBox";

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
    };
  }

  // Function to get question from ./question
  getQuesions = () => {
    questionAPI().then((question) => {
      this.setState({ questionBank: question });
    });
  };
}
