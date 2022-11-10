import React from 'react'
import FormProvider from '../../context'
import {   Convertor } from '../../sections/index'

const Home = () => {
  return (
    <>


    <FormProvider>
      <Convertor/>
      </FormProvider>
     {/* <Tokens/> */}
     </>
  )
}

export default Home