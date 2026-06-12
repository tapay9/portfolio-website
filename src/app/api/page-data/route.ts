import { NextResponse } from "next/server";

const experienceData = [];

const educationData = [
    {
        date: "Aug 2023 - May 2027",
        title: "B.S. in Computer Science",
        subtitle: "Morgan State University — Baltimore, MD"
    },
];

const projectOverview = {
    caseStudies: [
        { name: "Wellness Data Dashboard", url: "https://github.com/tapay9/wellness-data-dashboard" },
        { name: "BitFit", url: "https://github.com/tapay9/BitFi" },
    ],
    sideProjects: [
        { name: "Flixster", url: "https://github.com/tapay9/Flixster-" },
        { name: "JJK Combat Analytics", comingSoon: true },
        { name: "Anime Popularity Trends", comingSoon: true },
        { name: "Netflix Content Analysis", comingSoon: true },
        { name: "Apple Music Trends", comingSoon: true },
    ]
};

export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};