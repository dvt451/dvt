
export default function HeadContext() {
   const text1 = `Hi there, I'm Davit`.split(' ');
   const text2 = `Animated`.split('');
   const text3 = `Websites with`.split('');
   const highLitedText = "React and Next.js".split('');
   const subText = "I am a software engineer with more than four years of experience. recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget.".split(' ');
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
