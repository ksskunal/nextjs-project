import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import productContext from '../context/productContext';
import Image from 'next/image'

const Cart = () => {
  const { fetchProducts, products, cart } = React.useContext(productContext)
  const [orders, setOrders] = React.useState([])
  React.useEffect(() => {
    if (cart.items) {

      const { ids } = { ids: Object.keys(cart.items) }

      fetchProducts()

      ids.map((id) => {
        let [a] = products.filter((product) => { return product.id == id })
        setOrders((current) => [...current, a])
      })
    }
  }, [])






  return (
    <>{cart.items ?
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, key) => (
              <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Image

                    src={order.image}
                    alt="Product image"
                    width={100}
                    height={100}
                  />


                </TableCell>
                <TableCell align="right">{order.title}</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{order.price}</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> : <><div><h2 style={{ margin: '50px' }}>Your Cart is empty</h2></div></>
    }

    </>

  )
}

export default Cart