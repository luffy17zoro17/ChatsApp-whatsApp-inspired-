import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';



const TransformYour = () => {
    return (
      <div className="flex justify-center">
        <div className="justify-center space-y-[5rem] pb-[3rem] 
         gap-[15vw] items-start w-[90%]
        md:flex md:px-11">
      <div className="md:w-[20rem]">
        <TextProp
          title={`Transform
          your business`}
          titleclassN={`font-medium text-[6vw] pb-5 
            md:text-[3rem]`}
          details={`ChatsApp Business helps you reach your customers 
          globally to deliver compelling experiences at scale. Showcase your 
          products and services, increase sales, and build relationships all with
           ChatsApp.`}

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
           isrc="https://images.pexels.com/photos/9461218/pexels-photo-9461218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           iht={900}
           iwd={900}
           ialt={`phone video call`}    
           iclassN={`object-contain rounded-xl 
           shadow-md shadow-black w-[20rem]`}      
           idivclassN={`flex justify-center`}  
        />
      </div> 
     </div>  
    );
}

export default TransformYour;