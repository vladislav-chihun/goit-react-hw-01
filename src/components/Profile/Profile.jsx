import css from "./Profile.module.css"
export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    return <div className={css.container}>
        <div className={css.profile}>
            <img
                className={css.profileAvatar}
                src={image}
                alt="User avatar"
            />
            <p className={css.name}>{name}</p>
            <p className={css.profileText}>@{tag}</p>
            <p className={css.profileText}>{location}</p>
        </div>

        <ul className={css.profileList}>
            <li className={css.profileElement}>
                <span>Followers</span>
                <span className={css.stats}>{followers}</span>
            </li>
            <li className={css.profileElement}>
                <span>Views</span>
                <span className={css.stats}>{views}</span>
            </li>
            <li className={css.profileElement}>
                <span>Likes</span>
                <span className={css.stats}>{likes}</span>
            </li>
        </ul>
    </div>;
}
