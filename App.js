import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Button, TextButton, Row , 
  TextDisplay, ContainerDisplay} from './styles';
export default function App() {
  const [result, setResult] = useState('0');
  const [lastKey, setLastKey ] = useState('#');
  const [specialKeys, setSpecialKeys] = useState(['=','+','/','*','-','x'])

  function handleBtn (b) {
    
    if (specialKeys.includes(lastKey) && b != 'C' && specialKeys.includes(b) && lastKey != '=' ){
      setResult(result);
      //Alert.alert('55')
    }    
    else
    if (b == 'C' )
      setResult(0)
    else
    if (b == "=" ){
      setResult(eval(result));
    } 
    else
    if (specialKeys.includes(b) && (b != 'C') && lastKey == '='){
      setResult(result + b)
    }         
    else{
      if (result == '0' || lastKey == '=' )
        setResult(b)
      else
        setResult(result + b);
    }
    if (b != 'C')
      setLastKey(b);
  }

  return (
    <Container>
      <Row flex={2}>
        <ContainerDisplay>
          <TextDisplay>
            {result}
          </TextDisplay>
        </ContainerDisplay>
        
      </Row>

      <Row>
        <Button  flex={3} color="#A5A5A5" onPress={() => handleBtn("C")}>
          <TextButton color="#333333" >
            C
          </TextButton>
        </Button>
        
        <Button color="#F09A36" onPress={() => handleBtn("/")}>
          <TextButton >
            /
          </TextButton>
        </Button>
      </Row>

      <Row>
        <Button onPress={() => handleBtn("7")}>
          <TextButton>
            7
          </TextButton>
        </Button>
        <Button onPress={() => handleBtn("8")}>
          <TextButton>
            8
          </TextButton>
        </Button>
        <Button onPress={() => handleBtn("9")}>
          <TextButton>
            9
          </TextButton>
        </Button>
        <Button color="#F09A36" onPress={() => handleBtn("*")}>
          <TextButton>
            x
          </TextButton>
        </Button>
      </Row>

      <Row>
        <Button onPress={() => handleBtn("4")}>
          <TextButton>
            4
          </TextButton>
        </Button>
        <Button onPress={() => handleBtn("5")}>
          <TextButton>
            5
          </TextButton>
        </Button>
        <Button onPress={() => handleBtn("6")}>
          <TextButton>
            6
          </TextButton>
        </Button>
        <Button color="#F09A36" onPress={() => handleBtn("-")}>
          <TextButton>
            -
          </TextButton>
        </Button>
      </Row>

      <Row>
        <Button onPress={() => handleBtn("1")}>
          <TextButton>
            1
          </TextButton>
        </Button>
        <Button onPress={() => handleBtn("2")}>
          <TextButton>
            2
          </TextButton>
        </Button>
        <Button onPress={() => handleBtn("3")}>
          <TextButton>
            3
          </TextButton>
        </Button>
        <Button color="#F09A36" onPress={() => handleBtn("+")}>
          <TextButton>
            +
          </TextButton>
        </Button>
      </Row>

      <Row>
        <Button flex={2} onPress={() => handleBtn("0")}>
          <TextButton >
            0
          </TextButton>
        </Button>
        <Button onPress={() => handleBtn(".")}>
          <TextButton>
            .
          </TextButton>
        </Button>  
        <Button color="#F09A36" onPress={() => handleBtn("=")}>
          <TextButton>
            =
          </TextButton>
        </Button>      
      </Row>
      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
