
const Card = (data) => {
    console.log(data);
  return (
   <div className="card">
        <img src={data.img} alt="" />
        <h1>{data.user}</h1>
        <p>{data.profession}</p>
      </div>
  )
}

export default Card