import React from "react";
import Swiper from "react-id-swiper";
import { Grid, makeStyles } from "@material-ui/core";
//Assets
import member1 from "../img/logo1.png";
import member2 from "../img/logo1.png";
import member3 from "../img/logo1.png";
import member4 from "../img/logo1.png";

import "./About.css";
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
        description:
          "Lorem ipsum dolor sit amet, consectetur undo thes tabore et dolore magna aliqua.",
        rank: "Master Smacker",
      },
      {
        image: member2,
        id: "2",
        name: "Ian C.",
        description:
          "Lorem ipsum dolor undo thes tabore et dolore magna aliqua.",
        rank: "Certified Smacker in Training",
      },
      {
        image: member3,
        id: "3",
        name: "Joseph T.",
        description:
          "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        rank: "Certified Smacker",
      },
      {
        image: member4,
        id: "4",
        name: "Michelle T.",
        description:
          "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        rank: "Guru Smacker",
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
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 5,
      loop: false,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      },
    };

    return (
      <Grid container className="About container" spacing={12}>
        <h2 className="weight800 font40 padding30">About SMVCKLAB</h2>
        <p className="font12 padding10">
          We are four students looking for a way to motivate working out during
          COVID-19 requiring majority of us to shelter in place. One of the best
          ways known to work has been to push others by smack talking. Its a
          method proven to encourage one another that there's always room for
          improvement. So TEAM 150% decided to offer a community providing smack
          chats with trainers and other members as well as fitness videos to
          workout with. Enjoy!
        </p>
        <Grid>
          <Swiper {...params}>{storiesRender}</Swiper>
        </Grid>
      </Grid>
    );
  }
}

export default About;
