import React from "react";
import { Box, Skeleton } from "@mui/material";

const Shimmer = () => {
  return (
    <div className="w-4/4 md:w-full min-h-screen bg-black md:flex md:items-center md:justify-center">
      <Box sx={{ paddingLeft: { xs: 10 } }}>
        <Skeleton
          sx={{
            bgcolor: "grey.800",
            borderRadius: { md: 3 },
            width: { xs: 200, md: 300 },
            height: { xs: 400, md: 600 },
          }}
        />
      </Box>
      <Box sx={{ paddingLeft: { md: 10 }, padding: { xs: 5 } }}>
        <Skeleton
          sx={{
            width: { xs: 300, md: 700 },
            height: { xs: 50, md: 50 },
            bgcolor: "grey.800",
          }}
        />
        <Skeleton sx={{ width: { xs: 200, md: 300 }, bgcolor: "grey.800" }} />
        <Skeleton sx={{ width: { xs: 200, md: 300 }, bgcolor: "grey.800" }} />
        <Skeleton sx={{ width: { xs: 200, md: 300 }, bgcolor: "grey.800" }} />
        <Skeleton sx={{ width: { xs: 200, md: 400 }, bgcolor: "grey.800" }} />
        <Skeleton sx={{ width: { xs: 200, md: 500 }, height: { xs: 150, md: 300 }, bgcolor: "grey.800" }} />
      </Box>
    </div>
  );
};

export default Shimmer;