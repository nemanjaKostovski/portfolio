export default function Heading({ title }: { title?: string }) {
  return (
    <div className='rotate-[-12deg]'>
      <h2
        className='m-0 p-0 text-center text-6xl font-semibold leading-tight
              tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]' // Neon glow effect
        style={{
          fontFamily: 'Brush Script MT, cursive',
          textShadow:
            '0 0 10px rgba(255,105,180,0.9), 0 0 20px rgba(0,255,255,0.6)',
        }}
      >
        {title || (
          <>
            Nemanja
            <br />
            Kostovski
          </>
        )}
      </h2>

      {/* Handwritten Cursive Underline (Appears Bellow Title) */}
      <svg
        viewBox='0 0 200 20'
        className='mx-auto mt-2'
        width='200'
        height='20'
      >
        <path
          d='M10,15 Q30,30 190,5'
          stroke='rgba(255,105,180,0.9)'
          strokeWidth='4'
          fill='transparent'
          strokeLinecap='round'
          strokeLinejoin='round'
          style={{
            filter: 'drop-shadow(0px 0px 10px rgba(255,105,180,0.8))',
          }}
        />
      </svg>
    </div>
  );
}
