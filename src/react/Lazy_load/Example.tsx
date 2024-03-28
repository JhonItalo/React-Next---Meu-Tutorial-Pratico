"use client";

import React, { useState } from "react";
import { Suspense } from "react";

const FormComplete = React.lazy(async () => import("../Forms/validation"));

function LazyLoad() {
    const [value, setvalue] = useState<boolean>(false);
    return (
        <div>
            {value && (
                <Suspense fallback={<p>loading</p>}>
                    <h2>Preview</h2>
                    <FormComplete />
                </Suspense>
            )}
            <button
                onClick={() => {
                    setvalue((prev) => !prev);
                }}>
                alterar
            </button>
        </div>
    );
};

export default LazyLoad;
