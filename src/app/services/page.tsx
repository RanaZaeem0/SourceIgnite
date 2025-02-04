import Breadcrumb from '@/components/Common/Breadcrumb'
import Features from '@/components/Features'
import React from 'react'

const page = () => {
  return (
    <div>
      <Breadcrumb
        pageName="Services Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <Features />
    </div>
  )
}

export default page
