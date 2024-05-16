import React from 'react'
import NavbarApp from '../../navbar'

const Page = ({ pageContent }) => {
    return (
        <div className='body-background'>
            <NavbarApp />
            {pageContent}
        </div>
    )
}

export default Page