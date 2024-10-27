
export default  function HeadContext({t}) {
   const text1 = t('HeadContext.text1').split(' ');
   const text2 = t('HeadContext.text2').split('');
   const text3 = t('HeadContext.text3').split('');
   const highLitedText = t('HeadContext.highLitedText').split('');
   const subText = t('HeadContext.subText').split(' ');
  return (
   <div className="head__context head-context">
   <p><span className='head-context__name'>
         {
           text1.map((letter, i) => (
             <span className="hover-anim__letter" key={i}>
               <span>{letter + '\u00A0'}</span>
               <span>{letter + '\u00A0'}</span>
             </span>
           ))
         }<span className='finger'>✌🏻</span><span className='head-context__name_stick'></span></span></p>
   <h1 className="head-context__title">
      <div className='head-context__title_top hover-anim'>
        <div className='hover-anim__row'>
         {
           text2.map((letter, i) => (
             <span className="hover-anim__letter" key={i}>
               <span>{letter === ' ' ? '\u00A0' : letter}</span>
               <span>{letter === ' ' ? '\u00A0' : letter}</span>
             </span>
           ))
         }
        </div>
        <div className='hover-anim__row'>
         {
           text3.map((letter, i) => (
             <span className="hover-anim__letter" key={i}>
               <span>{letter === ' ' ? '\u00A0' : letter}</span>
               <span>{letter === ' ' ? '\u00A0' : letter}</span>
             </span>
           ))
         }
        </div>
      </div>
   <p className='head__highlited-text'><span>
         {
           highLitedText.map((letter, i) => (
             <span className="hover-anim__letter" key={i}>
               <span>{letter === ' ' ? '\u00A0' : letter}</span>
               <span>{letter === ' ' ? '\u00A0' : letter}</span>
             </span>
           ))
         }
      </span></p>
   </h1>
   <p className='head-context__sub-title'>
   {
           subText.map((letter, i) => (
             <span className="hover-anim__letter" key={i}>
               <span>{letter + '\u00A0'}</span>
               <span>{letter + '\u00A0'}</span>
             </span>
           ))
         }
   </p>
</div>
  )
}
