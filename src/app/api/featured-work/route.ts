import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Wellness Analytics Dashboard",
        description: "Designed a data-rich dashboard visualizing screen time, sleep, and stress patterns across 50,000 users, with breakdowns by occupation, age group, and individual records.",
        roles: ["UX Designer", "Data Visualization Designer"],
        image: "/images/feature-work/feature-img.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};