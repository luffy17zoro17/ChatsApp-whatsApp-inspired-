import IconProp from "../props/IconProp";
import TextProp from "../props/TextProp";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CallIcon from '@mui/icons-material/Call';

import Link from "next/link";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Footer = () => {
    return (
      <div className="relative bg-black text-white flex flex-col items-center py-[6rem]">
       <div className="flex flex-col lg:flex-row"> 
        <div className="flex flex-col items-center
          pr-[6rem] justify-between">
          <div className='flex items-center gap-4 
            pt-[14rem] 
            text-lg text-violet-500 font-bold
             lg:pt-0'>
            <IconProp 
              icon={<CallIcon/>} 
              icoclassN="border-l-[1rem] shadow shadow-black 
                  rounded-l-full border-violet-500 p-2 bg-white
                            text-violet-600 border-y-[0.6rem]" 
            />
            <TextProp title={"ChatsApp"}/>
          </div>  

          <div className="absolute w-full 
             left-0 flex justify-center lg:static">
          <div className='
               border flex items-center shadow-inner shadow-black
               w-[10rem] text-black 
               p-3 gap-[1vw] border-r-[1rem] rounded-full bg-violet-400
               md:static'>
             <TextProp
               title={"Download"}
             />
             <IconProp
               icon={<DownloadForOfflineIcon/>}
             />
          </div>  
          </div>
        </div>   

        <div className="text-sm flex flex-col gap-[6rem]
           pt-[5rem] lg:pt-0 md:text-xl lg:flex-row lg:gap-[4rem] xl:gap-[6rem]">
          <div className="flex gap-[8rem] lg:gap-[4rem] xl:gap-[6rem]">
          <ul className="space-y-5">
            <li className="font-light text-[0.8rem] md:text-sm">What we do</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Stories</li>
            <li>For Business</li>
          </ul>
          <ul className="space-y-5">
            <li className="font-light text-[0.8rem] md:text-sm">Who we are</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Brand Center</li>
            <li>Privacy</li>
          </ul>
          </div>
          
          <div className="flex gap-[7rem] lg:gap-[4rem] xl:gap-[6rem]">
          <ul className="space-y-5">
            <li className="font-light text-[0.8rem] md:text-sm">Use ChatsApp</li>
            <li>Android</li>
            <li>iphone</li>
            <li>Mac/PC</li>
            <li>ChatsApp Web</li>
          </ul>
          <ul className="space-y-5">
            <li className="font-light text-[0.8rem] md:text-sm">Need help?</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Coronavirus</li>
          </ul>
          </div>
        </div> 
       </div>

       <hr className="border-by mt-[5rem] w-[60vw]"/> 
       <div className="flex px-9 items-center py-[5rem]
         sm:px-0 lg:space-x-[2vw] xl:space-x-[8vw]">
          
          <div className="font-light flex flex-col gap-[3vw]
           lg:flex-row lg:text-sm">
            <div className="lg:w-[9rem]">
              2023 © ChatsApp LLC</div>
            <div className="lg:w-[8rem]">Terms of Service<br/>
            <div className="text-sm font-bold text-yellow-300">[-Created by<br/>
             <Link className="hover:text-red-400 hover:underline" href={`https://www.linkedin.com/in/thomas-mathew-b26b87253/`}>
              Thomas Mathew</Link>]</div></div>
          </div>

          <div className="flex gap-[2vw] absolute left-0
           w-full justify-center top-[12rem] gap-6 lg:static">
             <IconProp icoclassN={`border rounded-full p-3
                  text-blue-400 cursor-pointer`} 
                  icon={<TwitterIcon/>}/>
             <IconProp icoclassN={`border rounded-full p-3
                  text-red-500 cursor-pointer`} 
                  icon={<YouTubeIcon/>}/>
             <IconProp icoclassN={`border rounded-full p-3
                 text-pink-400 cursor-pointer`}
                  icon={<InstagramIcon/>}/>
             <IconProp icoclassN={`border rounded-full p-3
                   text-blue-600 cursor-pointer`} 
                  icon={<FacebookIcon/>}/>
          </div>

          <div className="flex items-center justify-between 
            border rounded-full p-3 px-6 w-[11rem] ml-[5rem]
             lg:ml-0">
            <TextProp title={"English"}/>
            <IconProp icon={<ArrowDropDownIcon 
              className="lg:ml-[1rem] xl:ml-[3rem]"/>}/>
          </div>
       </div> 
      </div>  
    );
}

export default Footer;