interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  isLazy?: 'lazy' | 'eager';
}

export const UIImage = ({
  alt,
  width,
  height,
  src,
  isLazy = 'eager',
}: Props) => {
  return (
    <img src={src} alt={alt} width={width} height={height} loading={isLazy} />
  );
};
