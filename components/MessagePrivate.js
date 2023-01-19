import IconProp from "./props/IconProp";
import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import WithPrivate from "./WithPrivate";
import NeverMiss from "./NeverMiss";




const MessagePrivate = () => {
    return (
      <div>
      <div className="flex justify-center relative">
        <ImageProp
           idivclassN={"px-5"}
           iclassN={`object-contain     
           rounded-r-full shadow-lg shadow-black
           lg:px-0 lg:object-cover lg:h-[50rem]`}
           isrc={`https://images.unsplash.com/photo-1508205065970-cad01cebebb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80`}
           iht={1700}
           iwd={1700}
           ialt={"two women hugging"}
        />

        <div className="absolute p-4 top-[11vw] left-[12vw] w-[60vw]">
        <TextProp
           title={`Message Privately`}
           titleclassN={`relative font-medium
            text-[4vw] z-10 pl-4`}
           details={`Simple, reliable, private messaging
            and calling for free*, available all over the world.`} 
           detailclassN={`pl-4 relative z-10 text-black 
            text-[3vw] py-5 md:text-[1.3rem] 
            lg:text-[1.6rem]`}  
        />
         <div className="bg-white opacity-70
         top-0 z-0 w-full h-full absolute rounded-lg"/>

            <div className='border flex items-center shadow-inner shadow-black
               ml-4 relative z-10 p-2 pl-3 gap-[1vw] border-r-[1rem] w-[9rem]
               rounded-full bg-violet-400 hover:text-cyan-600 cursor-pointer
                md:w-[10rem]'>
             <TextProp
               title={"Download"}
             />
             <IconProp
               icon={<DownloadForOfflineIcon/>}
             />
             </div>
        </div>
        
         
        
      </div>  
       <WithPrivate/>
       <NeverMiss/>
       </div>
    ); 
}

export default MessagePrivate;