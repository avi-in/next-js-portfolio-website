export const slideInFromLeft=(delay:number)=>{
    return {
        hidden:{x:-100,opacity:0},
        visible:{
            x:0,
            opacity:1,
            transition:{
                delay:delay,
                duration:0.5,
            }
        }
    }

}
export const slideInFromRight=(delay:number)=>{
    return {
        hidden:{x:100,opacity:0},
        visible:{
            x:0,
            opacity:1,
            transition:{
                delay:delay,
                duration:0.5,
            }
        }
    }

}
export const slideInFromTop={
        hidden:{y:-100,opacity:0},
        visible:{
            y:0,
            opacity:1,
            transition:{
                delay:0.5,
                duration:0.5
            }
        }
}
export const slideInFromBottom={
    hidden:{y:100,opacity:0},
    visible:{
        y:0,
        opacity:1,
        transition:{
            delay:0.5,
            duration:0.5,
        }
    }
}
export const flipCard = {
    hidden: { rotateY: 0 },
    visible: { rotateY: 180, transition: { duration: 0.6 } },
  };