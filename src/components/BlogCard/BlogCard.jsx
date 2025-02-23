import { formatDistanceToNow } from "date-fns";
import styles from './BlogCard.module.css'
import { formatDateNow } from "../../helpers/formatDataToNow";

const BlogCard = ({
  tag,
  poster,
  title,
  descriprtion,
  userName,
  avatar,
  postedAt,
}) => {
  return (
    <div className={styles.card}>
  <div className={styles.cardHeader}>
    <img
      className={styles.cardPoster}
      src={poster}
      alt={tag}
    />
  </div>
  <div className={styles.cardBody}>
    <span className={styles.tag}>{tag}</span>
    <h2 className={styles.cardTitle}>What's new in 2022 Tech</h2>
        <p className={styles.cardText}>{descriprtion}</p>
  </div>
  <div className={styles.cardFooter}>
    <div className={styles.userBox}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={userName}
      />
      <div>
        <h3 className={styles.userName}>{userName}</h3>
            <small className={styles.date}>{formatDateNow(postedAt)}</small>
      </div>
    </div>
  </div>
</div>
  );
};
export default BlogCard;
