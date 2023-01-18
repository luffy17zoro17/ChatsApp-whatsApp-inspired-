import TextProp from "./props/TextProp";




const WithPrivate = () => {
    return (
      <div className="flex justify-center">
        <TextProp
          tdivclassN={`flex justify-center py-[12vw]`}
          details={`With private messaging and calling, you can be yourself,
            speak freely and feel close to the most important people in your life
            no matter where they are.`}
          detailclassN={`text-[3.4vw] w-[22rem] md:w-[49vw] 
          md:text-[2rem]`}  
        />    
      </div>  
    );
}

export default WithPrivate;