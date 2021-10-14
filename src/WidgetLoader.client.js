import React,{useState,useEffect, useRef, useMemo} from "react";
import Components from "../componentIndex";
import Loader from "./shell/Loader";
import {useLocation} from './LocationContext.client';

    
const WidgetLoader = (props) => {
    return(
        <h1>From Widget Loader</h1>
    )
    }
//     const [, setLocation] = useLocation();
//     const pageBreakRef = useRef(null);
//     const [isVisible, setIsVisible] = useState(false)
//     const [isLoading, setIsLoading] = useState(false)

//     const handleIntersect = entries => {
//         const[entry] = entries;
//         setIsVisible(entry.isIntersecting);
//     }
 
//     const options = useMemo(()=> {
//       return {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0
//       }
//     },[]);

//     useEffect(() => {
//       const observer = new IntersectionObserver(handleIntersect, options);
//       if(pageBreakRef.current)observer.observe(pageBreakRef.current);
//       return() => {
//         if(pageBreakRef.current)observer.unobserve(pageBreakRef.current);
//       }
        
//     },[pageBreakRef.current,options])

//     useEffect(()=>{
//       if(props.hasMorePages && isVisible){
//         setLocation((loc) => ({
//             pageNo: loc
//         }));
//       }
//     }, [props.hasMorePages, isVisible])

//     useEffect(()=>
//     {
//       setIsLoading(true)
//       fetch(`http://localhost:3000/api/${props.page}/${pageNo}`)
//       .then(data=>data.json())
//       .then(data=>{
//         if(data['priceData'])
//           setPagePriceDetails(data["priceData"])
//         setSlots((prev)=>[...prev, ...data['slots']])
//         setHasMorePages(data['hasMorePages'])
//         setIsLoading(false)
//       setIsVisible(false);
//       })
//     }
//     , [pageNo])



//   if (slots.length === 0) return (
//     <div style={{marginTop:'40vh'}}>
//       <Loader isBottom={false}/>
//     </div>
//   )

//   return (
//     <>
//         {props.slots.map((slot, i) => {
//           let WidgetName = Components[slot.widget.type];
//           return (
//             <div key={i}>
//               {slot.widget.type !== "PRODUCT_PAGE_SUMMARY" &&
//                 Components.hasOwnProperty(slot.widget.type) && (
//                   <WidgetName widgetData={slot} />
//                 )}
//               {slot.widget.type === "PRODUCT_PAGE_SUMMARY" && (
//                 <WidgetName widgetData={slot} priceDetails={props.pagePriceDetails} />
//               )}
//             </div>
//           );
//         })}
//         <div ref={pageBreakRef} style={{backgroundColor:'rgb(240,243,246)',height:'5px'}} className='page-break'/>
//         {isLoading && pageNo>1 && <Loader isBottom={true}/>}
//     </>
//   );
// };

export default WidgetLoader;
