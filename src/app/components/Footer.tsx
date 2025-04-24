export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <div className='pt-4 flex h-20 justify-center border-t w-full text-xl md:text-4xl text-center'>
      <p
        style={{
          fontFamily: 'Brush Script MT, cursive',
          textShadow:
            '0 0 10px rgba(255,105,180,0.9), 0 0 20px rgba(0,255,255,0.6)',
        }}
      >
        Nemanja Kostovski, All Rights Reserved &copy; {year}
      </p>
    </div>
  );
}
