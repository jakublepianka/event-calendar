export function Calendar({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthLength = new Date(year, month + 1, 0).getDate();

  return (
    <>
    {Array.from({ length: monthLength }).map((day, index) => { 
      const dayNum = index + 1;
      return <div key={dayNum}>{dayNum}</div>;
    })}
    </>
  )
}