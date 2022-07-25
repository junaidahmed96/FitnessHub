import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exeriseOption, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExcerciseCard";
const Excercises = ({ Excercises, setExcercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const excercisePerPage = 9;
  const indexOfLastExercise = currentPage * excercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - excercisePerPage;
  console.log(bodyPart, "bodyPart");
  const currentExercises = Excercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exeriseOption
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exeriseOption
        );
      }

      setExcercises(exerciseData);
    };
    fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { mt: { lg: "110px" } } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((excercise, index) => (
          <ExerciseCard key={index} exercise={excercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {Excercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(Excercises.length / excercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Excercises;
