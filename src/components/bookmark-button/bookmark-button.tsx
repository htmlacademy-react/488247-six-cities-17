import clsx from 'clsx';

type BookmarkButtonProps = {
  isFavorite: boolean;
  prefix: string;
  width?: number;
  height?: number;
}

export default function BookmarkButton({
  isFavorite,
  prefix,
  width = 18,
  height = 19,
}: BookmarkButtonProps) {
  return (
    <button
      className={clsx(
        `${prefix}__bookmark-button`,
        {[`${prefix}__bookmark-button--active`]: isFavorite},
        'button')}
      type="button"
    >
      <svg
        className={`${prefix}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{`${isFavorite ? 'From' : 'To'} bookmarks`}</span>
    </button>
  );
}
