import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: #0D0D0D;

`;

export const Row = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex: ${props => props.flex && 2};
  margin-top: 4;
  margin-left: 2;
  margin-right: 2; 
`;


export const Button = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #595959;
    height: 100%;
    max-height: 100;
    border-radius: 50;
    margin-left: 2;
    margin-right: 2;    

    background-color: #595959;
    ${props => props.color && `
        background-color: ${props.color};`};
    ${props => props.flex && `
        flex: ${props.flex};`};
    

    

`;

export const TextButton  = styled.Text`
    font-size: 28;
    font-weight: 500;
    color: #ffffff;
    ${props => props.color && `
        color: ${props.color};`};
`;

export const ContainerDisplay = styled.View`
    flex:1;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;    
    align-items: flex-end;
`;
export const TextDisplay  = styled.Text`
    font-size: 60;
    font-weight: 500;
    padding: 10px;
    color: #fff;
`;

