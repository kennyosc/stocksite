import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { inquiryList } from '../redux/actions/inquiryActions'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async componentDidMount() {
        await this.props.dispatch(inquiryList())
        this.setState({
            list: this.props.inquiryList.list
        })
    }

    renderInquiryRow = () => {
        if (this.state.list.length === 0) {
            return (<div>Loading...</div>)
        } else {
            return this.state.list.map((val, index) => {
                console.log(val.prediction)
                return (
                    <tr>
                        <td scope="row">{index + 1}</td>
                        <td scope="row">{val.kodePerusahaan}</td>
                        <td scope="row">{new Date(val.financialDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                        <td scope="row">{val.price}</td>
                        <td scope="row">{(val.eps).toFixed(2)}</td>
                        <td scope="row">{(val.roe).toFixed(2)}</td>
                        <td scope="row">{(val.pbv).toFixed(2)}</td>
                        <td scope="row">{(val.per).toFixed(2)}</td>
                        <td scope="row">{(val.der).toFixed(2)}</td>
                        <td scope="row"><b>{Math.floor(val.prediction.marginOfSafety)}</b></td>
                        <td scope="row"><b>{Math.floor(val.prediction.intrinsicValue)}</b></td>
                    </tr>
                )
            })
        }
    }

    render() {
        if (!this.props.userAuth.auth) {
            return (
                <Redirect to='/login' />
            )
        } else {
            return (
                <div className='container mt-5'>
                    <h2 className='d-inline mr-4'>Dashboard</h2>
                    <button type="button" class="btn btn-primary btn-sm mb-2" data-toggle="modal" data-target="#exampleModal">+ Add Inquiry</button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Input New Inquiry</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputEmail1">Company Code</label>
                                            <input onChange={this.handleChange} type="text" name='kodePerusahaan' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <small className="form-text text-muted">Please input your desired company code </small>
                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Outstanding Stock</label>
                                            <input onChange={this.handleChange} type="number" name='outstandingStock' className="form-control" id="exampleInputPassword1" />
                                            <small className="form-text text-muted">Companies outstanding stock (OS)</small>

                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Equity</label>
                                            <input onChange={this.handleChange} type="number" name='equity' className="form-control" id="exampleInputPassword1" />

                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Liability</label>
                                            <input onChange={this.handleChange} type="number" name='liability' className="form-control" id="exampleInputPassword1" />

                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Net Profit</label>
                                            <input onChange={this.handleChange} type="number" name='netProfit' className="form-control" id="exampleInputPassword1" />

                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Stock Price</label>
                                            <input onChange={this.handleChange} type="number" name='price' className="form-control" id="exampleInputPassword1" />
                                            <small className="form-text text-muted">Companies stock price at current date</small>

                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Financial Date</label>
                                            <input onChange={this.handleChange} type="date" name='financialDate' className="form-control" id="exampleInputPassword1" />
                                            <small className="form-text text-muted">Published financial statement date</small>

                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Inflation</label>
                                            <input onChange={this.handleChange} type="number" name='inflation' className="form-control" id="exampleInputPassword1" />
                                            <small className="form-text text-muted">Default to 50% per year</small>

                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">Compound Annual Growth Rate (CAGR)</label>
                                            <input onChange={this.handleChange} type="number" name='cagr' className="form-control" id="exampleInputPassword1" />
                                            <small className="form-text text-muted">Default to 8% per year</small>

                                        </div>
                                        <div className="form-group col-auto">
                                            <label for="exampleInputPassword1">% Margin Of Safety</label>
                                            <input onChange={this.handleChange} type="number" name='percentageMos' className="form-control" id="exampleInputPassword1" />
                                            <small className="form-text text-muted">Your desired margin of safety. Defaults to 30%</small>

                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Submit New Inquiry</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Kode Perusahaan</th>
                                    <th scope="col">Financial Date</th>
                                    <th scope="col">Stock Price</th>
                                    <th scope="col">EPS</th>
                                    <th scope="col">ROE</th>
                                    <th scope="col">PBV</th>
                                    <th scope="col">PER</th>
                                    <th scope="col">DER</th>
                                    <th scope="col">Margin Of Safety</th>
                                    <th scope="col">Intrinsic Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderInquiryRow()}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userAuth: state.userAuth,
        inquiryList: state.inquiryList
    }
}

export default connect(mapStateToProps)(Dashboard)
