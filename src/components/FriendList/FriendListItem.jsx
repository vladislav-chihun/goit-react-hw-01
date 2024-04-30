import clsx from "clsx";
import css from "./FriendList.module.css"


export default function FriendListItem({
    friend:{avatar, name, isOnline}
  }) {
    return (
        <div className={css.friendCard}>   
            <img  src={avatar} alt="Avatar" width="48" />          
            <p >{name}</p>
        <p>{isOnline === true ? "Online" & {css.online}:"Offline"}</p>
        </div>
    );
  }