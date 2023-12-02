

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
        id:"btn001",
        textCode: "<Button/>",
        textClass:"btn_dark__text",
        btnTitle:"Default",
        newClass:"btn__default-gray"
        },
        {
            id:"btn002",
            textCode:"&:hover, &:focus",
            textClass: "btn_light__text",
            btnTitle:"Default",
            newClass:"btn__default-dark"
        },]},
        {   category:"outline",
            buttons:[
            {
            id:"btn003",
            textCode:"<Button variant=”outline”/>",
            textClass: "btn_dark__text",
            btnTitle: "Default",
            newClass:"btn__variant-outline"
        },
        {
            id:"btn004",
            textCode:"&:hover, &:focus",
            textClass: "btn_light__text",
            btnTitle: "Default",
            newClass:"btn__variant-outline outline"
        },]},
        {
            category:"text",
            buttons:[
                {
                    id:"btn005",
                    textCode:`<Button variant=”text”/>`,
                    textClass: "btn_dark__text",
                    btnTitle: "Default",
                    newClass:"btn__text"
                },
                {
                    id:"btn006",
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
                    id:"btn007",
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
                    id:"btn008",
                    textCode:`<Button disable />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Disabled",
                    newClass:"btn__default-gray text_color" 
                },
                {
                    id:"btn009",
                    textCode:`<Button variant=”text” disabled />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Disabled",
                    newClass:"btn__text text_color" 
                }
            ]
        },

    ]
