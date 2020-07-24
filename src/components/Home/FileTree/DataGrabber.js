import * as fs from 'fs';

//Ex. of how data is expected to be stored in objects
// const data = {
//     "/root": {
//         path: "/root",
//         type: "folder",
//         isRoot: true,
//         children: ["/root/david", "/root/jslancer"],
//     },
//     "/root/david": {
//         path: "/root/david",
//         type: "folder",
//         children: ["/root/david/readme.md"],
//     },
//     "/root/david/readme.md": {
//         path: "/root/david/readme.md",
//         type: "file",
//         content: "Thanks for reading me me. But there is nothing here.",
//     },
//}

const GrabData = (path, obj) => {
    //if the object passed in is empty, set the path passed in as the root
    obj[path] = {};
    if (obj === {})
    {
        obj[path]["isRoot"] = true;
    }

    //set the type and path of the object
    obj[path]["path"] = path;
    obj[path]["type"] = fs.lstatSync(path).isDirectory() ? "folder" : "file";

    //if the path is a file, return the object. It has no children
    if(obj[path]["type"] === "file")
    {
        return obj;
    }

    //determine the children of the path
    let arrayOfChildrenPaths = fs.readdirSync(path);
    obj[path]["children"] = [];

    //set the children of the path, and give each one its own object
    arrayOfChildrenPaths.forEach((childPath, index) => {
        let fullChildPath = path + "\\" + childPath;
        obj[fullChildPath] = {};
        obj[fullChildPath]["path"] = fullChildPath;
        obj[fullChildPath]["type"] = fs.lstatSync(fullChildPath).isDirectory() ? "folder" : "file";
        obj[path]["children"][index] = fullChildPath;
    });

    //return the object for data processing
    return obj;
}

export default GrabData;