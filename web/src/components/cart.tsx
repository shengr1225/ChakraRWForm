import {
  Heading,
  VStack,
  HStack,
  Text,
  useColorMode,
  Button,
  useColorModeValue,
  AspectRatio,
  Image,
  Stack,
  Divider,
} from '@chakra-ui/react'

const Cart = () => {
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
  const secondTextColor = useColorModeValue('gray.600', 'whiteAlpha.600')
  return (
    <VStack
      h="full"
      w="full"
      p={10}
      spacing={6}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too high on your eyes, {''}
          <Button
            onClick={toggleColorMode}
            variant="link"
            colorScheme={bgColor}
          >
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="logo.png" alt="logo" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack spacing={0} w="full" alignItems="flex-start">
            <Heading size="sm">Penny board</Heading>
            <Text color={secondTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondTextColor}>Subtotal</Text>
          <Heading size="sm" color={secondTextColor}>
            $119.00
          </Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondTextColor}>Shipping</Text>
          <Heading size="sm" color={secondTextColor}>
            $19.99
          </Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondTextColor}>Taxes (estimated)</Text>
          <Heading size="sm" color={secondTextColor}>
            $23.80
          </Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color={secondTextColor}>Total</Text>
          <Heading size="lg" color={secondTextColor}>
            $162.79
          </Heading>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default Cart
