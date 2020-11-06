// Write your Character component here
import React, { useState } from "react";

export default function Character(props) {
    const { details } = props;

    return (
        <div className="name">
            {details.name}
        </div>
    );
}