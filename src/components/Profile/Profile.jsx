import css from "./Profile.module.css"
export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    return <div className={css.container}>
        <div className={css.profile}>
            <img
                src={image}
                alt="User avatar"
            />
            <p className={css.name}>{name}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>

        <ul>
            <li>
                <span>Followers</span>
                <span className={css.stats}>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span className={css.stats}>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span className={css.stats}>{likes}</span>
            </li>
        </ul>
    </div>;
}
