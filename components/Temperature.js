import React, { useEffect, useState } from "react";
import axios from "axios";

const Temperature = ({ weather, area }) => {
  return (
    <div>
      {
        (area,
        weather ? (
          <>
            {area}, {weather}
          </>
        ) : (
          <>날씨를 불러오고 있습니다..</>
        ))
      }
    </div>
  );
};

export default Temperature;
