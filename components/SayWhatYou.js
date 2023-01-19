import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';




const SayWhatYou = () => {
    return (
      <div className="flex justify-center">
        <div className="justify-center w-[90%]
        space-y-[5rem] pb-[3rem] gap-[15vw] items-start 
        md:flex md:px-11 md:flex-row-reverse">
      <div className="md:w-[20rem]">
        <TextProp
          title={`Say what
          you feel`}
          titleclassN={`font-medium text-[6vw] pb-5 md:text-[3rem]`}
          details={`Express yourself without words. Use stickers and GIFs or 
          share everyday moments on Status. Record a voice message for a quick 
          hello or a longer story.`}

          detailclassN={`py-8 text-[3.4vw]
          md:text-[2rem]`}  
          tdivclassN={`flex flex-col items-center justify-center`}  
        />
        <div className="flex justify-center underline underline-offset-[0.7vw]
         text-[3.4vw] gap-2 pb-8 decoration-red-500 decoration-[0.2rem]
          md:text-[2rem] md:gap-4">Learn more 
          <IconProp icon={<DoubleArrowIcon className="md:text-[2.5rem]"/>}/></div>
        </div>
        <ImageProp
           isrc="https://cdn.pixabay.com/photo/2019/10/25/11/03/halloween-4576764_960_720.png"
           iht={900}
           iwd={900}
           ialt={`phone video call`}    
           iclassN={`object-contain rounded-xl 
            shadow-lg shadow-black w-[20rem]`}      
           idivclassN={`flex justify-center`}  
        />
      </div>
      </div>
    );
}

export default SayWhatYou;