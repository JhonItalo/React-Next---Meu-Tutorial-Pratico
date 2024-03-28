"use client";

interface aboutProps {
    model: {
        title: string;
        subtitle: string;
        price: string;
        onclick: any;
    };
}

function AboutViewModel() {
    return <AboutView model={useAboutModel()} />;
};


function AboutView({ model }: aboutProps) {
    const { title, subtitle, price, onclick } = model;
    return (
        <div>
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
