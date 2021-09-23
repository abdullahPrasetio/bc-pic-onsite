import React from 'react'
import PreImplementasiUnitTablePagination from './PreImplementasiUnitTablePagination'

function PreImplementasiTabs({ status, statusUnit, site_id }) {
    return (
        <>
            {status === 'Pre Implementasi' ||
            status === 'Pre Implementasi Selesai' ? (
                <>
                    <PreImplementasiUnitTablePagination
                        statusUnit="all"
                        site_id={site_id}
                    />
                </>
            ) : (
                <div className="text-center">
                    Status sedang tahap implementasi
                </div>
            )}
        </>
    )
}

export default PreImplementasiTabs
