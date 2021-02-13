import React, { useEffect, useState } from "react";
import { Dialog } from "@material-ui/core";
import ReactPlayer from "react-player";
import { getVideo } from "../../handler/handler";

const VideoPlayer = ({ open, onClose, data }) => {
  const [url, setUrl] = useState([]);
  useEffect(() => {
    const getUrl = async (param) => {
      const res = await getVideo(param);
      const urls = await res.data.results
        .filter((itm) => itm.site === "YouTube")
        .map((url) => {
          return `https://www.youtube.com/watch?v=${url.key}`;
        });
      setUrl(urls);
    };

    getUrl(data);
  }, [data]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth={false}>
      <ReactPlayer
        height={"550px"}
        width={"950px"}
        style={{ padding: 2.5 }}
        url={url}
        controls
      />
    </Dialog>
  );
};

export default VideoPlayer;
