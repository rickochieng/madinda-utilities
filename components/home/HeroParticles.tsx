"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function HeroParticles(){

return(

<Particles

init={loadSlim}

options={{

fullScreen:false,

background:{
color:"transparent"
},

particles:{

number:{
value:80
},

color:{
value:"#00C2FF"
},

move:{
enable:true,
speed:0.8
},

opacity:{
value:0.25
},

size:{
value:2
}

}

}}

/>

)

}
