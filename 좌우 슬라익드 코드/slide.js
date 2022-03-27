/* eslint-disable no-const-assign */
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import style from "../../styles/css/postImage.module.css";
import { baseURL } from "../../config/config";

const PostImages = ({ images }) => {
  const [imageCuurrentNo, setImageCuurrentNo] = useState(0);
  const [curPos, setCurPos] = useState(0);
  const [startX, setStartX] = useState();
  const [endX, setEndX] = useState();

  const onClickLeft = useCallback(() => {
    if (imageCuurrentNo > 0) {
      setImageCuurrentNo((prev) => prev - 1);
    }
  }, [imageCuurrentNo]);

  const onClickRight = useCallback(() => {
    if (imageCuurrentNo < images.length - 1) {
      setImageCuurrentNo((prev) => prev + 1);
    }
  }, [imageCuurrentNo]);

  const Prev = useCallback(() => {
    if (curPos > 0) {
      if (imageCuurrentNo > 0) {
        setImageCuurrentNo((prev) => prev - 1);
        setCurPos((prev) => prev - 1);
      }
    }
  }, [imageCuurrentNo]);

  const Next = useCallback(() => {
    if (curPos < 10) {
      if (imageCuurrentNo < images.length - 1) {
        setImageCuurrentNo((prev) => prev + 1);
        setCurPos((prev) => prev + 1);
      }
    }
  }, [imageCuurrentNo]);

  const touchStart = useCallback(
    (event) => {
      setStartX(event.touches[0].pageX);
    },
    [startX]
  );

  const touchEnd = useCallback(
    (event) => {
      setEndX(event.changedTouches[0].pageX);
      if (startX === endX || Math.abs(startX - endX) < 30 || Math.abs(endX - startX) < 30) {
        return;
      }
      if (startX > endX) {
        Next();
      } else {
        Prev();
      }
    },
    [startX, endX]
  );

  return (
    <>
      <div className={style.imageBox} onTouchStart={touchStart} onTouchEnd={touchEnd}>
        {imageCuurrentNo >= 1 && (
          <div className={style.left} onClick={onClickLeft}>
            <img src="/icon/left.png" alt="LeftIcon" />
          </div>
        )}

        {imageCuurrentNo < images.length - 1 && (
          <div className={style.right} onClick={onClickRight}>
            <img src="/icon/right.png" alt="RightIcon" />
          </div>
        )}

        {images.map((v) => (
          <div className={style.imageInnerBox} key={v?.bo_img_location}>
            <img
              src={`${baseURL}/${v.bo_img_location}`}
              style={{
                transform: `translate3d(-${imageCuurrentNo * 100}%, -50%, 0px)`,
                transition: "all .4s",
              }}
              alt="PostImg"
            />
          </div>
        ))}
        {images.length === 1 ? null : <span>{`${imageCuurrentNo + 1} / ${images.length}`}</span>}
      </div>
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
