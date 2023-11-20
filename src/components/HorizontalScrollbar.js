import React from "react";
import { Box } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

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
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </div>
  </div>
);

export default HorizontalScrollbar;
