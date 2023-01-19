


import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


const SpeakFreely = () => {
    return (
          <div className="flex justify-center w-full 
          bg-gradient-to-r from-indigo-800 via-blue-700 to-indigo-900">
          <div className="py-[7rem] md:py-[9rem] space-y-[5rem]
            text-white justify-center gap-[15vw] w-[90%]
            md:flex md:px-11 md:flex-row-reverse md:space-y-0">
          <div className="md:w-[20rem]">
            <TextProp
              title={`Speak freely`}
              titleclassN={`font-medium text-[6vw] pb-5 md:text-[3rem]`}
              details={`With end-to-end encryption, your personal messages and
               calls are secured. Only you and the person youre talking to can 
               read or listen to them, and nobody in between, not even ChatsApp`}

              detailclassN={`py-8 text-[3.4vw]
              md:text-[2rem]`}  
              tdivclassN={`flex flex-col items-center justify-center`}  
            />
            <div className="flex justify-center underline underline-offset-[0.7vw]
              decoration-[0.2rem]
             text-[3.4vw] gap-2 pb-8 decoration-red-500
              md:text-[2rem] md:gap-4">Learn more 
              <IconProp icon={<DoubleArrowIcon className="md:text-[2.5rem]"/>}/>
            </div>
            </div>
            <ImageProp
               isrc="https://cdn.pixabay.com/photo/2016/03/31/17/58/computer-1294045_960_720.png"
               iht={900}
               iwd={900}
               ialt={`phone video call`}    
               iclassN={`object-contain shadow-lg shadow-black
               bg-gradient-to-r from-gray-500 via-gray-200 to-gray-400
                rounded-xl bg-gray-400 w-[20rem]`}      
               idivclassN={`flex justify-center`}  
            />
          </div>
          </div>
      
    );
}

export default SpeakFreely;