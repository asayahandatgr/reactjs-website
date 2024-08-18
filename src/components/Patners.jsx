import '../styles/Patners.css';

function Patners(props) {
  return (
    <div className="partner-list">
        {
            props.patnersList.map((item,index)=>{
                return(
                    <div className="kartu-partner" key={index}>
                    <img src={item.image}/>
                </div>  
                )
            })
        }
    </div>
  )
}

export default Patners
