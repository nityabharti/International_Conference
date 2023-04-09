import React from 'react';
import '../../styles/pageBanner.css';
// import Link from 'next/link'

const PageBanner = ({ pageTitle}) => {
  return (
        <div className="page-title-area">
            <h2>{pageTitle}</h2>
        </div>
  )
}

export default PageBanner
