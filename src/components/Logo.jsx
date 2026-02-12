import React from "react";
import { BrandLogo } from "./BrandLogo";
import { BrandName } from "./BrandName";

export const Logo = ({
    primary,
    secondary,
    tertiary,
    className = "",
    logoClassName = "",
    nameClassName = "",
}) => {
    return (
        <div className={`${className}`}>
            <BrandLogo
                className={`brand__mark ${logoClassName}`}
                primary={primary}
                secondary={secondary}
                tertiary={tertiary}
            />
            <BrandName
                className={`brand__name ${nameClassName}`}
                primary={primary}
            />
        </div>
    );
};
