"use client";

interface aboutProps {
    active: boolean
    model: {
        title: string;
        subtitle: string;
        price: string;
        onclick: any;
    };
}

function AboutViewModel({ active }: { active: boolean }) {
    return <AboutView active={active} model={useAboutModel()} />;
};


function AboutView({ active, model }: aboutProps) {
    const { title, subtitle, price, onclick } = model;
    return (
        <div>
            {active && <p>está ativo</p>}
            <button className="w-14 h-52 bg-orange-400" onClick={onclick}></button>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{price}</p>
        </div>
    );
};

function useAboutModel() {
    return {
        title: "shoes",
        subtitle: "jordan 1 mid low",
        price: "199",
        onclick: async () => {
            console.log("click")
        },
    };
};





export default AboutView;
