import { Container, Flex } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import Cart from 'src/components/cart'
import Details from 'src/components/details'

const FormPage = () => {
  return (
    <>
      <MetaTags title="Form" description="Form page" />

      <Container maxW="container.xl" p={0}>
        <Flex
          py={[0, 10, 20]}
          direction={{ base: 'column-reverse', md: 'row' }}
          h={{ base: 'auto', md: '100vh' }}
        >
          <Details />
          <Cart />
        </Flex>
      </Container>
    </>
  )
}

export default FormPage
