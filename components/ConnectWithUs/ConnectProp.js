import IconProp from "../props/IconProp";
import TextProp from "../props/TextProp";

import CallIcon from '@mui/icons-material/Call';




const ConnectProp = ({title,details}) => {
    return (
        <div className="bg-white relative rounded-r-full 
        w-[59vw] py-3 shadow-inner shadow-black
        px-[8vw] mt-[7rem] border-r-[1rem]
         xl:w-[37vw]">

        <div className='flex items-center gap-4 
          text-xl text-violet-500 font-bold'>
          <IconProp 
            icon={<CallIcon/>} 
            icoclassN="border-l-[1rem] shadow shadow-black 
                rounded-l-full border-violet-500 p-2 scale-[0.5]
                          text-violet-600 border-y-[0.6rem]" 
          />
          
        </div>  
           <TextProp
              title={title}
              titleclassN={`pb-5 text-[4.3vw] md:text-[2rem]`}
              details={details}
              detailclassN={`pb-8
                 `} 
           />
           <h2 className="py-2 mb-6 shadow-black shadow rounded-full
            text-center w-[7rem] md:w-[9rem]
             ">Read More</h2>
        </div>

    );
}

export default ConnectProp;