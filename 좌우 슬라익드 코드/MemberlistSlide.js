import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import style from "../../styles/css/memberlist.module.css";
import { baseURL } from "../../config/config";
import { USER_POST_AND_SAVE_POST_GET_REQUEST } from "../../reducers/userPost";

const MemberList = () => {
  const dispatch = useDispatch();
  const { memberList } = useSelector((state) => state.postMainAction);
  const { me } = useSelector((state) => state.userInfo);
  const [curPos, setCurPos] = useState(0);
  const [windowScreenWidth, setWindowScreenWidth] = useState();
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowScreenWidth(window.screen.width);
    }

    if (curPos > (memberList.length - 1) * 80 - windowScreenWidth) {
      setCurPos((memberList.length - 1) * 80 - windowScreenWidth);
    }

    if (curPos + Math.floor(startX - endX) < 0) {
      setCurPos(0);
    }
  }, [window, curPos]);

  const touchStart = useCallback(
    (event) => {
      setStartX(event.touches[0].pageX);
    },
    [startX]
  );

  const touchEnd = useCallback(
    async (event) => {
      setEndX(await event.changedTouches[0].pageX);

      if (startX === 0 || endX === 0) {
        return;
      }

      if (curPos > (memberList.length - 1) * 80 - windowScreenWidth) {
        setCurPos((memberList.length - 1) * 80 - windowScreenWidth);

        return;
      }

      if (curPos + Math.floor(startX - endX) > (memberList.length - 1) * 80 - windowScreenWidth) {
        if (windowScreenWidth > 968) {
          setCurPos(memberList.length * 80 - windowScreenWidth);

          return;
        }
        setCurPos((memberList.length - 1) * 80 - windowScreenWidth);

        return;
      }

      setCurPos((prev) => prev + Math.floor(startX - endX) * 3);
    },
    [curPos, windowScreenWidth, memberList, startX, endX]
  );

  const onClickRight = useCallback(() => {
    if (curPos > (memberList.length - 1) * 80 - 935) {
      setCurPos((memberList.length - 1) * 80 - 935);
      return;
    }
    setCurPos((prev) => prev + 240);
  }, [curPos]);

  const onClickLeft = useCallback(() => {
    if (curPos < 239) {
      setCurPos(0);
      return;
    }
    setCurPos((prev) => prev - 240);
  }, [curPos]);

  const getUserPost = useCallback((userId) => {
    dispatch({
      type: USER_POST_AND_SAVE_POST_GET_REQUEST,
      data: { mem_id: userId },
    });
  }, []);

  return (
    <>
      <div className={style.memberlistInnerBox}>
        <p className={style.hessedMemberNumber}>HESSED FAMILY {memberList.length}명</p>

        <ul
          className={style.memberlist}
          style={{
            left: `-${curPos}px`,
          }}
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
        >
          {memberList.map((v) => {
            if (me.id === v.memberListId) {
              return;
            }
            return (
              <li key={v.memberListId} onClick={() => getUserPost(v.memberListId)}>
                <div className={style.memberListImg}>
                  {v.memberListprofileImg ? (
                    <Link href={`/user/${v.memberListId}`}>
                      <a>
                        <img src={`${baseURL}${v.memberListprofileImg}`} alt="memberImg" />
                      </a>
                    </Link>
                  ) : (
                    <Link href={`/user/${v.memberListId}`}>
                      <a>
                        <img src="/icon/profileBasic.svg" alt="profileImg" />
                      </a>
                    </Link>
                  )}
                </div>

                <p>{v.memberListNickname}</p>
              </li>
            );
          })}
        </ul>

        {windowScreenWidth < 1025 ? null : (
          <div>
            {curPos < (memberList.length - 1) * 80 - 935 && windowScreenWidth < 1025 && (
              <div className={style.right} onClick={onClickRight}>
                <img src="/icon/right.png" alt="RightIcon" />
              </div>
            )}

            {curPos > 240 && windowScreenWidth < 1025 && (
              <div className={style.left} onClick={onClickLeft}>
                <img src="/icon/left.png" alt="LeftIcon" />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MemberList;
