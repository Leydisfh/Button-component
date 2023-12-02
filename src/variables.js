

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
        textCode: "<Button/>",
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
            textCode:"<Button variant=”outline”/>",
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
        {
            category:"text",
            buttons:[
                {
                    textCode:`<Button variant=”text”/>`,
                    textClass: "btn_dark__text",
                    btnTitle: "Default",
                    newClass:"btn__text"
                },
                {
                    textCode:"&:hover, &:focus",
                    textClass: "btn_light__text",
                    btnTitle: "Default",
                    newClass:"btn__text_color outline"
                }
            ]
        },
        {
            category:"disableShadow",
            buttons:[
                {
                    textCode:`<Button disableShadow />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Default",
                    newClass:"btn__dark_background" 
                }
            ]
        },
        {
            category:"disable",
            buttons:[
                {
                    textCode:`<Button disable />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Disabled",
                    newClass:"btn__default-gray text_color" 
                },
                {
                    textCode:`<Button variant=”text” disabled />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Disabled",
                    newClass:"btn__text text_color" 
                }
            ]
        },

    ]
