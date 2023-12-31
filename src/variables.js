
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
        {
            category:"local_grocery",
            buttons:[
                {
                    id:"btn010",
                    icon: "src/assets/icons/carts.svg",
                    textCode:`<Button startIcon=”local_grocery_store” />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Default",
                    newClass:"btn__dark_background flex-card" 

                },
                {
                    id:"btn011",
                    icon: "src/assets/icons/carts.svg",
                    textCode:`<Button endIcon=”local_grocery_store” />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Default",
                    newClass:"btn__dark_background flex-card" 
                }
            ]
        },
        {
            category:"size",
            buttons:[
                {
                        id:"btn012",
                        textCode:`<Button size=”sm” />`,
                        textClass: "btn_dark__text",
                        btnTitle: "Default",
                        newClass:"btn__dark_background size_shadow-sm" 
                },
                {
                    id:"btn013",
                    textCode:`<Button size=”md” />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Default",
                    newClass:"btn__dark_background size_shadow-md" 
            },
            {
                id:"btn014",
                textCode:`<Button size=”lg” />`,
                textClass: "btn_dark__text",
                btnTitle: "Default",
                newClass:"btn__dark_background size_shadow-lg" 
        },

            ]
        },
        {
            category:"mix",
            buttons:[
                {
                        id:"btn015",
                        textCode:`<Button color=”default” />`,
                        textClass: "btn_dark__text",
                        btnTitle: "Default",
                        newClass:"btn__default-gray gray-shadow" 
                },
                {
                    id:"btn016",
                    textCode:`<Button color=”primary” />`,
                    textClass: "btn_dark__text",
                    btnTitle: "Default",
                    newClass:"btn__dark_background" 
            },
            {
                id:"btn017",
                textCode:`<Button color=”secondary” />`,
                textClass: "btn_dark__text",
                btnTitle: "Secondary",
                newClass:"btn__secondary-gray" 
        },
        {
            id:"btn018",
            textCode:`<Button color=”danger” />`,
            textClass: "btn_dark__text",
            btnTitle: "Danger",
            newClass:"btn__secondary-danger" 
    },
            ]
        },
        {
            category:"mix",
            buttons:[
                {
                        id:"btn019",
                        textCode:`&:hover, &:focus`,
                        textClass: "btn_light__text",
                        btnTitle: "Default",
                        newClass:"btn__default-dark" 
                },
                {
                    id:"btn020",
                    textCode:" ",
                    btnTitle: "Default",
                    newClass:"btn__dark_blue" 
            },
            {
                id:"btn021",
                textCode:" ",
                btnTitle: "Secondary",
                newClass:"btn__dark-green" 
        },
        {
            id:"btn022",
            textCode:" ",
            btnTitle: "Danger",
            newClass:"btn__dark-danger" 
    },
            ]
        }


    ]
