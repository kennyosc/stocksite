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
                    <h2 className='d-inline mr-4'>Dashboard</h2> <button className='btn btn-primary btn-sm mb-2'>+ Add Inquiry</button>
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
