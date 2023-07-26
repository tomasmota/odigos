import { FloatBox, KeyvalImage, KeyvalText } from "@/design.system";
import React from "react";
import styled from "styled-components";

const ManageDestinationHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 104px;
  align-items: center;
  border-radius: 25px;
  margin: 24px 0;
  background: radial-gradient(
      78.09% 72.18% at 100% -0%,
      rgba(150, 242, 255, 0.4) 0%,
      rgba(150, 242, 255, 0) 61.91%
    ),
    linear-gradient(180deg, #2e4c55 0%, #303355 100%);
`;

const TextWrapper = styled.div``;

export function ManageDestinationHeader({ data: { destination_type, name } }) {
  return (
    <ManageDestinationHeaderWrapper>
      <KeyvalImage
        src={destination_type?.image_url}
        style={{
          backgroundColor: "#fff",
          padding: 4,
          marginRight: 16,
          marginLeft: 16,
        }}
      />
      <TextWrapper>
        <KeyvalText size={24} weight={700}>
          {destination_type.display_name}
        </KeyvalText>

        <KeyvalText size={20}>{name}</KeyvalText>
      </TextWrapper>
    </ManageDestinationHeaderWrapper>
  );
}