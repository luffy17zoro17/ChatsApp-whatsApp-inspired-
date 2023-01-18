


import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const SpeakFreely = () => {
    return (
          <div className="flex justify-center w-full bg-blue-800">
          <div className="py-[7rem] md:py-[9rem] space-y-[5rem]
            text-white justify-center gap-[15vw] w-[90%]
            md:flex md:px-11 md:flex-row-reverse md:space-y-0">
          <div className="md:w-[20rem]">
            <TextProp
              title={`Speak freely`}
              titleclassN={`text-[6vw] pb-5 md:text-[3rem]`}
              details={`With end-to-end encryption, your personal messages and
               calls are secured. Only you and the person youre talking to can 
               read or listen to them, and nobody in between, not even ChatsApp`}

              detailclassN={`py-8 text-[3.4vw]
              md:text-[2rem]`}  
              tdivclassN={`flex flex-col items-center justify-center`}  
            />
            <div className="flex justify-center underline underline-offset-[0.4rem]
             text-[3.4vw] gap-4 pb-8 decoration-red-500
              md:text-[2rem] md:underline-offset-[0.8rem]-">Learn more 
              <IconProp icon={<DoubleArrowIcon className="md:text-[2.5rem]"/>}/>
            </div>
            </div>
            <ImageProp
               isrc="https://cdn.pixabay.com/photo/2016/03/31/17/58/computer-1294045_960_720.png"
               iht={900}
               iwd={900}
               ialt={`phone video call`}    
               iclassN={`object-contain shadow-lg shadow-black
                rounded-xl w-[20rem]`}      
               idivclassN={`flex justify-center`}  
            />
          </div>
          </div>
      
    );
}

export default SpeakFreely;