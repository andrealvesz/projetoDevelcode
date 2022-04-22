import React from 'react';
import styled from 'styled-components';

const ScrollArea = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  width: 100%;
`;

export const Scroller = ({
  children,
  horizontal,
  showHorizontal,
  showVertical,
  refreshControl,
}) => {
  return (
    <ScrollArea
      horizontal={horizontal}
      showsHorizontalScrollIndicator={showHorizontal}
      showsVerticalScrollIndicator={showVertical}
      refreshControl={refreshControl}>
      {children}
    </ScrollArea>
  );
};
