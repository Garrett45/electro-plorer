import React, { useState } from "react";
import values from "lodash/values";
import TreeNode from "./TreeNode";
import { v1 as uuidv1 } from "uuid";

const data = {
    "/root": {
        path: "/root",
        type: "folder",
        isRoot: true,
        children: ["/root/david", "/root/jslancer"],
    },
    "/root/david": {
        path: "/root/david",
        type: "folder",
        children: ["/root/david/readme.md"],
    },
    "/root/david/readme.md": {
        path: "/root/david/readme.md",
        type: "file",
        content: "Thanks for reading me me. But there is nothing here.",
    },
    "/root/jslancer": {
        path: "/root/jslancer",
        type: "folder",
        children: ["/root/jslancer/projects", "/root/jslancer/vblogs"],
    },
    "/root/jslancer/projects": {
        path: "/root/jslancer/projects",
        type: "folder",
        children: ["/root/jslancer/projects/treeview"],
    },
    "/root/jslancer/projects/treeview": {
        path: "/root/jslancer/projects/treeview",
        type: "folder",
        children: [],
    },
    "/root/jslancer/vblogs": {
        path: "/root/jslancer/vblogs",
        type: "folder",
        children: [],
    },
};

const FileTree = (props) => {
    
}

export default FileTree;