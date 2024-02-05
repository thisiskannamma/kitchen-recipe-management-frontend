import React from 'react'
import '../App.css'
import Barchart from '../dashboard/Barchart'
import Piechart from '../dashboard/Piechart'

function Dashboard() {
    return (
        <div className="container-fluid p-3">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">

                <div className="row">

                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Number of recipes by category</h6>
                            </div>
                            <div className="card-body">
                                <div className="chart-bar">
                                    <Barchart/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-4 col-lg-7">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">number of recipes created in a week</h6>
                            </div>
                            <div className="card-body ">
                                <div className="chart-pie ">
                                    <Piechart/>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard