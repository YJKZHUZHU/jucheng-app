import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionUI from './ActionUI';
import { getList, ChangeNavnum, AddMore, DefaultInfo } from './store/actionCreators';
import axios from 'axios';

class Action extends Component {
    render() {
        return (
            <ActionUI {...this.props}></ActionUI>
        )
    }
    componentWillMount() {
        this.props.init();
    }
}






const mapStateToProps = ({ Action }) => {
    return {
        navNum: Action.navNum,
        slTopBar: Action.slTopBar,
        pageNum: Action.pageNum,
        total: Action.total,
        goodList: Action.goodList,
        txt: Action.txt,
        cid: Action.cid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (caid, num) => {

            dispatch(getList(caid, num))


        },
        setnavNum: (num) => {

            dispatch(ChangeNavnum(num));
        },

        //加载更多
        showMore: (pagenum, total, length, cid) => {
            console.log(112123)
            dispatch(AddMore(pagenum, total, length, cid));
        },

        init: () => {
            axios.post('https://bird.ioliu.cn/v1/?url=https://m.juooo.com/Show/getShowList', {
                city_id: '1',
                category: '',
                page: '1'
            }).then(result => {
                var data = result.data.data.list
                var total = result.data.data.total
                console.log(data)
                dispatch(DefaultInfo(data, total))

            }).catch(err => {
                console.log(err)
            })
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Action);