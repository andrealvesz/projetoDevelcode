import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';

export const PackageId = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-top-width: 1px;
  border-bottom-width: 0.5px;
  border-color: ${Colors.fontHeader};
`;

export const ContentArea = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const TitlePackage = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
  color: ${Colors.fontTitle};
`;

export const StatusPackage = styled.Text`
  color: ${Colors.fontTitle};
`;

export const TimerText = styled.Text`
  color: ${Colors.fontTitle};
  opacity: 0.5;
`;
