interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  isEager?: boolean;
}

export const UIImage = ({
  alt,
  width,
  height,
  src,
  isEager = false,
}: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={isEager ? 'eager' : 'lazy'}
    />
  );
};
