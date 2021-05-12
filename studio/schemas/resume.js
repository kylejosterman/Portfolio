/**
 * Custom schema to add a resume
 */
export default {
    name: "resume",
    title: "Resume",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "upload",
            title: "Upload",
            type: "file",
        },
    ],
};
