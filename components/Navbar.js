
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
           h-[11rem] w-full z-20 pb-[5rem] 
           bg-gradient-to-b from-orange-600 via-orange-300 to-transparent'>
          <div className='flex items-center gap-4 
           text-xl lg:text-2xl text-violet-500 font-bold pl-8'>
            <IconProp 
              icon={<CallIcon/>} 
              icoclassN="border-l-[1rem] shadow shadow-black 
                  rounded-l-full border-violet-500 p-2 bg-white
                            text-violet-600 border-y-[0.6rem]" 
            />
            <TextProp titleclassN={`cursor-pointer`} title={"ChatsApp"}/>
          </div>  

          <div className='flex gap-[3vw] items-center fixed right-8
             lg:text-xl'>
             <TextProp 
               titleclassN={`z-10 cursor-pointer
                hover:text-cyan-400 hidden md:flex`}
               title={"ChatsApp Web"}
             />

             <div className='border flex items-center shadow-inner shadow-black
               p-3 gap-[1vw] border-r-[1rem] rounded-full bg-violet-400'>
             <TextProp
               title={"Download"}
               titleclassN={`hover:text-cyan-400 cursor-pointer`}
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