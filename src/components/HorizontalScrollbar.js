import React, { useContext } from "react";
import { Box, Typography, } from "@mui/material";
import {VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
// import RightArrowIcon from "../assets/icons/right-arrow.png";
// import LeftArrowIcon from "../assets/icons/left-arrow.png";

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="left-arrow">
//       <img src={LeftArrowIcon} alt="left-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="right-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <div className="horizontal-scrollbar-container">
    <div className="scrollable-content">
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 20px"
          style={{ display: "inline-block" }}
        >
          {bodyParts ? (
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </div>
  </div>
);

export default HorizontalScrollbar;
