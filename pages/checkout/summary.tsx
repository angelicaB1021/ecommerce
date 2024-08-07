
import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link } from '@mui/material'

import { CartList, OrderSummary } from '../../components/cart'



const SummaryPage = () => {
  return (
    <ShopLayout title={'Resumen de orden'} pageDescription={'Resumn de la orden'}>
      <Typography component='h1' variant='h1'>Resumen de la Orden</Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* CartList */}
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 Productos)</Typography>
              <Divider sx={{ my: 2 }} />
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Dirección de Entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                    <Link underline='always'>
                        Editar
                    </Link>
                </NextLink>
              </Box>

              <Typography>Bryan David Morales</Typography>
              <Typography>Cra 1a 13</Typography>
              <Typography>Metropolitano norte</Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 3117659043</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                    <Link underline='always'>
                        Editar
                    </Link>
                </NextLink>
              </Box>
              <OrderSummary />

              <Button color='secondary' className='circular-btn' fullWidth>
                Confirmar Orden
              </Button>
            </CardContent>
          </Card>
        
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage