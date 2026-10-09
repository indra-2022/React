
const Card = (props) => {
    return (
    <div className="card">
      <div className="top">
        <img src={props.logo} alt="" />
        <button>
          Save <img src={props.icon} alt="" />
        </button>
      </div>

      <div className="center">
        <h3>{props.company}</h3>
        <span>{props.posted}</span>

        <h2>{props.role}</h2>

        <div>
          <h4>Position: {props.position}</h4>
          <h4>Level: {props.level}</h4>
        </div>
      </div>

      <div className="buttom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card