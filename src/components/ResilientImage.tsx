import {useState} from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  loading = 'lazy',
  fallbackLabel,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFEAE5] via-[#E5DCE0] to-[#DFD4CC] text-[#29232C] p-6 text-center ${containerClassName}`}
      >
        <span className="font-serif text-lg tracking-wide text-[#29232C]">
          {fallbackLabel || 'Tracey Ager Aesthetics'}
        </span>
        <span className="mt-1 text-xs text-[#292729]/70 max-w-xs">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
