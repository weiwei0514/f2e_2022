import React, { useState } from 'react'
import styled from 'styled-components'
// components
import Signature from './Signature'
import Pdf from './Pdf'
const Week2 = () => {
  const [signatureImg, setSignatureImg] = useState(null)

  return (
    <Week2Wrapper>
      <Signature
        signatureImg={signatureImg}
        setSignatureImg={setSignatureImg}
      />
      <Pdf signatureImg={signatureImg} />
    </Week2Wrapper>
  )
}
const Week2Wrapper = styled.div``
export default Week2
