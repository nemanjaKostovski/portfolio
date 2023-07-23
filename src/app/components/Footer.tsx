export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <div className='flex w-9/12 justify-center border-t'>
      <div className='h-10'></div>
      <p> Nemanja Kostovski, All Rights Reserved `&copy;` {year} </p>
    </div>
  );
}
