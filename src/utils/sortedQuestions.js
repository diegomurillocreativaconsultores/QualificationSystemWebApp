export const sortedQuestions = (data) => {
    return data.sort((a, b) => a.order - b.order)
};