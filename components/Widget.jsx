import { useState } from 'react'
import Head from 'next/head'

export default function Widget({ pageName }) {
  const [isActive, setIsActive] = useState(false)

  if (isActive) {
    return (
      <>
        <Head>
          <title>You're browsing the {pageName}</title>
        </Head>
        <div>
          <button onClick={() => setIsActive(false)}>
            Restore original title
          </button>
          <p>
            <em>Take a look at the title!</em>
          </p>
        </div>
      </>
    );
  }

  return <>
    <button onClick={() => setIsActive(true)}>
      Change page title
    </button>
  </>
}