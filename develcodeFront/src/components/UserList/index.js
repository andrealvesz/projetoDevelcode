import React, { useState } from 'react';
import {
  PackageId,
  ContentArea,
  TitlePackage,
  StatusPackage,
  TimerText,
} from './styles';

export const PackageID = ({ data, sync }) => {
  console.log('data::PackageID', data);
  const [sincronizado, setSincronizado] = useState('');
  const currentTime = new Date();

  return (
    <PackageId>
      <ContentArea>
        <TitlePackage>Pacote ID: {data}</TitlePackage>
        <StatusPackage>sincronizado</StatusPackage>
      </ContentArea>
      <TimerText>{currentTime.getHours()}</TimerText>
    </PackageId>
  );
};
