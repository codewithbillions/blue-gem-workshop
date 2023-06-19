import {useState} from 'react';

const Banner = ({purpose}) => (
    <div>{purpose}</div>
)

function About (){
    const [firstName, setfirstName] = useState("clinton")
    return (
        <div>
            <div>hello from about</div>

            <Banner purpose={firstName}/>
            <Banner purpose={'For school'}/>
            <Banner purpose={'For car'}/>
            <Banner purpose={'For fun'}/>

            <button onClick={() => setfirstName("DJ AZ of NAIJA")}>{firstName}</button>
         
        </div>
    )
}

export default About