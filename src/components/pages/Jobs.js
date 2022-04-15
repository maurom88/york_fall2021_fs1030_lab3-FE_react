import React, { useEffect, useState } from "react";

export default function Jobs() {
    useEffect(() => {
    const url = "http://localhost:5000/jobs";

    fetch(url, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => handleFetchError(err));

    function handleFetchError(err) {
      const error = document.createElement("p");
      error.textContent = `${err}`;
      console.log(error);
    }
  }, []);

  return <div>Jobs list</div>;
}
