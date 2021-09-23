import { BreadCrumb, Layout, ProjectSiteTabPagination } from 'components'
import React from 'react'

function SiteIndex() {
    return (
        <Layout
            title="Site"
            subTitle="Your site"
            breadcrumb={
                <>
                    <BreadCrumb type="first" label="Site" />
                </>
            }
        >
            <ProjectSiteTabPagination />
        </Layout>
    )
}

export default SiteIndex
