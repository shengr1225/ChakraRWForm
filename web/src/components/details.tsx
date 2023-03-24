import {
  Heading,
  Text,
  VStack,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Checkbox,
  useBreakpointValue,
  FormErrorMessage,
} from '@chakra-ui/react'

import {
  Form,
  TextField,
  Submit,
  FieldError,
  SelectField,
  useForm,
} from '@redwoodjs/forms'

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 })
  const formMethods = useForm()

  const onSubmit = (e) => {
    console.log(e)
  }
  return (
    <Form onSubmit={onSubmit} formMethods={formMethods}>
      <VStack h="full" w="full" p={10} spacing={10} alignItems="flex-start">
        <VStack spacing={3} alignItems="flex-start">
          <Heading size="2xl">Your details</Heading>
          <Text>If you already have an account, click here</Text>
        </VStack>
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl
              isInvalid={formMethods.formState.errors.firstname ? true : false}
            >
              <FormLabel>First name</FormLabel>
              <Input
                name="firstname"
                as={TextField}
                placeholder="John"
                validation={{ required: true }}
              ></Input>
              <FormErrorMessage>
                <FieldError name="firstname" className="rw-field-error" />
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl
              isInvalid={formMethods.formState.errors.lastname ? true : false}
            >
              <FormLabel>Last name</FormLabel>
              <Input
                name="lastname"
                as={TextField}
                placeholder="Doe"
                validation={{ required: true }}
              ></Input>
              <FormErrorMessage>
                <FieldError name="lastname" className="rw-field-error" />
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl
              isInvalid={formMethods.formState.errors.address ? true : false}
            >
              <FormLabel>Address</FormLabel>
              <Input
                name="address"
                as={TextField}
                validation={{ required: true }}
                placeholder="Blvd. Broken Dreams"
              ></Input>
              <FormErrorMessage>
                <FieldError
                  name="address"
                  className="rw-field-error"
                ></FieldError>
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl
              isInvalid={formMethods.formState.errors.city ? true : false}
            >
              <FormLabel>City</FormLabel>
              <Input
                name="city"
                as={TextField}
                validation={{ required: true }}
                placeholder="San Francisco"
              ></Input>
              <FormErrorMessage>
                <FieldError name="city" className="rw-field-error"></FieldError>
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl
              isInvalid={formMethods.formState.errors.country ? true : false}
            >
              <FormLabel>Country</FormLabel>
              <Select name="country" as={SelectField}>
                <option value="usa">United State of America</option>
                <option value="uae">United Arab Emirates</option>
                <option value="nmk">North Macedonia</option>
                <option value="de">Germany</option>
              </Select>
              <FormErrorMessage>
                <FieldError
                  name="country"
                  className="rw-field-error"
                ></FieldError>
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox name="shipToBilling" defaultChecked>
              Ship to billing address
            </Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button as={Submit} type="submit" size="lg" w="full">
              Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Form>
  )
}

export default Details
