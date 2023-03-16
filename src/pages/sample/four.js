import SampleNestedLayout from '@/components/sample-nested-layout'
import React from 'react'

const Four = () => {
  return <div>Four</div>
}

Four.getLayout = function (page) {
  return <SampleNestedLayout>{page}</SampleNestedLayout>
}

export default Four
