const { useState } = require("react");

var slowfunction =(number)=>{
    for (let i =0; i<10000000000; i++){}
    return number *2
}
var UseMemo = () =>
{
    var [num,setNum]=useState(0);
    var [theme,updateTheme] = useState[true];
    var darkLight ={
    BackgroundColor:(theme)?"black":"white",
    color:(theme)?"white":"black",
    };
    var doublingANumber =() =>{
        return slowFunction(num)
    }
    return{
        <section>
        <><h1>this is use memo example </h1><input type="number" value={num} onChange={(e => setNum(e.target.value))} /></
        </section>
         
    }
}
