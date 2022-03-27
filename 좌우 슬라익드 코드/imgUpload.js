import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import style from "../../styles/css/postImage.module.css";

const FormUploadTwo = ({ images, setPhotoToAddList }) => {
  const [imageCurrentNo, setImageCurrentNo] = useState(0);
  const [curPos, setCurPos] = useState(0);
  const [startX, setStartX] = useState();
  const [endX, setEndX] = useState();

  const onClickLeft = useCallback(() => {
    if (imageCurrentNo > 0) {
      setImageCurrentNo((prev) => prev - 1);
    }
  }, [imageCurrentNo, images]);

  const onClickRight = useCallback(() => {
    if (imageCurrentNo < images.length - 1) {
      setImageCurrentNo((prev) => prev + 1);
    }
  }, [imageCurrentNo, images]);

  const Prev = useCallback(() => {
    if (curPos > 0) {
      if (imageCurrentNo >= 0) {
        setImageCurrentNo((prev) => prev - 1);
        setCurPos((prev) => prev - 1);
      }
    }
  }, [imageCurrentNo, curPos, images]);

  const Next = useCallback(() => {
    if (curPos < 10) {
      if (imageCurrentNo < images.length - 1) {
        setImageCurrentNo((prev) => prev + 1);
        setCurPos((prev) => prev + 1);
      }
    }
  }, [imageCurrentNo, curPos, images]);

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
    [imageCurrentNo, curPos, images, startX, endX]
  );

  const onRemove = useCallback(
    (deleteUrl) => {
      setPhotoToAddList(images.filter((v) => v.url !== deleteUrl));
      if (imageCurrentNo === 0) {
        return;
      }

      if (imageCurrentNo + 1 === images.length) {
        setImageCurrentNo((prev) => prev - 1);
      }
    },
    [images, imageCurrentNo]
  );

  return (
    <>
      <div className={style.imageBox} onTouchStart={touchStart} onTouchEnd={touchEnd}>
        {imageCurrentNo >= 1 && (
          <div className={style.left} onClick={onClickLeft}>
            <img src="/icon/left.png" alt="LeftIcon" />
          </div>
        )}
        {imageCurrentNo < images.length - 1 && (
          <div className={style.right} onClick={onClickRight}>
            <img src="/icon/right.png" alt="RightIcon" />
          </div>
        )}

        {images.map((v) => (
          <div className={style.imageInnerBox} key={v.url}>
            <div
              style={{
                transform: `translate3d(-${imageCurrentNo * 100}%, 0%, 0px)`,
                transition: "all .4s",
              }}
            >
              <p className={style.remove} onClick={() => onRemove(v.url)}>
                x
              </p>
            </div>
            <img
              src={v.url}
              style={{
                transform: `translate3d(-${imageCurrentNo * 100}%, -50%, 0px)`,
                transition: "all .4s",
              }}
              alt="PostImg"
            />
          </div>
        ))}

        {images.length < 1 ? null : <span>{`${imageCurrentNo + 1} / ${images.length}`}</span>}
      </div>
    </>
  );
};

FormUploadTwo.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default FormUploadTwo;
