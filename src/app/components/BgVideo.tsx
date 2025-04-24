export default function BgVideo({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative h-[105vh] w-full overflow-hidden text-white'>
      {/* Background Video */}

      {children}
      <video
        className='absolute left-0 top-0 z-0 h-full w-full object-cover'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/vaporware.mp4' type='video/mp4' />
      </video>
    </div>
  );
}
