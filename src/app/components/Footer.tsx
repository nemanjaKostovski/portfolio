export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <div className='flex justify-center border-t w-9/12'>
      <div className='h-10'></div>
      <p> Nemanja Kostovski, All Rights Reserved &copy; {year} </p>
    </div>
  );
}
