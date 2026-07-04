"use client";

import CountUp from "react-countup";

interface Props{
    end:number;
    suffix?:string;
    title:string;
    color:string;
}

export default function AnimatedStat({
    end,
    suffix="",
    title,
    color,
}:Props){

    return(

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <h2
                className={`text-4xl font-black ${color}`}
            >
                <CountUp
                    end={end}
                    duration={2.8}
                />
                {suffix}
            </h2>

            <p className="mt-2 text-slate-500">
                {title}
            </p>

        </div>

    );

}