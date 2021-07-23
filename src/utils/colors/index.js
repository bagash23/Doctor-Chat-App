const mainColors = {
    green: "#0BCAD4",
    dark: "#112340",
    grey: "#7d8797",
    grey2: "#E9E9E9",
    grey3: "#EDEEF0",
    grey4: '#B1B7C2',
    dark1: "#112340",
    dark2: "#495A75",
    dark3: "#8092AF",
    blue1: "#0BCAD4",
    blue2: "#EDFCFD",
    blue3: "#0066CB",
    black1: '#000000',
    black2: 'rgba( 0, 0, 0, 0.5)',
    red: '#E06379',

};

export const colors = {
    primary: mainColors.green,
    secondary: mainColors.dark1,
    three: mainColors.blue1,
    white: "white",
    black: "black",
    red: mainColors.red,
    disable: mainColors.grey3,
    activeSend: mainColors.blue3,
    text: {
        primary: mainColors.dark,
        secondary: mainColors.grey,
        inactive: mainColors.dark2,
        menuActive: mainColors.blue,
        subTitle: mainColors.dark3
    },
    button: {
        primary: {
            background: mainColors.green,
            text: "white"
        },
        secondary: {
            background: "white",
            text: mainColors.dark
        },
        disable: {
            background: mainColors.grey3,
            text: mainColors.grey4
        },
    },
    border: {
        primary: mainColors.grey2,
    },
    cardLight: mainColors.blue2,
    LoadingBackground: mainColors.black2,
};