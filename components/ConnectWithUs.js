
import TextProp from "./props/TextProp";


import ConnectProp from "./ConnectWithUs/ConnectProp";





const ConnectWithUs = () => {
    return (
       <div className="flex 
         bg-gradient-to-r from-transparent via-blue-200 to-blue-300
         overflow-x-hidden py-[6rem] pb-[7rem]
          hover:overflow-x-auto
          text-[3vw] md:text-[1.5rem]">
         
          <TextProp
              title={`Connect with us`}
              titleclassN={`absolute z-10 pl-7 text-blue-500
              text-[6vw] pb-5 md:text-[3rem] lg:pl-[5vw]`}
          />

         <div className="flex gap-[11vw] px-11 pl-7 lg:pl-[5vw]">
         <ConnectProp
             title={`Connecting to ChatsApp by Proxy`}
             details={`We’re mindful that just as we’ve celebrated the 
             start to 2023 through private texts or calls, there are...`}
         />
         <ConnectProp
             title={`Improved Calling on ChatsApp`}
             details={`While ChatsApp is best known 
               for bringing private and secure messaging to users across the world, 
               more and more people are using ChatsApp as a way to...`}
         />
         <ConnectProp
             title={`Avatars on ChatsApp`}
             details={`Today we’re excited to bring avatars to ChatsApp,
              a new and personalized way to express yourself.`}
         />
         <ConnectProp
             title={`Find, Message, and Buy on ChatsApp`}
             details={`Today we're sharing an update on what 
               we’re building to help people find, message, and buy something from a
                business on ChatsApp. Our team is in...`}
         />
         <ConnectProp
             title={`Communities Now Available!`}
             details={`As we shared earlier this year, we’ve been hard at 
                work building Communities, a major update to how people will be 
                able to connect on ChatsApp in the...`}
         />
         </div>
       </div> 
    );
}

export default ConnectWithUs;