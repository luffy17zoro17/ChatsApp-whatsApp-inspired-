
import CallIcon from '@mui/icons-material/Call';
import IconProp from './props/IconProp';
import TextProp from './props/TextProp';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CenterItems = [
    {
        id:1,
        title:"Features",
        icon:<ArrowDropDownIcon/>,
    },
    {
        id:2,
        title:"Privacy",
        icon:""
    },
    {
        id:3,
        title:"Help Center",
        icon:""
    },
    {
        id:4,
        title:"Blog",
        icon:""
    }
]




const Navbar = () => {
    return (
        <div className='fixed top-0 flex items-center
            w-full z-20 h-[5rem] rounded-b-xl
           bg-gradient-to-b from-orange-600 via-yellow-400 to-yellow-200
            shadow-black shadow md:absolute xl:fixed'>
          <div className='flex items-center gap-4 
           text-xl lg:text-2xl text-violet-500 font-bold pl-8'>
            <IconProp 
              icon={<CallIcon/>} 
              icoclassN="border-l-[1rem] shadow shadow-black 
                  rounded-l-full border-violet-500 p-1 bg-white
                            text-violet-600 border-y-[0.3rem]" 
            />
            <TextProp titleclassN={`cursor-pointer`} title={"ChatsApp"}/>
          </div>  

          <div className='flex gap-[3vw] items-center absolute right-8
             lg:text-xl'>
             <TextProp 
               titleclassN={`z-10 cursor-pointer 
                
                hover:text-cyan-400 hidden md:flex`}
               title={"ChatsApp Web"}
             />

             <div className='border flex items-center shadow-inner shadow-black
               p-3 gap-[1vw] border-r-[1rem] rounded-full bg-violet-400
               hover:text-cyan-600'>
             <TextProp
               title={"Download"}
               titleclassN={`cursor-pointer`}
             />
             <IconProp
               icon={<DownloadForOfflineIcon/>}
             />
             </div>

          </div> 
          <div className='flex z-[-10] text-xl fixed w-full justify-center gap-[2vw]
             hidden xl:flex'>
            {CenterItems.map((item)=>(
               <div key={item.id} className="flex items-center cursor-pointer
               hover:text-cyan-400">
                  <TextProp title={item.title}/>
                  <IconProp icon={item.icon} />
               </div>  
            ))}
          </div>
        </div>
    )
}

export default Navbar