export interface Review {
    title: string;
    text: string;
    author: string;
}

const reviews: Review[] = [
    {
        title: "They came out quickly for an emergency roof repair, and did a great job.",
        text: "We have used them in the past for larger projects, and have always been pleased.",
        author: "Darrell T."
    },
    {
        title: "Would definitely recommend them.",
        text: "They finished the work in one day, and the new roof looks great!",
        author: "Melinda T."
    },
    {
        title: "Can't thank you enough!",
        text: "Peter helped me through the whole process and was able to replace my entire roof!",
        author: "Yawar K."
    },
    {
        title: "Very quick at getting back to you and very quick with results!",
        text: "I have already recommended Peter to multiple friends, and they have all been highly satisfied.",
        author: "David"
    }
];

export const getRandomReview = (): Review => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    return reviews[randomIndex];
};

export const getAllReviews = (): Review[] => {
    return reviews;
};