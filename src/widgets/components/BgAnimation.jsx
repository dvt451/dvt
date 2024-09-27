
export default function BgAnimation({children}) {
  return (
   <div className='running-line'>
      <div className="running-line__wrapper">
         {children}
      </div>
      <div className="running-line__wrapper">
         {children}
      </div>
   </div>
  )
}