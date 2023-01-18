import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';




const KeepInTouch = () => {
    return(
          <div className="flex justify-center">
          <div className="justify-center space-y-[5rem] pb-[3rem] gap-[15vw] items-start 
            w-[90%] md:flex md:px-11">
          <div className="md:w-[20rem]">
            <TextProp
              title={`Keep in touch
              with your groups`}
              titleclassN={`text-[6vw] pb-5 md:text-[3rem]`}
              details={`Whether it's planning an outing with friends or simply staying
               on top of your family chats, group conversations should feel effortless.`}

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
               isrc="https://cdn.pixabay.com/photo/2020/10/04/03/48/phone-5625119_960_720.png"
               iht={900}
               iwd={900}
               ialt={`phone video call`}    
               iclassN={`object-contain w-[70%] rounded-xl shadow-lg shadow-black w-[20rem]`}      
               idivclassN={`flex justify-center`}  
            />
          </div>
          </div>
       
    );
}

export default KeepInTouch;