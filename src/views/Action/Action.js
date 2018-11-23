import React, { Component ,Fragment} from 'react';
import { connect } from 'react-redux';
import ActionUI from './ActionUI';
import { getList, ChangeNavnum, AddMore, DefaultInfo } from './store/actionCreators';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Toast } from 'antd-mobile';
import axios from 'axios';

class Action extends Component {
    render() {
        return (
        <Fragment>
            <Header/>
            <ActionUI {...this.props}></ActionUI>
            <Footer/>
        </Fragment>
            
        )
    }
    componentWillMount() {
        this.props.init();
    }
}






const mapStateToProps = ({ Action,Header }) => {
    return {
        navNum: Action.navNum,
        slTopBar: Action.slTopBar,
        pageNum: Action.pageNum,
        total: Action.total,
        goodList: Action.goodList,
        txt: Action.txt,
        cid: Action.cid,
        city_id:Header.city_id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (caid, num,city_id) => {

            dispatch(getList(caid, num,city_id))


        },
        setnavNum: (num) => {

            dispatch(ChangeNavnum(num));
        },

        //加载更多
        showMore: (pagenum, total, length, cid,city_id) => {
            dispatch(AddMore(pagenum, total, length, cid,city_id));
        },

        init: (city_id) => {
            Toast.loading('加载中...');
            axios.post('https://bird.ioliu.cn/v1/?url=https://m.juooo.com/Show/getShowList', {
                city_id: city_id,
                category: '',
                page: '1'
            }).then(result => {
                var data = result.data.data.list
                var total = result.data.data.total
                dispatch(DefaultInfo(data, total))
                Toast.hide();
            }).catch(err => {
                console.log(err)
            })
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Action);
