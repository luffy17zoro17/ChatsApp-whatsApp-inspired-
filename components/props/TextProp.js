



const TextProp = ({title,titleclassN,details,detailclassN,tdivclassN}) => {
    return (
      <div className={tdivclassN}>
        <h1 className={titleclassN}>{title}</h1>
        <p className={detailclassN}>{details}</p>
      </div>  
    );
}

export default TextProp;