import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const NeverMiss = () => {
    return (
        <div className="flex justify-center">
          <div className="justify-center space-y-[5rem] pb-[7rem] gap-[15vw] 
            w-[90%] items-start 
            md:flex md:px-11">
          <div className="md:w-[20rem]">
            <TextProp
              title={`Never miss a moment with voice and video calls`}
              titleclassN={`text-[6vw] pb-5 md:text-[3rem]`}
              details={`From a group call to classmates to a 
                 quick call with mom, feels like youre in the same
                  room with voice and video calls.`}

              detailclassN={`py-8 text-[3.4vw]
              md:text-[2rem]`}  
              tdivclassN={`flex flex-col items-center justify-center`}  
            />
            <div className="flex justify-center underline underline-offset-[0.4rem]
             text-[3.4vw] gap-4 pb-8 decoration-red-500
              md:text-[2rem] md:underline-offset-[0.8rem]-">Learn more 
              <IconProp icon={<DoubleArrowIcon className="md:text-[2.5rem]"/>}/></div>
            </div>
            <ImageProp
               isrc="https://images.pexels.com/photos/5876452/pexels-photo-5876452.jpeg?auto=compress&cs=tinysrgb&w=1600"
               iht={900}
               iwd={900}
               ialt={`phone video call`}    
               iclassN={`object-contain 
                shadow-lg shadow-black rounded-xl w-[20rem]`}      
               idivclassN={`flex justify-center`}  
            />
          </div>
         </div> 
       
    );
}

export default NeverMiss;