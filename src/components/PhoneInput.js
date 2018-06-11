import React from "react";
import MaskedInput from "react-text-mask";

const PhoneInput = (props) => {

    const digit = /\d|\s/;
    const digitAndOnePlus = /\+|\d/;
    const digitBracketsDashSpace = /\(|\)|-|\d|\s/;
    const mask = [digitAndOnePlus, digit, ...new Array(15).fill(digitBracketsDashSpace)];
    const pipe = (conformedValue) => {

        if (conformedValue.split("(").length > 2) {
            return false;
        }
        if (conformedValue.split(")").length > 2) {
            return false;
        }
        if (conformedValue.split("-").length > 2) {
            return false;
        }
        let hasTwoSpacesTogether = false;
        let prevChar = "";
        conformedValue.split("").forEach((char, index) => {
            if (index > 0 && char === " " && prevChar === " ") {
                hasTwoSpacesTogether = true;
            }
            prevChar = char;
        });
        if (hasTwoSpacesTogether) {
            return false;
        }
        return {
            value: conformedValue,
            indexesOfPipedChars: []
        }
    };

    return (
        <MaskedInput {...props} mask={mask} pipe={pipe}/>
    )
};

export default PhoneInput;