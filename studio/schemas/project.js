/**
 * Custom schema to detail projects
 */
export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "company",
            type: "string",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "client", title: "Client" },
                    { value: "personal", title: "Personal" },
                    { value: "school", title: "School" },
                    { value: "work", title: "Work" },
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "gitHub",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
};
