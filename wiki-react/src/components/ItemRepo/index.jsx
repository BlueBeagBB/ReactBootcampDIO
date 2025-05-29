import React from 'react'
import { ItemContainer } from './style'

function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Gabriel</h3>
        <p>dio/bluebeagbb</p>
        <a href="#">Ver repositorio</a><br /><br />
        <a href="#" className='remover'>Remover</a>
        <hr />
    </ItemContainer>
  ) 
}

export default ItemRepo;
