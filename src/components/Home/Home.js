import React, { useState } from "react";
import styled from "styled-components";
import Tree from "./FileTree/Tree";
import { remote } from "electron";
import * as fs from 'fs';
import GrabData from "./FileTree/DataGrabber";
import FileTree from "./FileTree/FileTree";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main"
    "sidebar main main main";
  height: inherit;
`;

const Header = styled.div`
  grid-area: header;
  /* background-color: dodgerblue; */
  border-bottom: 1px solid #f1f1f1;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  /* background-color: green; */
  border-right: 1px solid #f1f1f1;
`;

const Main = styled.div`
  grid-area: main;
  /* background-color: darkseagreen; */
`;

const StyledFileExplorer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

const TreeWrapper = styled.div`
  width: 100%;
`;

console.log(remote.app.getPath("home"));

let a = GrabData(remote.app.getPath("home"), {});
console.log("SECOND DATA GRAB OF " + remote.app.getPath("home") + "\\Personal");
let b = GrabData(remote.app.getPath("home") + "\\Personal", a)
console.log(b);

const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onSelect = (file) => setSelectedFile(file);

  return (
    <Grid>
      <Header>
        <h3>Head</h3>
      </Header>
      <Sidebar>
        <h3>Side</h3>
        <StyledFileExplorer>
          <TreeWrapper>
            <Tree
              onSelect={() => {
                console.log("hi");
                onSelect();
              }}
            />
          </TreeWrapper>
          <div>
            {selectedFile &&
              selectedFile.type === "file" &&
              selectedFile.content}
          </div>
        </StyledFileExplorer>
      </Sidebar>
      <Main>
        <h3>Main</h3>
      </Main>
    </Grid>
  );
};

export default Home;
