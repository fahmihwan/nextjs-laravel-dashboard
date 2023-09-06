import { useRouter } from "next/router";
import React from "react";

const view = () => {
    const router = useRouter();
    const data = router.query;

    return <div>view</div>;
};

export default view;
