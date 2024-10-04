import proptypes from "prop-types";
const userData = [
    {
        name:"Shyam",
        city:"Kallakurichi",
        description:"Front-end developer",
        skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
        online:false,
        profile:"images/sham.JPG" ,  
    },
    {
        name:"Robert",
        city:"Salem",
        description:"Back-end developer",
        skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
        online:true,
        profile:"images/sham.JPG"  , 
    },
    {
        name:"Balu",
        city:"Karur",
        description:"Front-end developer",
        skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
        online:true,
        profile:"images/sham.JPG" ,  
    },
    {
        name:"Kumar",
        city:"Madras",
        description:"Front-end developer",
        skills:["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"],
        online:false,
        profile:"images/sham.JPG" ,  
    },
];
function User(props){
 return (
    <div className="card-container">
        <span className={props.online? "pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} alt="user" className="img"></img>
        <h3>{props.name} </h3>
        <h3>{props.city} </h3>
        <p>{props.description}</p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary outline">Folowing</button>
        </div>
        <div className="skills">
            <h4>Skills</h4>
            <ul>
               {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
               ))}   
                 </ul>
        </div>
    </div>
    
 );
};
export const UserCard = () => { 
    //for one user profile card
//   return < User name="Shyam" city="Salem" description="Front-end developer"  skills={["UI/UX","Front End Developer","HTML","CSS","JavaScript","React","Node"]} online={true} profile="images/sham.JPG"/>;  
     return <>
     {userData.map((user,index)=>(
        <User key={index} name={user.name} city={user.city} description={user.description} online={user.online} profile={user.profile} skills={user.skills} />
     ))

     }
     </>
};

User.proptypes = {
    name:proptypes.string.isRequired,
    city:proptypes.string.isRequired,
    description:proptypes.string.isRequired,
    skills:proptypes.arrayOf(proptypes.string).isRequired,
    online:proptypes.bool.isRequired,
    profile:proptypes.string.isRequired,
}