"use client";

const items=[
"Meter #A123 Connected",
"Leak Detected - Lusaka",
"Grid Health Updated",
"Voltage Balanced",
"AMI Sync Complete",
];

export default function ActivityFeed(){

return(

<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

<h3 className="font-bold text-slate-900 mb-4">

Live Activity

</h3>

<div className="space-y-4">

{items.map((item)=>(
<div
key={item}
className="flex items-center gap-3"
>

<div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"/>

<p className="text-slate-900/70">

{item}

</p>

</div>
))}

</div>

</div>

);

}