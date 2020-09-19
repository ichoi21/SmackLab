import React from "react";
import Swiper from "react-id-swiper";
import { Grid } from "@material-ui/core";
//Assets
import member1 from "../img/logo1.png";
import member2 from "../img/logo1.png";
import member3 from "../img/logo1.png";
import member4 from "../img/logo1.png";

import "./Styles.css";
import "swiper/swiper-bundle.css";
// Component
import Details from "../../components/About/AboutBox";

class About extends React.Component {
  state = {
    smackers: [
      {
        image: member1,
        id: "1",
        name: "Danielle A.",
        description: "IF YOU RAN LIKE YOUR MOUTH, YOU'D BE IN AWESOME SHAPE",
        rank: "MASTER SMACKER",
      },
      {
        image: member2,
        id: "2",
        name: "Ian C.",
        description: "VENI, VIDI, VICI",
        rank: "CERTIFIED SMACKER Trainee",
      },
      {
        image: member3,
        id: "3",
        name: "Joseph T.",
        description: "TALK IS CHEAP. ",
        rank: "CERTIFIED SMACKER",
      },
      {
        image: member4,
        id: "4",
        name: "Michelle T.",
        description: "I TRAIN WHILE YOU SLEEP",
        rank: "GURU SMACKER",
      },
    ],
  };

  render() {
    // Card Team RENDER
    let storiesRender = null;
    if (this.state.smackers) {
      storiesRender = this.state.smackers.map((story) => (
        <div key={story.id}>
          <Details profile={story} />
        </div>
      ));
    }
    // OPTIONS FOR Card SLIDER
    const params = {
      effect: "coverflow",
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 5,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="bg">
        <Grid container className="About container" spacing={12}>
          <h2 className="weight800 font40 padding30">About SMVCKLAB</h2>
          <p className="font12 padding5">
            We are four students looking for a way to motivate working out
            during COVID-19 requiring majority of us to shelter in place. One of
            the best ways known to work has been to push others by smack
            talking. Its a method proven to encourage one another that there's
            always room for improvement. So TEAM 150% decided to offer a
            community providing smack chats with trainers and other members as
            well as fitness videos to workout with. Enjoy!
          </p>
          <Grid className="swiper-container">
            <Swiper effect="overflow" {...params}>
              {storiesRender}
            </Swiper>
            <div className="swiper-pagination"></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default About;
