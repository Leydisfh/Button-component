

export const interfaceElements = [
{
    name:"Colors",
    id:1,
    link:"#/"
},
{
    name:"Typography",
    id:2,
    link:"#/"
},
{
    name:"Spaces",
    id:3,
    link:"#/"
},
{
    name:"Buttons",
    id:4,
    link:"#/"
},
{
    name:"Inputs",
    id:5,
    link:"#/"
},
{
    name:"Grid",
    id:6,
    link:"#/"
}
];

export const buttons = [
    {  category:"default",
        buttons:[ 
        {
        textCode: "&lt;Button/&gt;",
        textClass:"btn_dark__text",
        btnTitle:"Default",
        newClass:"btn__default-gray"
        },
        {
            textCode:"&:hover, &:focus",
            textClass: "btn_light__text",
            btnTitle:"Default",
            newClass:"btn__default-dark"
        },]},
        {   category:"outline",
            buttons:[
            {
            textCode:"&lt;Button variant=”outline”/&gt;",
            textClass: "btn_dark__text",
            btnTitle: "Default",
            newClass:"btn__variant-outline"
        },
        {
            textCode:"&:hover, &:focus",
            textClass: "btn_light__text",
            btnTitle: "Default",
            newClass:"btn__variant-outline outline"
        },]},
        
    ]
