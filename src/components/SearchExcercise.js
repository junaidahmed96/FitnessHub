import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { exeriseOption, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExcercise=({setExcercises,bodyPart,setBodyPart})=> {
  const [search, setSearch] = useState("");
 const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exeriseOption
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      console.log(search,"search");
      const exceriseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exeriseOption
      );
      console.log(exceriseData,"exceriseData");
      const searchExcercise = exceriseData.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(search) ||
          excercise.target.toLowerCase().includes(search) ||
          excercise.equipment.toLowerCase().includes(search) ||
          excercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      console.log(searchExcercise,"searchExcercise");
      setExcercises(searchExcercise);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px "
        textAlign="center"
      >
        Awesome Excercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadous: "4px" },
            width: { lg: "800px", xs: "350px" },
            background: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Excercise"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts}  bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
}

export default SearchExcercise;
