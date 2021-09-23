import React from 'react'
import ImplementasiUnitTablePagination from './ImplementasiUnitTablePagination'

function ImplementasiTabs({ status, site_id }) {
    return (
        <>
            {status === 'Implementasi' || status === 'Implementasi Selesai' ? (
                <>
                    <ImplementasiUnitTablePagination
                        statusUnit="all"
                        site_id={site_id}
                    />
                </>
            ) : (
                <div className="text-center">
                    Status sedang tahap pre implementasi
                </div>
            )}
        </>
    )
}

export default ImplementasiTabs
