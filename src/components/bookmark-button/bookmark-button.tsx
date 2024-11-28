import clsx from 'clsx';

type BookmarkButtonProps = {
  isFavorite: boolean;
  element: string;
  width?: number;
  height?: number;
}

export default function BookmarkButton({
  isFavorite,
  element,
  width = 18,
  height = 19,
}: BookmarkButtonProps) {
  return (
    <button
      className={clsx(
        `${element}__bookmark-button`,
        isFavorite && `${element}__bookmark-button--active`,
        'button')}
      type="button"
    >
      <svg
        className={`${element}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{`${isFavorite ? 'From' : 'To'} bookmarks`}</span>
    </button>
  );
}
