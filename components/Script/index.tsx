import ScriptTemp from 'next/script';
 
export default function Script() {
  return (
    <>
        <ScriptTemp src="/js/plugins/jquery-3.6.0.min.js" />
        <ScriptTemp src="/js/plugins/isotope.pkg.min.js" />
        <ScriptTemp src="/js/plugins/jquery.slick.min.js" />
        <ScriptTemp src="/js/plugins/lightgallery.min.js" />
        <ScriptTemp src="/js/plugins/jquery.counter.min.js" />
        <ScriptTemp src="/js/plugins/wow.min.js" />
        <ScriptTemp src="/js/main.js" />
    </>
  );
}