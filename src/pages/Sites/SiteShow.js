import {
    BreadCrumb,
    ImplementasiTabs,
    Layout,
    PreImplementasiTabs,
    Tabs,
} from 'components'
import projectSites from 'constants/api/projectSites'
import { Doughnut } from 'react-chartjs-2'
import React, { useEffect, useState } from 'react'

function SiteShow({ match, history, location }) {
    const id = match.params.id
    const active = location.search.split('=')[1]
    const [dataPreImplementasi, setDataPreImplementasi] = useState({
        labels: ['Completed', 'Progress'],
        datasets: [
            {
                data: [0, 10],
                backgroundColor: ['#FF8A00', '#EBEBEB'],
                borderColor: ['#FF8A00', '#EBEBEB'],
            },
        ],
    })
    const [dataImplementasi, setDataImplementasi] = useState({
        labels: ['Completed', 'Progress'],
        datasets: [
            {
                data: [0, 10],
                backgroundColor: ['#FF8A00', '#EBEBEB'],
                borderColor: ['#FF8A00', '#EBEBEB'],
            },
        ],
    })
    const [site, setSite] = useState({})
    const columnTab = [
        {
            label: 'Pre Implementasi',
            content: (
                <PreImplementasiTabs status={site?.status} site_id={site?.id} />
            ),
        },
        {
            label: 'Implementasi',
            content: (
                <ImplementasiTabs status={site?.status} site_id={site?.id} />
            ),
        },
    ]
    useEffect(() => {
        projectSites.get(id).then((res) => {
            setSite(res.data)
            const completedPreImplementasi = res.data.progressPreImplementasi
            const progressPreImplementasi =
                res.data.alokasi_unit - completedPreImplementasi
            const completedImplementasi = res.data.progressImplementasi
            const progressImplementasi =
                res.data.alokasi_unit - completedImplementasi
            setDataPreImplementasi({
                labels: ['Completed', 'Progress'],
                datasets: [
                    {
                        data: [
                            completedPreImplementasi,
                            progressPreImplementasi,
                        ],
                        backgroundColor: ['#FF8A00', '#EBEBEB'],
                        borderColor: ['#FF8A00', '#EBEBEB'],
                    },
                ],
            })
            setDataImplementasi({
                labels: ['Completed', 'Progress'],
                datasets: [
                    {
                        data: [completedImplementasi, progressImplementasi],
                        backgroundColor: ['#09E253', '#EBEBEB'],
                        borderColor: ['#09E253', '#EBEBEB'],
                    },
                ],
            })
        })
    }, [id]) // eslint-disable-line react-hooks/exhaustive-deps
    const options = {
        responsive: false,
        cutout: 60,
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },
        },
    }
    return (
        <Layout
            title={site?.name}
            subTitle="Your site"
            breadcrumb={
                <>
                    <BreadCrumb type="first" label="Site" link="/sites" />
                    <BreadCrumb label={site?.name} />
                </>
            }
        >
            <div className="rounded px-3 py-2  flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 py-2 relative mt-5 lg:mt-0">
                    <Doughnut data={dataPreImplementasi} options={options} />
                    <div className="absolute top-10 left-28 mx-2 text-sm mt-2 text-center">
                        <span className="text-2xl  mx-6">{`${Math.round(
                            (site.progressPreImplementasi / site.alokasi_unit) *
                                100
                        )} %`}</span>
                        <br />
                        <span className="text-sm  mx-6">{`${site.progressPreImplementasi}/${site.alokasi_unit}`}</span>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-4 py-2 relative mt-5 lg:mt-0">
                    <Doughnut data={dataImplementasi} options={options} />
                    <div className="absolute top-10 left-28 mx-2 text-sm mt-2 text-center">
                        <span className="text-2xl  mx-6">{`${Math.round(
                            (site.progressImplementasi / site.alokasi_unit) *
                                100
                        )} %`}</span>
                        <br />
                        <span className="text-sm  mx-6">{`${site.progressImplementasi}/${site.alokasi_unit}`}</span>
                    </div>
                </div>
            </div>
            <div className="rounded  px-3 py-2">
                <Tabs
                    color="blue"
                    column={columnTab}
                    widtTab="w-full lg:w-2/3"
                    active={active ? parseInt(active) : 1}
                />
            </div>
        </Layout>
    )
}

export default SiteShow
