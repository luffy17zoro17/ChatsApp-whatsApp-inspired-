import Image from "next/image";


const ImageProp = ({isrc,iht,iwd,iclassN,ialt,idivclassN}) => {
    return (
      <div className={idivclassN}>
        <Image
          className={iclassN}
          src={isrc}
          height={iht}
          width={iwd}
          alt={ialt}
        />
      </div>  
    );
}

export default ImageProp;