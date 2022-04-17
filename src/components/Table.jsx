import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { GoIssueOpened } from "react-icons/go";

import RowInfo from "./RowInfo";

const IssueTable = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.05);
`;

const IssueRow = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 5px 10px;
  min-height: 40px;
  display: flex;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const IconHolder = styled.div`
  margin: 0 5px;
  color: green;
`;

export default function Table({ issues }) {
  

  return (
    <IssueTable>
      {issues?.map((issue, index) => (
        <IssueRow key={index}>
          <IconHolder>
            <GoIssueOpened />
          </IconHolder>
          <RowInfo  issue={issue} />
        </IssueRow>
      ))}
    </IssueTable>
  );
}