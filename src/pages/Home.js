import React, { useState } from "react";
import { Box } from "@mui/material";
import HerroBanner from "../components/HerroBanner";
import SearchExcercise from "../components/SearchExcercise";
import Excercises from "../components/Excercises";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [excercises, setExcercises] = useState([]);

  return (
    <Box>
      <HerroBanner />
      <SearchExcercise
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excercises
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        Excercises={excercises}
      />
    </Box>
  );
};

export default Home;
