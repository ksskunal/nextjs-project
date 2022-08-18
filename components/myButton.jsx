import React from 'react'
import { Button } from '@mui/material';

const MyButton = (props) => {
  const { value, handleClick } = props
  return (
    <>
      <Button onClick={() => { handleClick(product.id) }} style={{ margin: '5px' }} variant="contained" size="small" color="primary">
        {value}
      </Button>
    </>
  )
}

export default MyButton