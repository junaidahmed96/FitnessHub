import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/fitness1.jpg";
function HerroBanner() {
  return (
    <Box
      sx={{ mt: { lg: "200px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600px" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat,Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineheight="35px" mb={4}>
        Check out the most effective excerise
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor:"#ff2625",padding:'10px'}}>
        Explore Excercises
      </Button>
      <Typography
        fontWeight="600px"
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Excercises
      </Typography>
      <img
        src={HeroBannerImage}
        alt="bannerImage"
        className="hero-banner-img"
      />
    </Box>
  );
}

export default HerroBanner;
