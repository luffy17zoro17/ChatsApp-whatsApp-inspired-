import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';




const SayWhatYou = () => {
    return (
        <div className="justify-center space-y-[5rem] pb-[3rem] gap-[15vw] items-start 
        md:flex md:px-11 md:flex-row-reverse">
      <div>
        <TextProp
          title={`Say what
          you feel`}
          titleclassN={`text-[6vw] pb-5 w-[27rem] md:w-[22rem] md:text-[3rem]`}
          details={`Express yourself without words. Use stickers and GIFs or 
          share everyday moments on Status. Record a voice message for a quick 
          hello or a longer story.`}

          detailclassN={`py-8 text-[3.4vw] w-[27rem] md:w-[22rem] 
          md:text-[2rem]`}  
          tdivclassN={`flex flex-col items-center justify-center`}  
        />
        <div className="flex justify-center underline underline-offset-[0.4rem]
         text-[3.4vw] gap-4 pb-8 decoration-red-500
          md:text-[2rem] md:underline-offset-[0.8rem]-">Learn more 
          <IconProp icon={<DoubleArrowIcon className="md:text-[2.5rem]"/>}/></div>
        </div>
        <ImageProp
           isrc="https://cdn.pixabay.com/photo/2019/10/25/11/03/halloween-4576764_960_720.png"
           iht={900}
           iwd={900}
           ialt={`phone video call`}    
           iclassN={`object-contain w-[70%] rounded-xl 
            shadow-lg shadow-black md:w-[20rem]`}      
           idivclassN={`flex justify-center`}  
        />
      </div>
    );
}

export default SayWhatYou;