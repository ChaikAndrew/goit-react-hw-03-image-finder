import s from '../LoadMore/LoadMore.module.css';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <div className={s.loadMore}>
      <button onClick={onLoadMore} className={s.loadMore_btn}>
        Load more
      </button>
    </div>
  );
};
