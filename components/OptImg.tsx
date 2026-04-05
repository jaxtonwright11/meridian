'use client';

interface OptImgProps {
  desktop: string;
  mobile: string;
  alt: string;
  loading?: 'eager' | 'lazy';
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Responsive image component that serves mobile-sized WebP on small screens
 * and desktop-sized WebP on larger screens via srcSet + sizes.
 */
export function OptImg({ desktop, mobile, alt, loading = 'lazy', className, style }: OptImgProps) {
  return (
    <img
      src={desktop}
      srcSet={`${mobile} 600w, ${desktop} 1200w`}
      sizes="(max-width: 768px) 600px, 1200px"
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      style={style}
    />
  );
}
