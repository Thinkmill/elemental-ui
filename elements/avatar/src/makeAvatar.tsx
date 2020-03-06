/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ImgHTMLAttributes, ReactNode, useMemo, useState } from 'react';
import { ColorType, TintType, getColor, getInitials, hashCode } from './utils';

type Props = {
  /** Specify a color key. By default one is generated from the name. */
  color?: ColorType;
  /** Determines if Avatar has a disabled appearance. */
  disabled?: boolean;
  /** The name of the person the avatar represents. */
  name: string;
  /** Determines the size of the overall component. */
  size?: {
    small?: string,
    medium?: string,
    large?: string,
  }
  /** The src attribute of the image. If not available, initials are rendered instead.*/
  src?: string;
};

// Styled Components
// ------------------------------

type DiscProps = {
  children: ReactNode;
  color: TintType;
  size: number;
  title: string;
};
type InitialsProps = {
  children: ReactNode;
  fontSize: number;
  size: number;
};

const Disc = ({ color, size, ...props }: DiscProps) => (
  <div
    css={{
      backgroundColor: color.bg,
      borderRadius: '50%',
      color: color.fg,
      display: 'inline-flex',
      flexShrink: 0,
      height: size,
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      width: size,
    }}
    {...props}
  />
);

const Initials = ({ fontSize, size, ...props }: InitialsProps) => (
  <div
    css={{
      alignItems: 'center',
      display: 'flex',
      fontSize: fontSize,
      fontWeight: 500,
      justifyContent: 'center',
      lineHeight: 1,
      position: 'absolute',
      height: size,
      width: size,
      top: 0,
    }}
    {...props}
  />
);

const Image = ({ alt, src, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    alt={alt}
    src={src}
    css={{
      display: 'block',
      objectFit: 'cover',
      height: '100%',
      width: '100%',
    }}
    {...props}
  />
);

export default function makeAvatar ({ fontMap, sizeMap, colors: tintPacks }) {
  return ({
    color: colorKey,
    disabled = false,
    name,
    size = 'medium',
    src,
    ...props
  }: Props) => {
    const [imageFailed, setImageFailed] = useState(false);
    const initials = useMemo(() => getInitials(name), [name]);
    const hash = useMemo(() => hashCode(name), [name]);
  
    const handleError = () => {
      setImageFailed(true);
    };
  
    const colorValue = useMemo(() => getColor(hash, colorKey, tintPacks), [colorKey, hash]);
    const fontValue = fontMap[size];
    const sizeValue = sizeMap[size];
    const imageIsUnavailable = !src || imageFailed;
  
    return (
      <Disc color={colorValue} size={sizeValue} title={name} {...props}>
        {imageIsUnavailable ? (
          <Initials fontSize={fontValue} size={sizeValue}>
            {initials}
          </Initials>
        ) : (
          <Image src={src} alt={`Avatar for ${name}`} onError={handleError} />
        )}
      </Disc>
    );
  };
}