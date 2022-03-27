import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import style from '../../styles/css/upload.module.css';

const UploadImages = ({ photoToAddList, imageInput, setPhotoToAddList }) => {
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput?.current]);

  const onRemove = useCallback(
    (deleteUrl) => {
      setPhotoToAddList(photoToAddList.filter((v) => v.url !== deleteUrl));
    },
    [photoToAddList],
  );
  return (
    <>
      {photoToAddList
        ? photoToAddList.map((v) => {
            return (
              <li key={v.url}>
                <div className={style.remove} onClick={() => onRemove(v.url)}>
                  x
                </div>
                <img
                  src={v.url}
                  style={{
                    backgroundImage: `url(${v.url})`,
                  }}
                  alt="uploadImg"
                />
              </li>
            );
          })
        : null}

      <li onClick={onClickImageUpload}>
        <div className={style.imageInput}>
          <img
            src="/icon/addphoto.svg"
            className={style.addImg}
            alt="addPhotoIcon"
          />
        </div>
      </li>
    </>
  );
};

UploadImages.propTypes = {
  photoToAddList: PropTypes.array,
  imageInput: PropTypes.object,
  setPhotoToAddList: PropTypes.func,
};

export default UploadImages;
