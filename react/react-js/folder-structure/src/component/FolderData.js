const explorer = {
  name: "root",
  type: "folder",
  items: [
    {
      name: "sub folder1 ",
      type: "folder",
      items: [
        {
          name: "file 1",
          type: "folder",
          items: [{ name: "file 12", type: "file" }],
        },
        {
          name: "file 2",
          type: "file",
        },
        {
          name: "file 3",
          type: "file",
        },
      ],
    },
    {
      name: "sub folder2 ",
      type: "file",
    },
  ],
};

export default explorer;
