import React from 'react';
import { Typography, Container } from "@material-ui/core";
import { Sample } from "../components/Sample";
import { AddField } from "../components/AddField";
import {SampleWithMaterialUI} from "../components/SampleWithMaterialUI";

export const App = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography>App Container</Typography>
      </Container>

      {/*<Container maxWidth="sm">*/}
      {/*  <Sample />*/}
      {/*</Container>*/}

      {/*<Container maxWidth="sm">*/}
      {/*  <AddField />*/}
      {/*</Container>*/}

      <Container maxWidth="sm">
        <SampleWithMaterialUI/>
      </Container>

    </>
  );
}
