import Input from './Input'
import Button from './Button'
import { Container, Content, Row, Column } from './style'
import { useState } from 'react'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('0')

  const handleOnClear = () => {
    if (currentNumber.length > 1) {
        setCurrentNumber(currentNumber.slice(0, -100000))
      } else {
        setCurrentNumber('0')
      }
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      const resultValue = String(sum)
      setCurrentNumber(resultValue)
      setResult(resultValue)
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleSubtractionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const subtraction = Number(firstNumber) - Number(currentNumber)
      const resultValue = String(subtraction)
      setCurrentNumber(resultValue)
      setResult(resultValue)
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleMultiplicationNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber)
      const resultValue = String(multiplication)
      setCurrentNumber(resultValue)
      setResult(resultValue)
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const division = Number(firstNumber) / Number(currentNumber)
      const resultValue = String(division)
      setCurrentNumber(resultValue)
      setResult(resultValue)
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleSubtractionNumbers()
          break
        case '*':
          handleMultiplicationNumbers()
          break
        case '/':
          handleDivisionNumbers()
          break
        default:
          break
      }
    }
  }

  
  // const handleParenthesesNumbers = () => {
  //   if (currentNumber.length > 0) {
  //     const lastChar = currentNumber[currentNumber.length - 1]
  //     if (lastChar === '(') {
  //       setCurrentNumber(currentNumber.slice(0, -1))
  //     } else {
  //       setCurrentNumber(`${currentNumber}(`)
  //     }
  //   } else {
  //     setCurrentNumber('(')
  //   }
  // }

  // const handlePercentNumbers = () => {
  //   if (currentNumber.length > 0) {
  //     const percent = Number(currentNumber) / 100
  //     const resultValue = String(percent)
  //     setCurrentNumber(resultValue)
  //     setResult(resultValue)
  //     setFirstNumber('0')
  //     setOperation('')
  //   }
  // }


  const handleDeleteNumbers = () => {
    if (currentNumber.length > 1) {
      setCurrentNumber(currentNumber.slice(0, -1))
    } else {
      setCurrentNumber('0')
    }
  }

  const handleCommaNumbers = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber(`${currentNumber}.`)
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Column>
            <Button label="ac" onClick={handleOnClear} />
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="0" onClick={() => handleAddNumber('0')} />
          </Column>
          <Column>
            <Button label="( )" onClick={() => handleAddNumber('')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="," onClick={handleCommaNumbers} />
          </Column>
          <Column>
            <Button label="%" onClick={() => handleAddNumber('')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="del" onClick={handleDeleteNumbers} />
          </Column>
          <Column>
            <Button label="/" onClick={handleDivisionNumbers} />
            <Button label="x" onClick={handleMultiplicationNumbers} />
            <Button label="-" onClick={handleSubtractionNumbers} />
            <Button label="+" onClick={handleSumNumbers} />
            <Button label="=" onClick={handleEquals} />
          </Column>
        </Row>
      </Content>
    </Container>
  )
}

export default App
