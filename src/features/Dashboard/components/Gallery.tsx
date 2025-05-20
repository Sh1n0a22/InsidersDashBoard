import { useEffect, useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { getUserImg } from "../servises/getUserImg";


const Gallery = () => {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    getUserImg().then(setUrls);
  }, []);

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {urls.map((url, i) => (
        <ImageListItem key={i}>
          <img src={url} alt={`img-${i}`} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Gallery;
